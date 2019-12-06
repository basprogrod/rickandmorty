import React, { useState, useCallback, useEffect } from 'react'
import pt from 'prop-types'
import qs from 'query-string'
import {
  Row, Col, Layout, Input,
  Pagination, Table, Button,
} from 'antd'
import 'antd/dist/antd.css'
import { useHistory } from 'react-router-dom'
import Container from './styles'
import CustomSelect from './CustomSelect'
import {
  INCLUDE, PATH, FIRST_PAGE, PAGE_SIZE,
} from '@/constants'
import tableInterface from './data'

const TableWrap = (props) => {
  const {
    location: { pathname },
    episodes,
    locations,
    characters,
    getSearchData,
  } = props
  const numberPage = Number(pathname.slice(pathname.lastIndexOf('/') + 1))
  const history = useHistory()
  const isQueryString = !!Object.keys(qs.parse(history.location.search)).length
  const [currentPage, setCurrentPage] = useState(numberPage)
  const [searchString, setSearchString] = useState('')
  const [searchField, setSearchField] = useState('name')
  const hendleSelectChenge = useCallback((value) => setSearchField(value), [])

  const setQueryToUrl = () => (isQueryString ? `?${searchField}=${searchString}` : '')

  const setPath = (page, func, clear = false) => {
    if (clear) {
      if (pathname.includes(INCLUDE.LOCATIONS)) {
        history.push(`${PATH.TABLE}/${INCLUDE.LOCATIONS}/${page}`)
      }
      if (pathname.includes(INCLUDE.CHARACTERS)) {
        history.push(`${PATH.TABLE}/${INCLUDE.CHARACTERS}/${page}`)
      }
      if (pathname.includes(INCLUDE.EPISODES)) {
        history.push(`${PATH.TABLE}/${INCLUDE.EPISODES}/${page}`)
      }
      return null
    }
    if (func) {
      if (pathname.includes(INCLUDE.LOCATIONS)) {
        history.push(`${PATH.TABLE}/${INCLUDE.LOCATIONS}/${page}${func()}`)
      }
      if (pathname.includes(INCLUDE.CHARACTERS)) {
        history.push(`${PATH.TABLE}/${INCLUDE.CHARACTERS}/${page}${func()}`)
      }
      if (pathname.includes(INCLUDE.EPISODES)) {
        history.push(`${PATH.TABLE}/${INCLUDE.EPISODES}/${page}${func()}`)
      }
    } else {
      if (pathname.includes(INCLUDE.LOCATIONS)) {
        history.push(`${PATH.TABLE}/${INCLUDE.LOCATIONS}/${page}?${searchField}=${searchString}`)
      }
      if (pathname.includes(INCLUDE.CHARACTERS)) {
        history.push(`${PATH.TABLE}/${INCLUDE.CHARACTERS}/${page}?${searchField}=${searchString}`)
      }
      if (pathname.includes(INCLUDE.EPISODES)) {
        history.push(`${PATH.TABLE}/${INCLUDE.EPISODES}/${page}?${searchField}=${searchString}`)
      }
    }
    return null
  }

  const setTableDataByPathName = () => {
    if (pathname.includes(INCLUDE.EPISODES)) {
      return [
        tableInterface.columnsEpisodes,
        episodes,
      ]
    }
    if (pathname.includes(INCLUDE.LOCATIONS)) {
      return [
        tableInterface.columnsLocations,
        locations,
      ]
    }
    return [
      tableInterface.columnsCharacters,
      characters,
    ]
  }

  const handleGetSearchData = () => {
    if (isQueryString) {
      getSearchData({
        pathname,
        query: {
          ...qs.parse(history.location.search),
          page: currentPage,
        },
      })
    } else {
      getSearchData({
        pathname,
        query: {
          page: currentPage,
        },
      })
    }
  }

  const handlePageChange = (page) => {
    handleGetSearchData()
    setPath(page, setQueryToUrl)
    setCurrentPage(page)
  }

  useEffect(() => {
    handleGetSearchData()
  }, [pathname])

  return (
    <Layout className="layout">
      <Container className="tableContainer">
        <div className="tableWrap">
          <h2>
            {
              pathname.includes(INCLUDE.LOCATIONS)
                && 'Locations'
            }
            {
              pathname.includes(INCLUDE.CHARACTERS)
                && 'Characters'
            }
            {
              pathname.includes(INCLUDE.EPISODES)
                && 'Episodes'
            }
          </h2>
          <Row className="tableHeader">
            <Col className="searchBlock">
              <Button
                type="primary"
                onClick={() => {
                  setSearchString('')
                  getSearchData({ pathname })
                  setPath(FIRST_PAGE, null, true)
                  setCurrentPage(FIRST_PAGE)
                }}
              >
                Clear Search
              </Button>
              <Input.Search
                placeholder="input search text"
                value={searchString}
                onSearch={() => {
                  setPath(currentPage)
                  getSearchData({
                    pathname,
                    query: {
                      ...qs.parse(history.location.search),
                    },
                  })
                  setCurrentPage(FIRST_PAGE)
                }}
                onChange={(e) => {
                  setSearchString(e.target.value)
                }}
                style={{ width: 200 }}
              />
              <CustomSelect hendleChange={hendleSelectChenge} path={pathname} />
            </Col>
          </Row>
          <Table
            columns={setTableDataByPathName()[0]}
            dataSource={setTableDataByPathName()[1].results}
            className="table"
            pagination={false}
            size="small"
          />
        </div>
        <Pagination
          className="pagination"
          current={currentPage}
          onChange={handlePageChange}
          total={setTableDataByPathName()[1].info.count}
          pageSize={PAGE_SIZE}
        />
      </Container>
    </Layout>
  )
}

TableWrap.propTypes = {
  location: pt.shape(),
  pathname: pt.string,
  episodes: pt.shape(),
  locations: pt.shape(),
  characters: pt.shape(),
  getSearchData: pt.func,
}
TableWrap.defaultProps = {
  location: {},
  pathname: '',
  episodes: [],
  locations: [],
  characters: [],
  getSearchData: {},
}

export default TableWrap
