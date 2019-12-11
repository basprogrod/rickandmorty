import { connect } from 'react-redux'
import {
  actionGetSearchData,
} from '@/store/actions'
import {
  getIsShowLoaderFlag,
} from '@/store/selectors'
import Main from './component'

const mapStateToProps = (state) => ({
  isShowLoader: getIsShowLoaderFlag(state),
})
const mapDispatchToProps = (dispatch) => ({
  getSearchData: (value) => dispatch(actionGetSearchData(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
