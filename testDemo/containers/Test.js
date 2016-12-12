import React from 'react'
import tplRender from './jsx/Test.jsx'
import $ from 'jquery'
import "app/components/zipjs/zip"
import "app/components/zipjs/zip-fs"
import "app/components/zipjs/mime-types"
import {ZipArchive} from  "../components/zipjs/zipArchive"



export default class Test extends React.Component{

    constructor( props ){
        super(props)
    }

    render(){
        return tplRender.call(this)
    }

    download(){
        // for(let i=0;i<3;i++){
        //     this.testDownLoad(i)
        // }

        var z = new ZipArchive;
        z.addFile("a/a.txt", "aaaaaaacontent");
        z.addFile("aaaa.txt", "aaaaaaaccccc");
        z.export("nono");
    
    }

    testDownLoad(index){
        $.ajax({
            method:"GET"
           ,url:"https://www.2345.com/" 
           ,data:{
               index
           } 
           ,success:function(data){
              // console.log(data)
               
           }
           ,error:function(){

           }
        })
    }
    
}