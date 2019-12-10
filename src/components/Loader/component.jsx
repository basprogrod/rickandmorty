import React from 'react'
import pt from 'prop-types'
import Loading from './styles'

const Loader = ({ isShow }) => (
  <Loading isShow={isShow}>Loading....</Loading>
)

Loader.propTypes = {
  isShow: pt.bool,
}
Loader.defaultProps = {
  isShow: true,
}

export default Loader
