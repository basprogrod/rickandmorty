import { takeLatest, put, call } from 'redux-saga/effects'
import { getCharacter, getLocation, getEpisode } from 'rickmortyapi'
import {
  ACTION_TYPES,
  INCLUDE,
} from '@/constants'
import getNumberFromUrl from '@/helpers'
import {
  actionPutDataToStore,
  actionPutCardDataToStore,
  actionErrorSearch,
  actionShowLoader,
} from '@/store/actions'

function* getCardData(action) {
  const { payload } = action
  try {
    yield put(actionShowLoader())
    if (payload.path === INCLUDE.CHARACTERS) {
      const selectedCharacter = yield call(getCharacter, payload.id)
      const dataArray = selectedCharacter.episode.map((item) => getNumberFromUrl(item))
      const episodesByCharacter = yield call(getEpisode, dataArray)
      yield put(actionPutCardDataToStore({ selectedCharacter, episodesByCharacter }))
    }
    if (payload.path === INCLUDE.LOCATIONS) {
      const selectedLocation = yield call(getLocation, payload.id)
      const dataArray = selectedLocation.residents.map((item) => getNumberFromUrl(item))
      const residentsByLocation = yield call(getCharacter, dataArray)
      yield put(actionPutCardDataToStore({ selectedLocation, residentsByLocation }))
    }
    if (payload.path === INCLUDE.EPISODES) {
      const selectedEpisode = yield call(getEpisode, payload.id)
      const dataArray = selectedEpisode.characters.map((item) => getNumberFromUrl(item))
      const charactersByEpisode = yield call(getCharacter, dataArray)
      yield put(actionPutCardDataToStore({ selectedEpisode, charactersByEpisode }))
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('TCL: function*getCardData -> e', e)
  }
}

function* getSearchData(action) {
  const { payload } = action
  try {
    if (payload.pathname.includes(INCLUDE.CHARACTERS)) {
      const character = yield call(getCharacter, payload.query)
      if (!character.status) {
        yield put(actionPutDataToStore({ character }))
      } else {
        yield put(actionErrorSearch())
      }
    }
    if (payload.pathname.includes(INCLUDE.LOCATIONS)) {
      const location = yield call(getLocation, payload.query)
      if (!location.status) {
        yield put(actionPutDataToStore({ location }))
      } else {
        yield put(actionErrorSearch())
      }
    }
    if (payload.pathname.includes(INCLUDE.EPISODES)) {
      const episode = yield call(getEpisode, payload.query)
      if (!episode.status) {
        yield put(actionPutDataToStore({ episode }))
      } else {
        yield put(actionErrorSearch())
      }
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('TCL: function*getCardData -> e', e)
  }
}


export default function* watch() {
  yield takeLatest(ACTION_TYPES.GET_CARD_DATA, getCardData)
  yield takeLatest(ACTION_TYPES.GET_SEARCH_DATA, getSearchData)
}
