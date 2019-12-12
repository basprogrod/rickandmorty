import { connect } from 'react-redux'

import Card from './component'
import {
  getSelectedLocation,
  getSelectedCharacter,
  getEpisodesByCharacter,
  getResidentsByLocation,
  getSelectedEpisode,
  getCharactersByEpisode,
} from '@/store/selectors'
import {
  actionGetCardData,
} from '@/store/actions'

const mapStateToProps = (state) => ({
  selectedCharacter: getSelectedCharacter(state),
  episodesByCharacter: getEpisodesByCharacter(state),
  selectedLocation: getSelectedLocation(state),
  residentsByLocation: getResidentsByLocation(state),
  selectedEpisode: getSelectedEpisode(state),
  charactersByEpisode: getCharactersByEpisode(state),
})
const mapDispatchToProps = (dispatch) => ({
  getCardData: (value) => dispatch(actionGetCardData(value)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Card)
