import React ,{useState}from 'react'
function Count(){
    // const intialcount=0
    const[count,setCount]=useState(0)
    // const[dec,setCount1]=useState()
    const IncrementFive =()=>{
        for(let i=0;i<=5;i++){
            setCount(preCount =>preCount +1)
        }
    }
    return(
        <div>
            count:{count}
            <button onClick={()=>setCount(0)}>reset</button>
            <button onClick={()=>setCount(preCount=>preCount + 1)} >increment</button>
            <button onClick={()=>setCount(preCount=>preCount-1)}>decrement</button>
            <button onClick={IncrementFive}>Increment5</button>
        </div>
    )
}
export default Count;