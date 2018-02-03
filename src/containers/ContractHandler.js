import React, { Component } from 'react'
import { connect } from 'react-redux'
import Erc20Abi from '../utils/ERC-20-abi'
import { addBasicInfo } from '../actions/tokenActions'
import { Loading } from '../components/Loading'
import TransactionTable from '../components/TransactionTable'
import BasicTokenInfoTable from '../components/BasicTokenInfoTable'
import { eventActions } from '../actions/eventActions'

class ContractHandler extends Component {

  componentDidUpdate() {
    if (this.props.address.contractAddress !== '') {
      this.instantiateContract(...this.callContract())      
    }
  }

  callContract() {
    let ERC20Contract = this.props.web3.eth.contract(Erc20Abi)
    let contractInstance = ERC20Contract.at(this.props.address.contractAddress)
    return [ERC20Contract, contractInstance]
  }

  observeTransactions(ERC20Contract, contractInstance) {    
    const filter = contractInstance.Transfer()

    filter.watch((error, result) => {
      this.props.setTransferEvent([...this.props.transferEvents, result.args])      
    })

  }

  instantiateContract(ERC20Contract, contractInstance) {

    this.props.web3.eth.getCoinbase((error, coinbase) => {

      let symbol = new Promise((resolve, reject) => {
        contractInstance.symbol
          .call({ from: coinbase }, function (error, result) {
            resolve((error) ? 'not defined' : { Symbol: result })
          })
      })

      let totalSupply = new Promise((resolve, reject) => {
        contractInstance.totalSupply
          .call({ from: coinbase }, function (error, result) {
            resolve((error) ? 'not defined' : { TotalSupply: result.c[0] })
          })
      })

      let name = new Promise((resolve, reject) => {
        contractInstance.name
          .call({ from: coinbase }, function (error, result) {
            resolve((error) ? 'not defined' : { CoinName: result })
          })
      })
      
      Promise.all([symbol, totalSupply, name]).then((tokenBasicInfo) => {
        let tokenInfo = {}
        tokenBasicInfo.forEach((token) => {
          let key = Object.keys(token)[0]
          tokenInfo[key] = token[key]
        })

        if (!this.props.basicTokenInfo.hasOwnProperty("CoinName")) {
          this.props.setTokenBasicInfo(tokenInfo)
          this.observeTransactions(...this.callContract())
        }

      })
    })
  }

  render() {
    let renderComponent = (<Loading waitingText="waiting contract address..." />)
    if (this.props.address.contractAddress !== '') {
      renderComponent = (
        <div className="row">
          <div className="col-md-4 ml-4">
            <BasicTokenInfoTable info={this.props.basicTokenInfo} />
          </div>
          <div className="col-md-6">
            <TransactionTable transactions={this.props.transferEvents} />
          </div>
        </div>
      )
    }

    return (
      <div>
        {renderComponent}
      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    web3: state.web3.web3Instance,
    address: state.tokenReducer,
    basicTokenInfo: state.tokenReducer.basicTokenInfo,
    transferEvents: state.tokenReducer.transferEvents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTokenBasicInfo: (basicInfo) => {
      dispatch(addBasicInfo(basicInfo))
    },
    setTransferEvent: (event) => {
      dispatch(eventActions(event))
    }
  }
}

const ContractHandlerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractHandler)

export default ContractHandlerContainer
