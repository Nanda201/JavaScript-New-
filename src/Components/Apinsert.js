import axios from 'axios'
import React, { Component } from 'react'
class Apinsert extends Component {
    constructor() {
        super()
        this.state = {
            name:[]
        }
    }
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then(val => {
        this.setState({ name:val.data})
    })
}
    render(){
        return (<div>
            
            <div>
            {console.log(this.state.name)}
            </div>
            <div>
            <table className="table">
                        <thead>
                        <tr>
                        <th scope="col">#</th>
                          <th scope="col">UserId</th>
                          <th scope="col">Id</th>
                          <th scope="col">Title</th>
                          <th scope="col">body</th>
                        </tr>
                      </thead>
                {
                   this.state.name.map((item)=>(                   
                      <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                      </tr>                      
                    </tbody>                   
                    ))
                }
                </table>
          </div>
        </div>)
    }
}

export default Apinsert;