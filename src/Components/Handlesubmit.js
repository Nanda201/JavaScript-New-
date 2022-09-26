import React,{Component} from 'react'
class Handlesubmit extends Component{
    // HandleSubmit (event){
    //     event.preventDefault();
    //     var text = this.state.text;
    //     console.log("form submitted  value ", text);
    // }
    // handleChange (event){
    //     var text=event.target.value;
    //     console.log(text);
    //     this.setState({text:text});
    // }
    render(){
        return(<div>
            <div>
            {/* <form onSubmit={this.HandleSubmit.bind(this)}>
                <input onChange={this.handleChange.bind(this)} value={this.state.text}/> */}
                <button>
                    Submit
                </button>
            {/* </form> */}
            </div>
        </div>)
    }
}
export default Handlesubmit;