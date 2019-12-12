import React from 'react'
import pt from 'prop-types'
import {
  Row, Col,
} from 'antd'
import 'antd/dist/antd.css'
import Container from '../styles'
import CardLink from '../CardLink'
import INTERFACES from '@/prop-types'

const Location = ({
  selectedLocation,
  residentsByLocation,
}) => (
  <Container className="container">
    <h1>LOCATION</h1>
    <h2>Residents</h2>
    <Row className="cardRow">
      <Col className="imageCol episode">
        {
          (selectedLocation.residents && selectedLocation.residents.length === 0)
            ? 'no residents'
            : residentsByLocation.map((resident) => (
              <CardLink forPath="characters" key={resident.name + resident.id} isLocations data={resident} />
            ))
        }
      </Col>
      <Col span={8} className="infoTable">
        {
          Object.keys(selectedLocation).map((key) => {
            if (
              (typeof selectedLocation[key] !== 'object')
                && key !== 'key'
                && key !== 'id'
                && key !== 'url') {
              return (
                <Row key={key} className="cardTable">
                  <Col className="cardCol" span={6}>
                    {key}
                    :
                  </Col>
                  <Col className="cardCol">
                    {
                       selectedLocation[key]
                    }
                  </Col>
                </Row>
              )
            }
            return null
          })
        }
      </Col>
    </Row>
  </Container>
)

Location.propTypes = {}
Location.defaultProps = {}

Location.propTypes = {
  selectedLocation: pt.shape(INTERFACES.SELECTED_LOCATION),
  residentsByLocation: pt.arrayOf(pt.shape(INTERFACES.SELECTED_CHARACTER)),
}
Location.defaultProps = {
  selectedLocation: {},
  residentsByLocation: [],
}

export default Location
