module.exports = {
  path: 'test',
  indexRoute: {
      onEnter: (nextState, replace) => {
        replace('/test/indexedDB');
      }
  },
  childRoutes:[
    {
      path:'download'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./download')['default'])
        })
      }
    }
    ,{
      path:'d3'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./d3Demo')['default'])
        })
      }
    }
    ,{
      path:'d3Demo1'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./d3Demos/demo1')['default'])
        })
      }
    }
    ,{
      path:'zrender'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./zrenderDemo')['default'])
        })
      }
    }
    ,{
      path:'jsPlumbDemo'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./jsPlumbDemo')['default'])
        })
      }
    }
    ,{
      path:'mxgraphDemo'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./mxgraphDemo')['default'])
        })
      }
    }
    ,{
      path:'jsonXml'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./jsonXml')['default'])
        })
      }
    }
    ,{
      path:'indexedDB'
     ,getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./indexedDB')['default'])
        })
      }
    }


  ]
}
