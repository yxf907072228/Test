import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory,hashHistory } from 'react-router'
import withExampleBasename from './withExampleBasename'
import rootRoute from './routes'

const rroute= {
  childRoutes: [ {
    path: '/',
    indexRoute: {
      onEnter: (nextState, replace) => {
        replace('/es6');
      }
    },
    component: require('./container/app'),
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
), document.getElementById('paper'))