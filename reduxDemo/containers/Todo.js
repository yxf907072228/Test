import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import tplRender from './jsx/todo.jsx'
export default class Todo extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return tplRender.call(this)
    }

    

}

