import React, { Component } from 'react'
class Basic extends Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name
        }        
    }
    componentDidMount(){
        this.setState({
            name:"kishore"
        })
    }
    render(){
        return (<div>
            <div>
               <h1> {this.state.name}</h1>
               {/* <h1>{this.state.name}</h1> */}
            </div>
        </div>)
    }
}
export default Basic;