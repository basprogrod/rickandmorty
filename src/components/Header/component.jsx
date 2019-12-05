import React from 'react'
import pt from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Row, Col, Button } from 'antd'
import 'antd/dist/antd.css'
import StyledHeader from './styles'
import logo from '@/assets/logo.png'

const Header = ({ getData }) => {
  const history = useHistory()
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
              href="/tabele/episodes"
              onClick={(e) => {
                e.preventDefault()
                getData()
                history.push('/tabele/episodes')
              }}
            >
              Episode
            </Button>
          </Col>
          <Col className="headerCol" xs={{ span: 7 }} xl={{ span: 2 }} sm={{ span: 4 }}>
            <Button
              href="/tabele/locations"
              onClick={(e) => {
                e.preventDefault()
                getData()
                history.push('/tabele/locations')
              }}
            >
              Location
            </Button>
          </Col>
          <Col className="headerCol" xs={{ span: 7 }} xl={{ span: 2 }} sm={{ span: 4 }}>
            <Button
              href="/tabele/characters"
              onClick={(e) => {
                e.preventDefault()
                getData()
                history.push('/tabele/characters')
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
  getData: pt.func,
}
Header.defaultProps = {
  getData: () => {},
}

export default Header
