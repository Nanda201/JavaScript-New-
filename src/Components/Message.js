import React, { Component, component } from 'react';
class Message extends Component 
    //     constructor(){
    //         super()
    //         this.state={
    //             message:'welcome visitor'
    //         }
    //     }
    //     changeMessage(){
    //         this.setState({
    //             message:'thank you'
    //         })
    //     }
    //     render(){
    //         return(<div>
    //             <h1>{this.state.message}</h1>
    //             <button onClick={()=>this.changeMessage()}>subsrcibe</button>
    //         </div>)
    //     }
    // }
    //export default Message;
    {
        constructor(){
            super()
            this.state={
                message:'hello'
            }
        }
        changeMessage(){
            this.setState({
                message:'welcome to react'
            })
        }
        render(){
            return(<div>
                {this.state.message} <br/>
                <button onClick={()=>this.changeMessage()}> sub</button>
            </div>)
        }
    }

     export default Message;