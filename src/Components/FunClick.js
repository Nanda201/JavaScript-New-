import React from 'react'
function FunClick(){
    function clickHandler(){
        console.log('button clicked');
    }
    return(
        <div>
            <div>
                <button onClick={clickHandler}> Click me</button>
            </div>
        </div>
    )
}
export default FunClick;