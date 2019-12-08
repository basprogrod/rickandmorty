import {
  ACTION_TYPES,
} from '@/constants/'

const initialState = {
  isGetData: false,
  isErrorSearch: false,
  episode: {},
  location: {},
  character: {},
  selectedCharacter: {},
  episodesByCharacter: [],
  selectedLocation: {},
  residentsByLocation: [],
  selectedEpisode: {},
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
      }
    case ACTION_TYPES.ON_NOT_FOUND:
      return {
        ...state,
        isErrorSearch: true,
      }
    case ACTION_TYPES.INPUT_CHANGE:
      return {
        ...state,
        isErrorSearch: false,
      }
    default:
      return state
  }
}
