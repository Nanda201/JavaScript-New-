import React, { Component } from 'react'
import Table1 from './Table1'
class FormTask extends Component{
    constructor(props){
        super(props)
        this.state={
            id:" ",
            name:" ",
            number:"",
            arr:[]
        }
    }
    changeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    changeNumber=(e)=>{
        this.setState({
            number:e.target.value
        })
        
    }
    changeId=(e)=>{
        this.setState({
            id:e.target.value
        })
    }
   
    submitHandler=(e)=>{
        e.preventDefault();
        const userdetails={
            id:this.state.id,
            name:this.state.name,
            number:this.state.number
        }
        
        // let arr1=[]
        this.state.arr.push(userdetails)
        let arr2=this.state.arr
        this.setState({id:''})
        this.setState({name:''})
        this.setState({number:''})
        this.setState({arr:arr2})

    }
    OnClickHandler=(e,index)=>{
        this.setState({
            arr:e.this.state.filter((v,idx)=>idx!==index)
        })
    }
    click(index){
        // alert(`data deleted`)
      
        const re = this.props.data.splice(index,1)
        this.setState({
            val:re
        })

    }
    render(){
        return(
            <div>
            <form onSubmit={this.submitHandler}>
                <div>
                <label>id</label>
                <input type="text"  value={this.state.id} onChange={this.changeId}/>
                </div>
                <div>
                <label>name</label>
                <input type="text" value={this.state.name} onChange={this.changeName}/>
                <div>
                <label>number</label>
                <input type="number" value={this.state.number} onChange={this.changeNumber}/>
                
                </div>
                </div>
                <button value="submit">submit </button>
                <div>       
                
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">number</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.data && this.props.data.map((e,index)=>(
                            <tr key={index}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.number}</td>
                                <td><button onClick={()=>this.click(index)}>Delete</button></td>
                            </tr>
                            ))}
                            </tbody>
                                   
                    </table>    
            </div>                
            </form>           
            <Table1 data= {this.state.arr} />
            {/* <Table1 OnClickHandler= {this.state.arr}  /> */}           
            </div>
            
        )
    }
}
export default FormTask;
//OnClickHandler={OnClickHandler}