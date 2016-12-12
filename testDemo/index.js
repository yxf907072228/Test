import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory,hashHistory } from 'react-router'
import withExampleBasename from './withExampleBasename'
import rootRoute from './routes'
import Test from './containers/Test'

const rroute= {
  childRoutes: [ {
    path: '/',
    indexRoute: {
      onEnter: (nextState, replace) => {
        replace('/test');
      }
    },
    component: Test,
    childRoutes: [
      require('./container/routes')
    ]
  } ]
}

render((
  <Router
    history={hashHistory}
    routes={rroute}
  />
), document.getElementById('test'))