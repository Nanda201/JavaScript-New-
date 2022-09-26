import React, { Component } from 'react'
class UserGreet extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedin: true
        }
    }

    render(){
        return this.state.isLoggedin && <div>welcome kishore</div>

        // return this.state.isLoggedin?(
        //     <div>Hello Kishore</div>):(
        //         <div>Hello ayesha</div>)
            
        
    //    let message;
    //     if(this.state.isLoggedin){
    //     message=<div>Welcome to react</div>
    //     }
    //     else{
    //         message=<div>Welcome to ReactJs</div>
    //     }
    //     return(<div>{message}</div>)


        
//     if(this.state.isLoggedin) {
//         return (<div>
//             <div>Hello nanda kishore</div>
//         </div>)
//     }
//     else
//     {
//     return (
//         <div>
//             <div>Hello pinnapuralla</div>
//         </div>
//     )
// }
    // {

    //     return(<div>
    //         <div>
    //             <h1> Hello kishore</h1>
    //         </div>
    //         <div>Hello nanda</div>
    //     </div>)
    // }
}
}
export default UserGreet