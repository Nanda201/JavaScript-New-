import React from 'react'
import { useState } from 'react';
function Rev(props){
    const [name,setname]=useState("");
    const inputHandle=(e)=>{
        console.log(e);
        setname(e.target.value);
    }
    return (
    <div>
        <label>name </label>
        <input id="user" type="text" onInput={inputHandle }></input>
        <button onClick={()=>{props.nameHandler(name)}}> submit</button>
    </div>)
}
export default Rev;
//{(e)=>{props.nameHandler (e.target.value)}}