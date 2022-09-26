import axios from 'axios'
import React, { Component } from 'react'
class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: {},
            arr: []
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(val => {
            this.setState({ arr:val.data})
        })
    }
    OnClickHandler(e) {
        this.state.arr.map((e1, i) => {
            if (i+1 == e) {
                // console.log(e1);
                this.setState({
                    obj: e1
                })
            }
        })
    }
    render() {
        return (
            <div>
                    Buttons:
                {
                    this.state.arr.map((po) => (
                        
                            <button onClick={() => this.OnClickHandler(po.id)}>Button{po.id}</button>
                    ))}                 
                <p>{this.state.obj.id}</p>
                <p>{this.state.obj.userId}</p>  
                <p>{this.state.obj.title}</p>  
                <p>{this.state.obj.body}</p>        
        </div>
        )
    }
}          
export default Button;