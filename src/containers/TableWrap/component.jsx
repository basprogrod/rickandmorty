import React, { useState, useCallback, useEffect } from 'react'
import pt from 'prop-types'
import {
  Row, Col, Layout, Input,
  Pagination, Table, Button,
} from 'antd'
import 'antd/dist/antd.css'
import Container from './styles'
import CustomSelect from './CustomSelect'
import { INCLUDE } from '@/constants'
import tableInterface from './data'

const TableWrap = (props) => {
  const {
    location: { pathname },
    episodes,
    locations,
    characters,
    getData,
    getSearachData,
  } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [searchString, setSearchString] = useState('')
  const [searchField, setSearchField] = useState('name')
  const hendleSelectChenge = useCallback((value) => setSearchField(value), [])

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

  useEffect(() => {
    setCurrentPage(1)
    setSearchString('')
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
                  getData({ pathname })
                }}
              >
                Clear Serch
              </Button>
              <Input.Search
                placeholder="input search text"
                value={searchString}
                onSearch={() => {
                  getSearachData({
                    pathname,
                    query: {
                      [searchField]: searchString,
                      page: 1,
                    },
                  })
                  setCurrentPage(1)
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
          onChange={(page) => {
            if (searchString) {
              getSearachData({
                pathname,
                query: {
                  [searchField]: searchString,
                  page,
                },
              })
            } else {
              getData({ page, pathname })
            }
            setCurrentPage(page)
          }}
          total={setTableDataByPathName()[1].info.count}
          pageSize={20}
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
  getData: pt.func,
  getSearachData: pt.func,
}
TableWrap.defaultProps = {
  location: {},
  pathname: '',
  episodes: [],
  locations: [],
  characters: [],
  getData: {},
  getSearachData: {},
}

export default TableWrap
