import { connect } from 'react-redux'
import { actionGetData } from '@/store/actions'
import Main from './component'

const mapStateToProps = (state) => ({
  isGetData: state.uiReducer.isGetData,
})
const mapDispatchToProps = (dispatch) => ({
  getData: (value) => dispatch(actionGetData(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
