import {
  ACTION_TYPES,
} from '@/constants/'

export const actionGetData = (value) => ({
  type: ACTION_TYPES.GET_DATA,
  payload: value,
})
export const actionGetSearchData = (value) => ({
  type: ACTION_TYPES.GET_SEARCH_DATA,
  payload: value,
})
export const actionGetCardData = (value) => ({
  type: ACTION_TYPES.GET_CARD_DATA,
  payload: value,
})
export const actionPutDataToStore = (value) => ({
  type: ACTION_TYPES.PUT_DATA,
  payload: value,
})

export const actionPutCardDataToStore = (value) => ({
  type: ACTION_TYPES.PUT_CARD_DATA,
  payload: value,
})
