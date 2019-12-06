import { connect } from 'react-redux'
import { actionGetSearchData, actionGetData } from '@/store/actions'
import Main from './component'

const mapStateToProps = (state) => ({
  isGetData: state.uiReducer.isGetData,
})
const mapDispatchToProps = (dispatch) => ({
  getSearchData: (value) => dispatch(actionGetSearchData(value)),
  getData: (value) => dispatch(actionGetData(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
