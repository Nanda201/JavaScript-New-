import React from 'react'
function Person({persons}){
    return(<div>
        <h3>My name is {persons.name}, id is {persons.id}, salary taken {persons.sal}</h3>
    </div>)
}
export default Person;