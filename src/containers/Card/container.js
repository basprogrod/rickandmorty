import { connect } from 'react-redux'

import Card from './component'
import {
  getSelectedLocation,
  getSelectedCharacter,
  getEpisodesByCharacter,
  getResidentsByLocation,
  getSelectedEpisode,
  getCharactersByEpisode,
  getArrayNumbersOfEpisodesByCharacter,
  getArrayNumbersOfResidentsByLocation,
  getArrayNumbersOfCharactersByEpisode,
  getIsGetCardDataFlag,
} from '@/store/selectors'
import {
  actionGetCardData,
} from '@/store/actions'

const mapStateToProps = (state) => ({
  arrayNumbersOfResidentsByLocation: getArrayNumbersOfResidentsByLocation(state),
  arrayNumbersOfCharactersByEpisode: getArrayNumbersOfCharactersByEpisode(state),
  arrayNumbersOfEpisodesByCharacter: getArrayNumbersOfEpisodesByCharacter(state),
  selectedCharacter: getSelectedCharacter(state),
  episodesByCharacter: getEpisodesByCharacter(state),
  selectedLocation: getSelectedLocation(state),
  residentsByLocation: getResidentsByLocation(state),
  selectedEpisode: getSelectedEpisode(state),
  charactersByEpisode: getCharactersByEpisode(state),
  isGetCardData: getIsGetCardDataFlag(state),
})
const mapDispatchToProps = (dispatch) => ({
  getCardData: (value) => dispatch(actionGetCardData(value)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Card)
