import { createSelector } from 'reselect'
import get from 'lodash/get'
import getNumberFromUrl from '@/helpers'

export const getState = (state) => (state)

export const getUiState = createSelector(
  getState,
  (state) => get(state, 'uiReducer', {}),
)

export const getIsGetCardDataFlag = createSelector(
  getUiState,
  (state) => get(state, 'isGetCardData', false),
)
export const getIsShowLoaderFlag = createSelector(
  getUiState,
  (state) => get(state, 'isShowLoader', false),
)
export const getIsErrorSearchFlag = createSelector(
  getUiState,
  (state) => get(state, 'isErrorSearch', false),
)
export const getIsGetDataFlag = createSelector(
  getUiState,
  (state) => get(state, 'isGetData', false),
)
export const getSelectedCharacter = createSelector(
  getUiState,
  (state) => {
    const data = get(state, 'selectedCharacter', {})
    delete data.created
    return data
  },
)

export const getSelectedLocation = createSelector(
  getUiState,
  (state) => {
    const data = get(state, 'selectedLocation', {})
    delete data.created
    return data
  },
)

export const getSelectedEpisode = createSelector(
  getUiState,
  (state) => {
    const data = get(state, 'selectedEpisode', {})
    return {
      date: data.air_date,
      name: data.name,
      episode: data.episode,
      characters: data.characters,
    }
  },
)

export const getEpisodesByCharacter = createSelector(
  getUiState,
  (state) => {
    const data = get(state, 'episodesByCharacter', [])

    if (!Array.isArray(data)) {
      return [{ ...data }]
    }
    return data
  },
)

export const getResidentsByLocation = createSelector(
  getUiState,
  (state) => {
    const data = get(state, 'residentsByLocation', [])
    if (!Array.isArray(data)) {
      return [{ ...data }]
    }
    return data
  },
)

export const getCharactersByEpisode = createSelector(
  getUiState,
  (state) => {
    const data = get(state, 'charactersByEpisode', [])
    if (!Array.isArray(data)) {
      return [{ ...data }]
    }
    return data
  },
)

export const getEpisodes = createSelector(
  getUiState,
  (state) => {
    const episodes = get(state, 'episode', {})
    const results = episodes.results && episodes.results.map((item) => ({
      id: item.id,
      key: item.id,
      name: item.name,
      airDate: item.air_date,
      episode: item.episode,
      characters: item.characters,
      url: item.url,
    }))
    return {
      info: {
        ...episodes.info,
      },
      results,
    }
  },
)
export const getLocations = createSelector(
  getUiState,
  (state) => {
    const locations = get(state, 'location', {})
    const results = locations.results && locations.results.map((item) => ({
      id: item.id,
      key: item.id,
      name: item.name,
      type: item.type,
      createDate: item.created,
      dimension: item.dimension,
      residents: item.residents,
      url: item.url,
    }))
    return {
      info: {
        ...locations.info,
      },
      results,
    }
  },
)
export const getCharacters = createSelector(
  getUiState,
  (state) => {
    const characters = get(state, 'character', {})
    const results = characters.results && characters.results.map((item) => ({
      id: item.id,
      key: item.id,
      name: item.name,
      type: item.type || '-//-',
      createDate: item.created,
      gender: item.gender,
      species: item.species,
      status: item.status,
      origin: item.origin,
      episode: item.episode,
      image: item.image,
      url: item.url,
    }))
    return {
      info: {
        ...characters.info,
      },
      results,
    }
  },
)


export const getArrayNumbersOfEpisodesByCharacter = createSelector(
  getSelectedCharacter,
  (state) => get(state, 'episode', []).map((item) => getNumberFromUrl(item)),
)

export const getArrayNumbersOfResidentsByLocation = createSelector(
  getSelectedLocation,
  (state) => get(state, 'residents', []).map((item) => getNumberFromUrl(item)),
)

export const getArrayNumbersOfCharactersByEpisode = createSelector(
  getSelectedEpisode,
  (state) => get(state, 'characters', []).map((item) => getNumberFromUrl(item)),
)
