import React, { useState } from 'react'
import Rev from './Rev';

function Parent(){
    const [username,setusername]=useState("");
    const nameHandler=(name)=>{
        setusername(name)
    }
    return(
        <div>
            <h1>Data from child to parent </h1>
            <Rev nameHandler={nameHandler}/>
            {/* <Childr nameHandler={nameHandler}></Childr> */}
            <p>output: {username}</p>
        </div>
    )
}
export default Parent;