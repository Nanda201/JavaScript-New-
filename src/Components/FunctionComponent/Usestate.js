import React,{useEffect, useState} from 'react'
function Usestate(){
    const [name,setname]=useState('kishore')
    const [age,setage]=useState(25)

    useEffect(()=>{
        setname("nanda")
        setage(27)
    },[])

    useEffect(()=>{
        setname("kis")
        setage(29)
    })
    
    return(<div>
        <div>
       {name},{age}
        </div>
    </div>)
}
export default Usestate;