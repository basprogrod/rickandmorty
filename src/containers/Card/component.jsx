import React, { useEffect, useCallback } from 'react'
import pt from 'prop-types'
import qs from 'query-string'
import { useHistory } from 'react-router-dom'
import Character from './Character'
import Location from './Location'
import Episodes from './Episodes'
import 'antd/dist/antd.css'
import { INCLUDE } from '@/constants'
import INTERFACES from '@/prop-types'

const Card = ({
  getCardData,
  selectedCharacter,
  selectedLocation,
  selectedEpisode,
  episodesByCharacter,
  residentsByLocation,
  charactersByEpisode,
}) => {
  const history = useHistory()
  const { pathname } = history.location
  const searchId = Number(qs.parse(history.location.search).id)

  const getCardDataCallback = useCallback(() => {
    if (pathname.includes(INCLUDE.CHARACTERS)) {
      getCardData({
        path: INCLUDE.CHARACTERS,
        id: searchId,
      })
      return
    }
    if (pathname.includes(INCLUDE.LOCATIONS)) {
      getCardData({
        path: INCLUDE.LOCATIONS,
        id: searchId,
      })
      return
    }
    if (pathname.includes(INCLUDE.EPISODES)) {
      getCardData({
        path: INCLUDE.EPISODES,
        id: searchId,
      })
    }
  }, [
    getCardData,
    searchId,
    pathname,
  ])

  useEffect(() => {
    getCardDataCallback()
  }, [
    getCardDataCallback,
  ])

  const renderCardByPath = (path) => {
    if (path.includes(INCLUDE.CHARACTERS)) {
      return (
        <Character
          selectedCharacter={selectedCharacter}
          episodesByCharacter={episodesByCharacter}
        />
      )
    }
    if (path.includes(INCLUDE.LOCATIONS)) {
      return (
        <Location
          selectedLocation={selectedLocation}
          residentsByLocation={residentsByLocation}
        />
      )
    }
    if (path.includes(INCLUDE.EPISODES)) {
      return (
        <Episodes
          selectedEpisode={selectedEpisode}
          charactersByEpisode={charactersByEpisode}
        />
      )
    }
    return null
  }

  return renderCardByPath(pathname)
}

Card.propTypes = {
  getCardData: pt.func,
  selectedCharacter: pt.shape(INTERFACES.SELECTED_CHARACTER),
  selectedLocation: pt.shape(INTERFACES.SELECTED_LOCATION),
  selectedEpisode: pt.shape(INTERFACES.SELECTED_EPISODE),
  episodesByCharacter: pt.arrayOf(pt.shape()),
  residentsByLocation: pt.arrayOf(pt.shape()),
  charactersByEpisode: pt.arrayOf(pt.shape()),
}
Card.defaultProps = {
  getCardData: {},
  selectedCharacter: {},
  selectedLocation: {},
  selectedEpisode: {},
  episodesByCharacter: [],
  residentsByLocation: [],
  charactersByEpisode: [],
}

export default Card
