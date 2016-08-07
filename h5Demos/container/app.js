/*globals COURSES:true */
import React, { Component } from 'react'
import tmplRender from './jsx/app.jsx'

class App extends Component {
  render() {
    return tmplRender.call(this)
  }
}

module.exports = App
