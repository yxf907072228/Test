module.exports = {
  path: 'es6',
  indexRoute: {
      onEnter: (nextState, replace) => {
        replace('/es6/symbol');
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
    ,{
      path:'symbol'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./symbol'))
        })
      }
    }
    ,{
      path:'setmap'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./setmap'))
        })
      }
    }
    ,{
      path:'proxy'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./proxy'))
        })
      }
    }
    ,{
      path:'reflect'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./reflect'))
        })
      }
    }
  ]
}
