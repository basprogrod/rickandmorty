import { put, call } from 'redux-saga/effects'
import { getCharacter, getLocation, getEpisode } from 'rickmortyapi'
import {
  INCLUDE,
} from '@/constants'
import getNumberFromUrl from '@/helpers'
import {
  actionPutCardDataToStore,
  actionShowLoader,
} from '@/store/actions'

export default function* getCardData(action) {
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
