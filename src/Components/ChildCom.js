import React from 'react'
function ChildCom(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('children')}>Greet parent</button>
        </div>
    )
}
export default ChildCom