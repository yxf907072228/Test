import React from 'react'
import * as d3 from 'd3/build/d3.js'
import logoImage from '../../images/logo.jpg'
export default class Demo1 extends React.Component{

    constructor(props){
        super(props)
        this.points = []
        
    }

    componentDidMount(){
        console.log(d3)
        this.svg = d3.select(this.refs.paper).append("svg")
								.attr("width",5000)
								.attr("height",5000);
        this.initPoints()
        let t=new Date()
        this.addNode()
        console.log(new Date().getTime()-t.getTime())
    }

    initPoints(){
        for(let i=0;i<100;i++){
            for(let j=0;j<50;j++){
                this.points.push({
                    cx:i*100
                   ,cy:j*100
                   ,r:50
                })
            }
        }
    }

    addNode(){
        var drag = d3.drag()
						.on("drag", dragmove); 
						
		function dragmove(d) {	
			d3.select(this)
			  .attr("x", d.x = d3.event.x )
			  .attr("y", d.y = d3.event.y );
		}
        var circles = this.points
		
		
		
		this.svg.selectAll("circle")
			.data(circles)
			.enter()
			.append("image")  
            .attr("x",function(d){ return d.cx; })
		    .attr("y",function(d){ return d.cy; })
            .attr("width",100)  
            .attr("height",100)
            .call(drag)
            .attr("xlink:href",function(d){  
                return logoImage;  
            });

    }

    render(){
        return (
            <div style={{width:"800px",height:"500px",overflow:"auto"}}>
                <div ref="paper">
                d3
                </div>
            </div>
        )
    }
}