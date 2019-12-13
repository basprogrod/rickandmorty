import React from 'react'
import pt from 'prop-types'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Container from '../styles'
import CardLink from '../CardLink'
import INTERFACES from '@/prop-types'
import CustomLink from '@/components/CustomLink'
import { INCLUDE } from '@/constants'
import getNumberFromUrl from '@/helpers'

const Character = ({
  selectedCharacter,
  episodesByCharacter,
}) => {
  const infoInterface = [
    {
      id: 1,
      title: 'Name',
      key: 'name',
    },
    {
      id: 2,
      title: 'Status',
      key: 'status',
    },
    {
      id: 3,
      title: 'Species',
      key: 'species',
    },
    {
      id: 4,
      title: 'Gender',
      key: 'gender',
    },
    {
      id: 5,
      title: 'Type',
      key: 'type',
    },
    {
      id: 6,
      title: 'Location',
      key: 'location',
    },
  ]
  const getLocationsId = (locationUrl) => getNumberFromUrl(locationUrl)
  return (
    <Container className="container">
      <h1>CHARACTER</h1>
      <Row className="cardRow">
        <Col className="imageCol" xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
          <div className="imgWrap">
            <img src={selectedCharacter.image} alt="" />
          </div>
        </Col>
        <Col span={10} className="infoTable">
          {
            infoInterface.map((item) => {
              if (item.key === 'location' && selectedCharacter[item.key]) {
                return (
                  <Row key={item.id} className="cardTable">
                    <Col className="cardCol" lg={{ span: 5 }} sm={{ span: 8 }}>
                      {item.key}
                      :
                    </Col>
                    <Col className="cardCol">
                      <CustomLink
                        from={INCLUDE.LOCATIONS}
                        record={{ id: getLocationsId(selectedCharacter[item.key].url) }}
                        item={selectedCharacter[item.key].name}
                      />
                    </Col>
                  </Row>
                )
              }
              return (
                <Row key={item.id} className="cardTable">
                  <Col className="cardCol" lg={{ span: 5 }} sm={{ span: 8 }}>
                    {item.title}
                    :
                  </Col>
                  <Col className="cardCol">
                    { selectedCharacter[item.key] }
                  </Col>
                </Row>
              )
            })
          }
          {/* {
            Object.keys(selectedCharacter).map((key) => {
              if ((typeof selectedCharacter[key] !== 'object')
                  && key !== 'image'
                  && key !== 'id'
                  && selectedCharacter[key] !== ''
                  && key !== 'url') {
                return (
                  <Row key={key} className="cardTable">
                    <Col className="cardCol" lg={{ span: 5 }} sm={{ span: 8 }}>
                      {key}
                      :
                    </Col>
                    <Col className="cardCol">
                      { selectedCharacter[key] }
                    </Col>
                  </Row>
                )
              }

              if (key === 'location') {
                return (
                  <Row key={selectedCharacter[key].name} className="cardTable">
                    <Col className="cardCol" lg={{ span: 5 }} sm={{ span: 8 }}>
                      {key}
                      :
                    </Col>
                    <Col className="cardCol">
                      <CustomLink
                        from={INCLUDE.LOCATIONS}
                        record={{ id: getLocationsId(selectedCharacter[key].url) }}
                        item={selectedCharacter[key].name}
                      />
                    </Col>
                  </Row>
                )
              }
              return null
            })
          } */}
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
