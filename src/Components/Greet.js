import { render } from "@testing-library/react";
import React from "react";
// function Greet(){
//     return(
//     <h1>Hello World!</h1>
//     )
// }

// const Greet = (props) =>{
//     console.log(props);

//     return (<h1>Hello {props.name}</h1>
//     )
// }

// const Greet = (props)=>{
//     console.log(props)


// return ( <div><h1>Heloo {props.name.subname} </h1>
// {props.children}
// </div>
// )}
// export default Greet;

// const Greet =props=>{
//     const {name,names}=props
//     return( <div><h1>Hello {name} hi {names} </h1>

//     </div>
// )}
// const Greet = props =>{
//     const{name,names}=props
//         return(<div><h1>Hey {name} hi {names}</h1></div>)
    
// }

const Greet = ({name,names})=>{
    return(<div><h1>hiiii {name} hoooo {names}</h1></div>)
}

export default Greet;
