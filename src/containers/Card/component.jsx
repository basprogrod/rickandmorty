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
  isGetCardData,
  selectedCharacter,
  selectedLocation,
  selectedEpisode,
  episodesByCharacter,
  residentsByLocation,
  charactersByEpisode,
  arrayNumbersOfEpisodesByCharacter,
  arrayNumbersOfResidentsByLocation,
  arrayNumbersOfCharactersByEpisode,
}) => {
  console.log("TCL: selectedCharacter", selectedCharacter)
  const history = useHistory()
  const { pathname } = history.location
  const searchId = Number(qs.parse(history.location.search).id)

  const getCardDataCallback = useCallback(() => {
    if (pathname.includes(INCLUDE.CHARACTERS)) {
      getCardData({
        path: INCLUDE.CHARACTERS,
        id: searchId,
        data: arrayNumbersOfEpisodesByCharacter,
      })
      return
    }
    if (pathname.includes(INCLUDE.LOCATIONS)) {
      getCardData({
        path: INCLUDE.LOCATIONS,
        id: searchId,
        data: arrayNumbersOfResidentsByLocation,
      })
      return
    }
    if (pathname.includes(INCLUDE.EPISODES)) {
      getCardData({
        path: INCLUDE.EPISODES,
        id: searchId,
        data: arrayNumbersOfCharactersByEpisode,
      })
    }
  }, [
    getCardData,
    selectedCharacter.name,
    selectedLocation.name,
    selectedEpisode.name,
    pathname,
    searchId,
  ])

  useEffect(() => {
    getCardDataCallback()
  }, [
    getCardDataCallback,
  ])

  const renderCardByPath = (path) => {
    if (path.includes(INCLUDE.CHARACTERS) && isGetCardData) {
      return (
        <Character
          selectedCharacter={selectedCharacter}
          episodesByCharacter={episodesByCharacter}
        />
      )
    }
    if (path.includes(INCLUDE.LOCATIONS) && isGetCardData) {
      return (
        <Location selectedLocation={selectedLocation} residentsByLocation={residentsByLocation} />
      )
    }
    if (path.includes(INCLUDE.EPISODES) && isGetCardData) {
      return (
        <Episodes selectedEpisode={selectedEpisode} charactersByEpisode={charactersByEpisode} />
      )
    }
    return null
  }

  return isGetCardData && renderCardByPath(pathname)
}

Card.propTypes = {
  isGetCardData: pt.bool,
  getCardData: pt.func,
  selectedCharacter: pt.shape(INTERFACES.SELECTED_CHARACTER),
  selectedLocation: pt.shape(INTERFACES.SELECTED_LOCATION),
  selectedEpisode: pt.shape(INTERFACES.SELECTED_EPISODE),
  arrayNumbersOfEpisodesByCharacter: pt.arrayOf(pt.number),
  arrayNumbersOfResidentsByLocation: pt.arrayOf(pt.number),
  arrayNumbersOfCharactersByEpisode: pt.arrayOf(pt.number),
  episodesByCharacter: pt.arrayOf(pt.shape()),
  residentsByLocation: pt.arrayOf(pt.shape()),
  charactersByEpisode: pt.arrayOf(pt.shape()),
}
Card.defaultProps = {
  isGetCardData: false,
  getCardData: {},
  selectedCharacter: {},
  selectedLocation: {},
  selectedEpisode: {},
  episodesByCharacter: [],
  residentsByLocation: [],
  charactersByEpisode: [],
  arrayNumbersOfEpisodesByCharacter: [],
  arrayNumbersOfResidentsByLocation: [],
  arrayNumbersOfCharactersByEpisode: [],
}

export default Card
