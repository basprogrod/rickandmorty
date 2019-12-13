import { takeLatest } from 'redux-saga/effects'
import {
  ACTION_TYPES,
} from '@/constants'

import getCardData from './cardSaga'
import getSearchData from './searchSaga'

export default function* watch() {
  yield takeLatest(ACTION_TYPES.GET_CARD_DATA, getCardData)
  yield takeLatest(ACTION_TYPES.GET_SEARCH_DATA, getSearchData)
}
