// import React from "react";
// const  Hello=()=>{
    
//     return(<div>
//         <h1>hey kishore</h1>
//     </div>)

// }
// export default Hello;


import { Component } from 'react'
// import './styles.css'

 class Hello extends Component {
  state = {
    rows: [
      { id: 1, col1: 'A', col2: 'some text' },
      { id: 2, col1: 'B', col2: 'some text' }
    ]
  }

  spliceRow = (index) => {
    this.state.rows.splice(index, 1)
    this.setState({ rows: this.state.rows })
  }

  filterRows = (id) => {
    this.setState({
      rows: this.state.rows.filter((row) => {
        return row.id !== id
      })
    })
  }

  render() {
    return (
      <table className="App">
        <tbody>
          {this.state.rows.map((row, index) => {
            return (
              <tr key={row.id}>
                <td>{row.col1}</td>
                <td>{row.col2}</td>
                <td>
                  <button onClick={() => this.spliceRow(index)}>
                    Remove row with splice
                  </button>
                </td>
                <td>
                  <button onClick={() => this.filterRows(row.id)}>
                    Remove row with filter
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
export default Hello;
