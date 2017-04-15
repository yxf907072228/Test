import React from 'react'
import * as d3 from 'd3/build/d3.js'

export default class Demo1 extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
       this.showHelloByH()
       this.showHelloBySvg()
       this.datumDemo()
       this.dataDemo()
    }

    showHelloByH(){
        let title=d3.select(this.refs.d1)
        .append("h1")
        .text("hello d3")

        title.style("color","red")
    }

    showHelloBySvg(){
        let circle=d3.select(this.refs.d2)
        .append("svg")
        .attr("width",100)
        .attr("height",100)
        .append("circle")
        .attr("cx",50)
        .attr("cy",50)
        .attr("r",50)
        .attr("fill","red")
    }


    datumDemo(){
        let dv3 = d3.select(this.refs.dv3)
        dv3.datum(7)
        console.log(dv3)
    }
    
    dataDemo(){
        let spans = d3.select(this.refs.d4)
        .selectAll('span')
        .data([1,2,3,4,5,6,7])

        console.log(spans)
        console.log(spans.enter())
        console.log(spans.exit())
        

    }

    render(){
        return <div>
        <div ref='d1'></div>
        <div ref='d2'></div>
        <div ref='dv3'></div>
        <div ref="d4">
            <span/><span/><span/><span/><span/>
        </div>
        </div>
    }

}