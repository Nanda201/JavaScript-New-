import React ,{Component} from 'react'
// class Counter extends Component{
//     constructor(){
//         super()
//             this.state={
//                 count:0
//             }
        
//     }
//     step(){
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     down(){
//         this.setState({
//             count:this.state.count-1
//         })
//     }
//     render(){
//         return (<div>
//             <div>
//             Count-{this.state.count}</div>
//            <button onClick={()=>this.step()}>Increment</button>
//            <button onClick={()=>this.down()}>Decrement</button>
//         </div>)


//     }
// }
class Counter extends Component{
    constructor(){
        super()
            this.state={
                count:0
            }
    }
    count(){
    //     this.setState({count:this.state.count+1
    //     },
    //     ()=>
    //     {
    //       console.log('call back value',this.state.count)
    // })
     this.setState((prevState)=>({count:prevState.count+1}))
    console.log(this.state.count);

    }

    down(){
        this.setState({
            count:this.state.count-1
        })
        console.log(this.state.count);
    }
    increFive(){
        this.count()
        this.count()
        this.count()
        this.count()
        this.count()    
    }
    render(){
        return(<div>
        <div>Counter:{this.state.count}</div>
        <div><button onClick={()=>this.increFive()}>Increment</button></div>
        <button onClick={()=>this.down()}>Decrement</button></div>)
    }
}
export default Counter;