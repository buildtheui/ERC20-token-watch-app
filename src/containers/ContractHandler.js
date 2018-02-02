import React, { Component } from 'react'
import { connect } from 'react-redux'
import Erc20Abi from '../utils/ERC-20-abi'
import { Loading } from '../components/Loading'
import TransactionTable from '../components/TransactionTable'


class ContractHandler extends Component {

  componentDidUpdate() {
    if(this.props.address.contractAddress !== '')
      this.instantiateContract()
  }
  
  instantiateContract() {
    let ERC20Contract = this.props.web3.eth.contract(Erc20Abi)
    let contractInstance = ERC20Contract.at(this.props.address.contractAddress)

    console.log(contractInstance)

    /* const simpleStorage = contract(SimpleStorageContract)
    simpleStorage.setProvider(this.props.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var simpleStorageInstance

    // Get accounts.
    this.props.web3.eth.getAccounts((error, accounts) => {
      console.log(accounts)
      simpleStorage.deployed().then((instance) => {
        console.log(instance)
        simpleStorageInstance = instance

        // Stores a given value, 5 by default.
        return simpleStorageInstance.set(5, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return simpleStorageInstance.get.call(accounts[0])
      }).then((result) => {        
        // Update state with the result.
        return this.setState({ storageValue: result.c[0] })
      })
    }) */
  }

  render() {
    let renderComponent = <Loading waitingText="waiting contract address..." />
    if (this.props.address.contractAddress !== '') {
      renderComponent = <TransactionTable />
    }

    return (
      <div className="row">
        {renderComponent}
      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    web3: state.web3.web3Instance,
    address: state.contractAddress
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const ContractHandlerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractHandler)

export default ContractHandlerContainer
