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

const Main = ({ getData, isGetData }) => {
  useEffect(() => {
    getData()
  }, [isGetData, getData])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header getData={getData} />
      <Switch>
        { isGetData && <Route path="/tabele" component={TableWrap} />}
        <Route path="/card:characters" component={Card} />
        <Route path="/card:locations" component={Card} />
        <Route path="/card:episodes" component={Card} />
        <Redirect from="/" to="/tabele/episodes" />
      </Switch>
    </Layout>
  )
}

Main.propTypes = {
  getData: pt.func,
  isGetData: pt.bool,
}
Main.defaultProps = {
  getData: {},
  isGetData: false,
}

export default withRouter(Main)
