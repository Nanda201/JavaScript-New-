import React,{Component} from 'react'
class Update extends Component{

    state={
        name:'name'
    }
    static getDerivedStateFromProps(){
        return {
            name:"nanda"
        }
    }
    render(){
        return(<div>
            <div>
                {this.state.name}
            </div>
        </div>)
    }
}
export default Update;
