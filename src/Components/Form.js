import React, { Component } from "react";
class Form extends Component{
    constructor(){
        super()
        this.state={
            username:" ",
            comments:" ",
            topic:" "
        }
    }
    changeHandler=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    changeComment=(e)=>{
        this.setState({
            comments:e.target.value
        })
    }
    onTopic=(e)=>{
        this.setState({
            topic:e.target.value
        })
    }
    handlesubmit=(e)=>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    e.PreventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handlesubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea  value={this.state.comments} onChange={this.changeComment}/>
                </div>
                <div>
                <label>Topics</label>
                <select value={this.state.topic} onChange={this.onTopic}>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                    <option value="Html">Html</option>
                </select>
                </div>
                <button value="submit">submit </button>
            </form>
        )
    }
}
export default Form;