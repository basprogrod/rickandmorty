import { put, call } from 'redux-saga/effects'
import { getCharacter, getLocation, getEpisode } from 'rickmortyapi'
import {
  INCLUDE,
} from '@/constants'
import {
  actionPutDataToStore,
  actionErrorSearch,
} from '@/store/actions'

export default function* getSearchData(action) {
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
