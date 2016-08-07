import h5Demos from './container/routes'

export default {
  childRoutes: [ {
    path: '/',
    indexRoute: {
        onEnter: function(o,replace){
          replace("/es6")
        }
    },
    component: require('./container/app'),
    childRoutes: [
      require('./container/routes')
    ]
  } ]
}