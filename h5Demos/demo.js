import React from 'react'
import { render } from 'react-dom'
import 'babel-polyfill';
import { Router, browserHistory,hashHistory } from 'react-router'

Promise.all([])
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