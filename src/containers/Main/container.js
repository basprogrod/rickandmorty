import { connect } from 'react-redux'
import {
  actionGetSearchData,
  actionGetData,
} from '@/store/actions'
import {
  getIsShowLoaderFlag,
  getIsGetDataFlag,
} from '@/store/selectors'
import Main from './component'

const mapStateToProps = (state) => ({
  isGetData: getIsGetDataFlag(state),
  isShowLoader: getIsShowLoaderFlag(state),
})
const mapDispatchToProps = (dispatch) => ({
  getSearchData: (value) => dispatch(actionGetSearchData(value)),
  getData: (value) => dispatch(actionGetData(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
