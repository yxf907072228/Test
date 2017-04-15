import React from 'react'
import zrender from 'zrender'
import imageShape from 'zrender/lib/graphic/Image'
import logoImage from '../../images/logo.jpg'
export default class ZRenderDemo extends React.Component{

    constructor(props){
        super(props)
        this.points=[]
    }

    componentDidMount(){
        this.initPoints()
        this.initPaper();
        let t=new Date()
        this.points.map((point)=>{
            this.addNode(point);
        })
        console.log(new Date().getTime()-t.getTime())
    }

    initPoints(){
        for(let i=0;i<100;i++){
            for(let j=0;j<50;j++){
                this.points.push({
                    x:i*100
                   ,y:j*100
                })
            }
        }
    }

    initPaper(){
        this.zr = zrender.init(this.refs.paper)
        console.log(this.zr,imageShape,logoImage)
    }

    addNode(point){
       // console.log(point)
        let image = new imageShape({
            
            style:{
                width:100,
                height:100,
                x:point['x'],
                y:point['y'],
                image:logoImage,
            },
            draggable:true
        })
        this.zr.add(image)
    }

    render(){
        return (
            <div style={{width:"800px",height:"500px",overflow:"auto"}}>
                <div ref='paper' style={{"width":"5000px","height":"5000px"}}></div>
            </div>
        )
    }

} 