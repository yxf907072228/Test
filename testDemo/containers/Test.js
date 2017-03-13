/*globals COURSES:true */
import React, { Component } from 'react'
import tmplRender from './jsx/Test.jsx'

class Test extends Component {
  render() {
    return tmplRender.call(this)
  }
}

module.exports = Test
