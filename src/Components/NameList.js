import React from 'react'
import Person from './Person'
function NameList(){
    const person=[
        {
            'name':'kishore',
            'id':213,
            'sal':25
        },
        {
            'name':'nanda',
            'id':215,
            'sal':26
        },
        {
            'name':'nanda',
            'id':216,
            'sal':27
        }
    ]
    const personlist=person.map(persons=>(
        <Person key={persons.sal} persons={persons}/>
    ))
    return(<div>
        {personlist}
    </div>)
    // var names=['nanda','kishore','pinnapuralla']
    // var namelist=names.map(name=><h2>{name}</h2>)
    // return(<div>
    //     {namelist}
    // </div>)
    // return (<div>
    //     {
    //         names.map(name=><h2>{name}</h2>)
    //     }
    // </div>)
    // return(<div>
    //     <h1>{names [0]}</h1>
    //     <h1>{names[1]}</h1>
    //     <h2>{names[2]}</h2>
    // </div>)
}
export default NameList