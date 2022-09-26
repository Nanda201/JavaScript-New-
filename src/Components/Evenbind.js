import React, {Component} from 'react'
class Evenbind extends Component{
    constructor(){
        super()
        this.state={
            message:'hello'
        }
    }
    clickHandler(){
        this.setState({
            message:'goodbye!'
            
        })
        console.log(this);
    }
    render(){
        return(<div>
            <div>
                {this.state.message}
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        </div>)
    }
}
export default Evenbind;