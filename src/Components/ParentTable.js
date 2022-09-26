import React, { Component } from 'react'
import ChildForm from './ChildForm';
class ParentTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: []


        }
    }
    change = (e) => {
        this.setState({
            val: e
        })
    }
    spliceRow = (index) => {
        this.state.rows.splice(index, 1)
        this.setState({ rows: this.state.rows })
    }
    DeleteData = (id, e) => {
        this.setState({
            e: this.state.e.filter((row) => {
                return row.id !== id
            })
        })
    }
    render() {
        return (
            <div>
                <ChildForm data={this.change}></ChildForm>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.val && this.state.val.map((e, index) => (
                                <tr key={index}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>
                                        <button onClick={() => this.spliceRow(index)}>
                                            Remove
                                        </button>
                                    </td>
                                    <td><button onClick={e => this.DeleteData(e.id)}>button</button></td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ParentTable;