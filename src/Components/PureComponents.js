import React,{Component,PureComponent} from 'react'
import { Link } from 'react-router-dom';
class PureComponents extends PureComponent{
    render(){
        {console.log("hello");}
        return(<div>
            <div>
                <Link to="/">
                {this.props.name}</Link>
            </div>
        </div>)
    }
}
export default PureComponents;