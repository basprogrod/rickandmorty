import React, { useEffect } from 'react'
import {
  Route, Switch, withRouter, Redirect,
} from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import pt from 'prop-types'
import TableWrap from '@/containers/TableWrap'
import Header from '@/components/Header'
import Card from '@/containers/Card'
import { PATH, INCLUDE } from '@/constants'

const Main = ({ getData, getSearchData, isGetData }) => {
  useEffect(() => {
    if (!isGetData) {
      getData()
    }
  }, [isGetData, getData])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header getSearchData={getSearchData} />
      <Switch>
        {
          isGetData
            && <Route path={`${PATH.TABLE}`} component={TableWrap} />
        }
        <Route path={PATH.CARD} component={Card} />
        <Redirect exact from="/" to={`${PATH.TABLE}/${INCLUDE.EPISODES}/1`} />
      </Switch>
    </Layout>
  )
}

Main.propTypes = {
  getData: pt.func,
  isGetData: pt.bool,
  getSearchData: pt.func,
}
Main.defaultProps = {
  getData: () => {},
  isGetData: false,
  getSearchData: () => {},
}

export default withRouter(Main)
