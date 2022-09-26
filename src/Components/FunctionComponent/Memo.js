import React,{memo}from 'react'
function Memo({name}){
    {console.log("hiii");}
    return (<div>
        <div>
           {name}
        </div>
    </div>)
}
export default memo(Memo);