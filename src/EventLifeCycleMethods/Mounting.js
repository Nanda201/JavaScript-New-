import axios from 'axios'
import React,{Component} from 'react'
class Mounting extends Component{
    constructor(props){
        super(props)
            this.state={
                name:[]
            }
        
    }
    // static getDerivedStateFromProps(props,state){
    //     return {
    //         name:'nanda'
    //     }
    // }
    componentDidMount(){
        axios.get("https://data.covid19india.org/v4/min/timeseries.min.json").then(val=>{
            this.setState({name:val.data})
        })
        // this.setState({
        //     name:'ayesha'
        // })
    }
    render(){
        return(<div>
            <div>
                {console.log(this.state.name)}
            </div>
        </div>)
    }
}
export default Mounting;