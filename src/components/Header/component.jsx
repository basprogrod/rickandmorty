import React from 'react'
import pt from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Row, Col, Button } from 'antd'
import 'antd/dist/antd.css'
import StyledHeader from './styles'
import { INCLUDE, PATH } from '@/constants'
import logo from '@/assets/logo.png'

const Header = ({ getSearchData }) => {
  const history = useHistory()
  const { location: { pathname } } = history
  return (
    <StyledHeader>
      <div className="container">
        <Row className="headerRow">
          <Col className="headerCol first" lg={{ span: 2 }} xs={{ span: 24 }}>
            <div className="logo">
              <img className="logoImg" src={logo} alt="logo" />
            </div>
          </Col>
          <Col className="headerCol" xs={{ span: 7 }} xl={{ span: 2 }} sm={{ span: 4 }}>
            <Button
              href="/"
              onClick={(e) => {
                e.preventDefault()
                getSearchData({ pathname })
                history.push(`${PATH.TABLE}/${INCLUDE.EPISODES}/1`)
              }}
            >
              Episode
            </Button>
          </Col>
          <Col className="headerCol" xs={{ span: 7 }} xl={{ span: 2 }} sm={{ span: 4 }}>
            <Button
              href="/"
              onClick={(e) => {
                e.preventDefault()
                getSearchData({ pathname })
                history.push(`${PATH.TABLE}/${INCLUDE.LOCATIONS}/1`)
              }}
            >
              Location
            </Button>
          </Col>
          <Col className="headerCol" xs={{ span: 7 }} xl={{ span: 2 }} sm={{ span: 4 }}>
            <Button
              href="/"
              onClick={(e) => {
                e.preventDefault()
                getSearchData({ pathname })
                history.push(`${PATH.TABLE}/${INCLUDE.CHARACTERS}/1`)
              }}
            >
              Character
            </Button>
          </Col>
        </Row>
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  getSearchData: pt.func,
}
Header.defaultProps = {
  getSearchData: () => {},
}

export default Header
