import React, { Component } from 'react'
import ChildCom from './ChildCom'
class ParentCom extends Component {
    constructor() {
        super()
        this.state = {
            parentName: 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName) {
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (<div>
            <ChildCom greetHandler={this.greetParent} />
        </div>)
    }
}
export default ParentCom