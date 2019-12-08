import { takeLatest, put, call } from 'redux-saga/effects'
import { getCharacter, getLocation, getEpisode } from 'rickmortyapi'
import {
  ACTION_TYPES,
  INCLUDE,
} from '@/constants'

import {
  actionPutDataToStore,
  actionPutCardDataToStore,
  actionErrorSearch,
} from '@/store/actions'

function* getData(action) {
  const { payload } = action
  try {
    let episode
    let location
    let character

    if (action.payload) {
      if (payload.pathname.includes(INCLUDE.EPISODES)) {
        episode = yield call(getEpisode, { page: payload.page })
        yield put(actionPutDataToStore({ episode }))
      }
      if (payload.pathname.includes(INCLUDE.LOCATIONS)) {
        location = yield call(getLocation, { page: payload.page })
        yield put(actionPutDataToStore({ location }))
      }
      if (payload.pathname.includes(INCLUDE.CHARACTERS)) {
        character = yield call(getCharacter, { page: payload.page })
        yield put(actionPutDataToStore({ character }))
      }
    } else {
      episode = yield call(getEpisode, { page: 1 })
      location = yield call(getLocation, { page: 1 })
      character = yield call(getCharacter, { page: 1 })
      yield put(actionPutDataToStore({
        episode,
        location,
        character,
      }))
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('TCL: function*getData -> episode', error)
  }
}

function* getCardData(action) {
  const { payload } = action
  try {
    if (payload.path === INCLUDE.CHARACTERS) {
      const selectedCharacter = yield call(getCharacter, payload.id)
      const episodesByCharacter = yield call(getEpisode, payload.data)
      yield put(actionPutCardDataToStore({ selectedCharacter, episodesByCharacter }))
    }
    if (payload.path === INCLUDE.LOCATIONS) {
      const selectedLocation = yield call(getLocation, payload.id)
      const residentsByLocation = yield call(getCharacter, payload.data)
      yield put(actionPutCardDataToStore({ selectedLocation, residentsByLocation }))
    }
    if (payload.path === INCLUDE.EPISODES) {
      const selectedEpisode = yield call(getEpisode, payload.id)
      const charactersByEpisode = yield call(getCharacter, payload.data)
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
  yield takeLatest(ACTION_TYPES.GET_DATA, getData)
  yield takeLatest(ACTION_TYPES.GET_CARD_DATA, getCardData)
  yield takeLatest(ACTION_TYPES.GET_SEARCH_DATA, getSearchData)
}
