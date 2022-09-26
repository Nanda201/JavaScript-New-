import React, { useState } from 'react'

function Covid() {
    const [data,setdata]=useState()

    fetch("https://data.covid19india.org/v4/min/timeseries.min.json").then(res=>res.json()).then(result=>{
        // console.log(result)
     let arr=[]
     arr.push(result)
        setdata(arr)


        // console.log;
    })
    let a=JSON.stringify(data,null,2)
    console.log(a);
  return (
    <div>
    <pre>{a}</pre>
    </div>
  )
}

export default Covid