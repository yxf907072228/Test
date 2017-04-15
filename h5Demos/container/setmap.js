import React from 'react';
class Setmap extends React.Component{

    constructor(props){
        super(props);
        //this.test1()
        this.test2()
    }

    test1(){
        let s= new Set()
        let b={c:1}
        s.add(1)
        s.add(2)
        s.add(2)
        s.add({a:1})
        s.add({a:1})
        s.add(b)
        s.add(b)
        
        console.log(s)
        console.log(s.has({a:1}), s.has(b))
        s.delete(b)
        console.log(s)
    }

    test2(){
        let s = new WeakSet()
        let b={c:1}
        s.add({a:1})
        s.add(b)
        s.add(b)

        console.log(s)
        b=null
        console.log(s)
    }

    render(){
        return <div>
            Set Map
        </div>
    }

}

module.exports = Setmap