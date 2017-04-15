import React from 'react';

class demo4 extends React.Component{

   constructor(props){
        super(props)
   }
   
   [Symbol.hasInstance](p){
        console.log(p)
        return true
   }

    componentDidMount(){
        //this.test1()
        //this.test2()
        //this.test3()
        //this.test4()
        // this.test5()
        this.test6()
    }

    render(){
        return <div>hello symbol</div>
    }

    test1(){
        let a = Symbol()
        let b = Symbol('t1')
        let c = Symbol('t1') 
        let d = Symbol.for('t')
        let e = Symbol.for('t')

        console.log(a,b,c,d,e)
        console.log(d == e)
        console.log(Symbol.keyFor(e))
    }

    test2(){
        let a={
            [2]:1
        }
        console.log(a)
    }

    test3(){
        class stu{
            [Symbol.hasInstance](x){
                return typeof(x)=='number'
            }
        }

        console.log('1' instanceof new stu )
    }

    test4(){
        let a =[1,2,3,4,5]
        let b =[4,5,6,7]
        b[Symbol.isConcatSpreadable] = false
        console.log(a.concat(b))
    }


    //有疑问
    test5(){
        class Array1 extends Array{
            static get [Symbol.species] (){
                return String
            }
        }

        console.log(new Array1(1,2,3,4))
    }

    //
    test6(){
        class S1{
            [Symbol.match](string){
                let x=0
                string.split("").map((n)=>{
                    x+=Math.floor(n)
                })
                return x==6
            }
        }

        console.log('133'.match(new S1))
        console.log('123'.match(new S1))
        
    }

    test7(){
        
    }



    
}

module.exports = demo4;