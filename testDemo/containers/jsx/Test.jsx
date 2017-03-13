import React from 'react'

export default function render(){
  return (
    <div>
      <ul>
        <li>
          <a href="#/test/d3">D3Demo</a>
        </li>
        <li>
          <a href="#/test/zrender">zrenderDemo</a>
        </li>
        <li>
          <a href="#/test/jsPlumbDemo">jsPlumbDemo</a>
        </li>
        <li>
          <a href="#/test/mxgraphDemo">mxgraphDemo</a>
        </li>
      </ul>
    <div>{this.props.children}</div>
    </div>
  )
}