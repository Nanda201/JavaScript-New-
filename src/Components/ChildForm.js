import React, { Component } from 'react'


class ChildForm extends Component{
    constructor(props){
        super(props)
        this.state={
            id:"",
            name:"",
            arr:[],
            // data:[]
        }
    }
    ChangeId=(e)=>{
        this.setState({
            id:e.target.value
        })
    }

    ChangeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    SubmitHandler=(e)=>{
        e.preventDefault();
        const user={
            id:this.state.id,
            name:this.state.name
        }
        this.state.arr.push(user)
        let arr2=this.state.arr
        console.log(arr2)
        this.setState({arr:arr2})
        this.props.data(arr2)       
    }
    render(){
        return(
            <div>
            <form onSubmit={this.SubmitHandler}>
            <div>
                <label>id</label>
                <input type="number" value={this.state.id} onChange={this.ChangeId}/>
                </div>
                <div>
                <label>name</label>
                <input type="text" value={this.state.name} onChange={this.ChangeName}/>
                </div>
                <button value="submit">submit </button>
                </form>
                
            </div>
        )
    }
    
}
export default ChildForm;