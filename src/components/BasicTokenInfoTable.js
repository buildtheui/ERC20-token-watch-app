import React from "react";

const BasicTokenInfoTable = (props) => {
  return (
    <table className="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">key</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Coin Name</th>
          <td>{props.info.CoinName}</td>
        </tr>
        <tr>
          <th scope="row">Symbol</th>
          <td>{props.info.Symbol}</td>
        </tr>
        <tr>
          <th scope="row">Total Supply</th>
          <td>{props.info.TotalSupply}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default BasicTokenInfoTable