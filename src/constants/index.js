export const API = process.env.REACT_APP_RICK_AND_MORTY_API
export const LOGO = process.env.REACT_APP_RICK_AND_MORTY_LOGO
export const INCLUDE = {
  EPISODES: 'episodes',
  LOCATIONS: 'locations',
  CHARACTERS: 'characters',
}
export const ACTION_TYPES = {
  GET_DATA: 'GET_DATA',
  PUT_DATA: 'PUT_DATA',
  GET_CARD_DATA: 'GET_CARD_DATA',
  PUT_CARD_DATA: 'PUT_CARD_DATA',
  GET_CHARACTER: 'GET_CHARACTER',
  PUT_EPISODES_BY_CHARACTER: 'PUT_EPISODES_BY_CHARACTER',
  GET_SEARCH_DATA: 'GET_SEARCH_DATA',
  ON_NOT_FOUND: 'ON_NOT_FOUND',
  INPUT_CHANGE: 'INPUT_CHANGE',
  SHOW_LOADER: 'SHOW_LOADER',
}
export const FIRST_PAGE = 1
export const PAGE_SIZE = 20
export const TEXT = {
  NOT_FOUND: 'Not found!',
}

export const PATH = {
  CARD: '/card',
  TABLE: '/table',
}
