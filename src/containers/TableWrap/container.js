import { connect } from 'react-redux'
import {
  getEpisodes,
  getLocations,
  getCharacters,
} from '@/store/selectors'

import {
  actionGetData,
  actionGetSearchData,
  actionInputChange,
} from '@/store/actions'

import Main from './component'

const mapStateToProps = (state) => ({
  episodes: getEpisodes(state),
  locations: getLocations(state),
  characters: getCharacters(state),
  isGetData: state.uiReducer.isGetData,
  isErrorSearch: state.uiReducer.isErrorSearch,
})
const mapDispatchToProps = (dispatch) => ({
  getData: (value) => dispatch(actionGetData(value)),
  getSearchData: (value) => dispatch(actionGetSearchData(value)),
  inputChange: () => dispatch(actionInputChange()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
