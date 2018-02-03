import React from "react";

const TransactionTable = (props) => {
  return (
    <table className="table mt-5">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Qty</th>
          <th scope="col">TxHash</th>
        </tr>
      </thead>
      <tbody>
      {props.transactions.map((trans, index) => {
        return (
          <tr key={index}>
            <th scope="row">{trans._value.c[0]}</th>
            <td>{trans._to}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default TransactionTable