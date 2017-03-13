import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory,hashHistory } from 'react-router'

const rroute= {
  childRoutes: [ {
    path: '/',
    indexRoute: {
      onEnter: (nextState, replace) => {
        replace('/test');
      }
    },
    component: require('./containers/Test'),
    childRoutes: [
      require('./containers/routes')
    ]
  } ]
}
render((
  <Router
    history={hashHistory}
    routes={rroute}
  />
), document.getElementById('test'))