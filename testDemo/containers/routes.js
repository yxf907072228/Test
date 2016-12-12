module.exports = {
  path: 'test',
  indexRoute: {
      onEnter: (nextState, replace) => {
        replace('/es6/demo3');
      }
  },
  childRoutes:[
    {
      path:'download'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./download'))
        })
      }
    }
 /* ,{
      path:'demo3'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./demo3'))
        })
      }
    }*/
  ]
}
