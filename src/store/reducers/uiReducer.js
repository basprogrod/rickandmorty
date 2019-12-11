import {
  ACTION_TYPES,
} from '@/constants/'

const initialState = {
  isGetData: false,
  isGetCardData: false,
  isErrorSearch: false,
  isShowLoader: true,
  episode: {},
  location: {},
  character: {},
  selectedEpisode: {},
  selectedCharacter: {},
  selectedLocation: {},
  episodesByCharacter: [],
  residentsByLocation: [],
  charactersByEpisode: [],
}

export default function uiReducer(state = initialState, action) {
  const { payload } = action
  switch (action.type) {
    case ACTION_TYPES.PUT_DATA:

      return {
        ...state,
        ...payload,
        isGetData: true,
        isErrorSearch: false,
        isShowLoader: false,
      }

    case ACTION_TYPES.PUT_CARD_DATA:
      return {
        ...state,
        episodesByCharacter: payload.episodesByCharacter,
        selectedCharacter: {
          ...payload.selectedCharacter,
        },
        residentsByLocation: payload.residentsByLocation,
        selectedLocation: {
          ...payload.selectedLocation,
        },
        charactersByEpisode: payload.charactersByEpisode,
        selectedEpisode: {
          ...payload.selectedEpisode,
        },
        isErrorSearch: false,
        isShowLoader: false,
        isGetCardData: true,
      }
    case ACTION_TYPES.ON_NOT_FOUND:
      return {
        ...state,
        isErrorSearch: true,
        isShowLoader: false,
      }
    case ACTION_TYPES.INPUT_CHANGE:
      return {
        ...state,
        isErrorSearch: false,
        isShowLoader: false,
      }
    case ACTION_TYPES.SHOW_LOADER:
      return {
        ...state,
        isShowLoader: true,
        isGetCardData: false,
      }
    default:
      return state
  }
}
