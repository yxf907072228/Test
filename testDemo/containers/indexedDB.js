import React from 'react'
import * as dbUtil from '../components/indexedDBUtil'
export default class IndexedDB extends React.Component{

    constructor(props){
        super(props)
        this.points = []
        
    }

    componentDidMount(){
       console.log(dbUtil)
       console.log(dbUtil.getIndexedDB().webkitGetDatabaseNames())
       dbUtil.openDB("yexf",5,{
           onsuccess:(e)=>{
               let db = e.target.result
               console.log(db.objectStoreNames)
           },
           onupgradeneeded:(e)=>{
               let db = e.target.result
               if(!db.objectStoreNames.contains("users")){
                   db.createObjectStore("users", {keyPath: "id"})
               }
           }
       })
    }

    render(){
        return (
            <div>
                indexedDB
            </div>
        )
    }
}