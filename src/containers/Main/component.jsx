import React from 'react'
import {
  Route, Switch, withRouter, Redirect,
} from 'react-router-dom'
import { Layout } from 'antd'
import pt from 'prop-types'
import TableWrap from '@/containers/TableWrap'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import Card from '@/containers/Card'
import { PATH, INCLUDE } from '@/constants'

const Main = ({
  getSearchData,
  isShowLoader,
}) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header getSearchData={getSearchData} />
    {isShowLoader && <Loader isShow={isShowLoader} />}
    <Switch>
      <Route path={`${PATH.TABLE}`} component={TableWrap} />
      <Route path={PATH.CARD} component={Card} />
      <Redirect exact from="/" to={`${PATH.TABLE}/${INCLUDE.EPISODES}/1`} />
    </Switch>
  </Layout>
)

Main.propTypes = {
  isShowLoader: pt.bool,
  getSearchData: pt.func,
}
Main.defaultProps = {
  getSearchData: () => {},
  isShowLoader: true,
}

export default React.memo(withRouter(Main))
