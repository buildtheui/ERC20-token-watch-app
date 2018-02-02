import React, { Component } from "react";

class TransactionTable extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table mt-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Qty</th>
            <th scope="col">TxHash</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
          </tr>
        </tbody>
      </table>      
    )
  }
}

export default TransactionTable