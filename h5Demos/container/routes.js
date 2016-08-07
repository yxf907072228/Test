module.exports = {
  path: 'es6',
  indexRoute: {
      onEnter: (nextState, replace) => {
        replace('/es6/demo3');
      }
  },
  childRoutes:[
    {
      path:'demo2'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./demo2'))
        })
      }
    }
  ,{
      path:'demo3'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./demo3'))
        })
      }
    }
  ]
}
