import React from 'react'
import pt from 'prop-types'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Container from '../styles'
import CardLink from '../CardLink'
import INTERFACES from '@/prop-types'

const Episodes = ({
  selectedEpisode,
  charactersByEpisode,
}) => (
  <Container className="container">
    <h1>EPISODE</h1>
    <h2>Characters</h2>
    <Row className="cardRow">
      <Col className="imageCol episode">
        {
          charactersByEpisode.map && charactersByEpisode.map((resident) => (
            <CardLink forPath="characters" from="location" key={resident.name + resident.id} isLocations data={resident} />
          ))
        }
      </Col>
      <Col span={8} className="infoTable">
        {
          Object.keys(selectedEpisode).map((key) => {
            if (
              (typeof selectedEpisode[key] === 'string' || typeof selectedEpisode[key] === 'number')
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
                    { selectedEpisode[key] }
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

Episodes.propTypes = {
  selectedEpisode: pt.shape(INTERFACES.SELECTED_EPISODE),
  charactersByEpisode: pt.arrayOf(pt.shape(INTERFACES.SELECTED_CHARACTER)),
}
Episodes.defaultProps = {
  selectedEpisode: {},
  charactersByEpisode: [],
}

export default Episodes
