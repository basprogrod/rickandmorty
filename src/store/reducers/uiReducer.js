import {
  ACTION_TYPES,
} from '@/constants/'

const initialState = {
  isGetData: false,
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
        // isGetData: true,
      }
    default:
      return state
  }
}
