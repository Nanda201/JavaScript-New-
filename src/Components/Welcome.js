import React ,{Component} from "react";
class Welcome extends Component {
    render(){
        const{course,name}=this.props
        return (
        <div><h1>Hello {this.props.course} Nanda</h1>
        <h1> {this.props.name} </h1></div>
    )} 
}
// export default Welcome; 

// import React,{Component} from "react";
// class Welcome extends Component {
//     render(props){
//         return <h1>Hey Kishore {this.props.course}</h1>
//     }
// }
export default Welcome;