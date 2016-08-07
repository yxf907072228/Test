import React from 'react'

class Demo3 extends React.Component{

    constructor(props){
        super(props)
        //this.test1()
        //this.test2()
        //this.test3()
        //this.test4()
        this.test(5)
    }
    
    render(){
        return(
            <div>demo3</div>
        )
    }

    //数组的解构赋值
    test1(){
        let [a,[b,c,[d]]]=[1,[2,3,[4]]]
        let [z,...f]=[1,2,3,4,5,6,7]
        console.log(a,b,c,d)
        console.log(z,f)
    }

    //对象的解构赋值
    test2(){
        var {a,b,c,h:{e,f,g}}={a:1,b:2,c:3,h:{
            e:4,f:5,g:6
        }}
        console.log(a,b,c,e,f,g)
    }

    //字符串结构解析
    test3(){
        var {a,b,c,d,e}="1234567890";
        console.log(a,b,c,d,e)
    }

    //数值和布尔值的解构赋值
    test4(){
        let {toString:a}=123;
        console.log(a)
    }

    //函数参数的解构赋值
    test5(){
        function fun1(x=1,y=2){

        }

        fun1()
        fun1(2,3)
    }

}

module.exports=Demo3