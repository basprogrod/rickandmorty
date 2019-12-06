import { connect } from 'react-redux'
import {
  getEpisodes,
  getLocations,
  getCharacters,
} from '@/store/selectors'

import {
  actionGetData,
  actionGetSearchData,
} from '@/store/actions'

import Main from './component'

const mapStateToProps = (state) => ({
  episodes: getEpisodes(state),
  locations: getLocations(state),
  characters: getCharacters(state),
  isGetData: state.uiReducer.isGetData,
})
const mapDispatchToProps = (dispatch) => ({
  getData: (value) => dispatch(actionGetData(value)),
  getSearchData: (value) => dispatch(actionGetSearchData(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
