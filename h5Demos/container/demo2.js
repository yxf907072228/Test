import React from 'react'

class Demo1 extends React.Component{

    constructor(props){
        super(props)
        //this.test1()
        //this.test2()
        //this.test3()
        this.test4()
    }

    render(){
        return (
            <div>DEMO1</div>
        )
    }

    //let只在代码块中生效，超过了代码块就会回收
    test1(){
        {   
            var b=2
            let a=1
            
        }
        console.log(a,b)
    }

    //在for循环中使用完了就会回收
    test2(){
       

        var s1={}
        for(var j=0;j<10;j++){
            s1[j]=function(){
                console.log(j)
            }
        }
        
        var s2={}
        for(let k=0;k<10;k++){
            s2[k]=function(){
                console.log(k)
            }
        }

        s1[4]()
        s2[4]()
        console.log(j,k)
        
    }

    //不存在变量提升
    test3(){
        console.log(a)
        console.log(b)
        console.log(c)

        var a=1
        let b=2
        const c=3
    }

    //暂时性死区
    test4(){
        var a=1
        {
            console.log(a)
            let a=2
        }
    }

    //不允许重复申明
    test5(){
        let a=1
     //   let a=2
    }

    //const在申请常量的时候使用，不能重新赋值
    testn(){/*
        let a=1
        const b=2
        a=2
        console.log(a)
        b=3
        console.log(b)
    */}

}

module.exports=Demo1