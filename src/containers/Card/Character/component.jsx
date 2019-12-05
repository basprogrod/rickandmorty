import React, { useMemo } from 'react'
import pt from 'prop-types'
import {
  Row, Col,
} from 'antd'
import moment from 'moment'
import 'antd/dist/antd.css'
import Container from '../styles'
import CardLink from '../CardLink'
import INTERFACES from '@/prop-types'

const Character = ({
  selectedCharacter,
  episodesByCharacter,
}) => {
  const getDate = (value) => moment(value).format('DD/MM/YYYY, hh:mm:ss')
  const date = useMemo(() => getDate(selectedCharacter.created), [selectedCharacter.created])
  return (
    <Container>
      <h1>CHARACTER</h1>
      <Row className="cardRow">
        <Col className="imageCol" xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
          <div className="imgWrap">
            <img src={selectedCharacter.image} alt="" />
          </div>
        </Col>
        <Col span={10} className="infoTable">
          {
            Object.keys(selectedCharacter).map((key) => {
              if ((typeof selectedCharacter[key] === 'string' || typeof selectedCharacter[key] === 'number')
                  && key !== 'image'
                  && key !== 'key'
                  && key !== 'id'
                  && selectedCharacter[key] !== ''
                  && key !== 'url') {
                return (
                  <Row key={key} className="cardTable">
                    <Col className="cardCol" lg={{ span: 4 }} sm={{ span: 8 }}>
                      {key}
                      :
                    </Col>
                    <Col className="cardCol">
                      { key === 'created' ? date : selectedCharacter[key] }
                    </Col>
                  </Row>
                )
              }
              return null
            })
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Episodes</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {
            episodesByCharacter.map((episode) => (
              <CardLink key={episode.name + episode.id} forPath="episodes" data={episode} />
            ))
          }
        </Col>
      </Row>
    </Container>
  )
}

Character.propTypes = {
  selectedCharacter: pt.shape(INTERFACES.SELECTED_CHARACTER),
  episodesByCharacter: pt.arrayOf(pt.shape(INTERFACES.SELECTED_EPISODE)),
}
Character.defaultProps = {
  selectedCharacter: {},
  episodesByCharacter: [],
}

export default Character
