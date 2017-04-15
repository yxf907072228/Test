import React from 'react';

class ProxyDemo extends React.Component{

   constructor(props){
        super(props)
        class Student{

            hello(name){
                console.log('hello!!',name)
            }
            _hi(){

            }
        }

        this.stu = new Proxy(new Student(),{
            get:function(target, name,receiver){
                
                console.log('get',arguments)
                return target[name]
            },
            set:function(target, key, value, receiver){
                console.log('set',arguments)
                target[key] = value
            },
            has:function(target, key){
                if(key.indexOf('_')==0){
                    return false
                }
                return key in target
            },
         /*   apply:function(){
                console.log(arguments)
            },
            */

        })


        
        //this.test1()
        //this.test2()
        this.test3()
        
   }

    componentDidMount(){
       
    }

    render(){
        return <div>PROXY</div>
    }


    //get set
    test1(){
        this.stu.hello('Bruce')
        this.stu.name='bruce'
    }

    //has
    test2(){
        console.log('_hi' in this.stu)
         console.log('hello' in this.stu)
    }

    //construct
    test3(){
        let Per = new Proxy(class P{
            hello(){
                console.log("hello",this.name)
            }
            constructor(name){
                this.name=name
            }
        },{
            construct:function(target, args){
                console.log('construct',arguments)
                return new target(args)
            }
        })
        
       let person = new Per("bruce")
       person.hello()

       class Per2 extends Per{

       }

       let person2 = new Per2("YXF")
       person2.hello()
    }

    test4(){

    }

    test5(){

    }

    

    
}

module.exports = ProxyDemo;