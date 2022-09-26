import React, { Component } from 'react'
// import FormTask from './FormTask';

class Table1 extends Component {
    constructor(props) {
        super(props)
          this.state={
             val:props.data 
          }
       
    }
     click(index){
        // alert(`data deleted`)
      
        const re = this.props.data.splice(index,1)
        this.setState({
            val:re
        })

    }


    // OnClickHandler=(index)=>{
    //     this.setState({
    //         arr:index.this.state.filter((v,idx)=>idx!==index)
    //     })
    // }


    render() {
        return (
            <div>       
                {/* {this.props.arr.length !==0 ?         */}
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
                                {/* <td><button>button</button></td> */}
                                <td><button onClick={()=>this.click(index)}>Delete</button></td>
                            </tr>
                            ))}
                            </tbody>
                                   
                    </table> 
                    {/* ''
                } */}
                {/* <FormTask /> */}
    
            </div>
                                
        )
    }
}
export default Table1;