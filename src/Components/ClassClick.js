import React,{Component} from 'react'
class ClassClick extends Component{
    clickHandler(){        
        console.log('button Hitted');
    }
    render(){
        return(<div>
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        </div>)
    }
}
export default ClassClick;