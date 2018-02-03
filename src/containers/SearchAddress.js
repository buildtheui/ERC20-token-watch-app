import React, { Component } from 'react'
import { connect } from 'react-redux'

import TestCoin from '../../build/contracts/TestCoin.json'
const contract = require('truffle-contract')

class SearchAddress extends Component {

  constructor(props) {
    super(props)

    this.state = {
      address: ''
    }
  }

  componentDidMount(){
    /**
     * in case the TestCoin contract is deployed in truffle
     * And wants to get the address to test it
     */
    let TestCoinInstance = contract(TestCoin)
    TestCoinInstance.setProvider(this.props.web3.currentProvider)

    // deploy token contract
    TestCoinInstance.deployed().then((instance) => {
      this.setState({ address: instance.address })
    })
    .catch((err) => {
      console.log('deploying without local node')
    })
  }

  inputContractAddress(event) {
    this.setState({address: event.target.value }) 
  }

  trackContract(event) {
    this.props.setContractAddress(this.state.address)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-7">
          <div className="form-group">
            <label htmlFor="address">Contract address:</label>
            <input type="address" className="form-control" id="address"
              value={this.state.address} onChange={this.inputContractAddress.bind(this)} />
          </div>
          <button className="btn btn-primary" onClick={this.trackContract.bind(this)}>Track</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    contractAddress: state.tokenReducer,
    web3: state.web3.web3Instance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setContractAddress: (address) => {
      dispatch({
        type: 'ADD_ADDRESS',
        payload: address
      })
    }
  }
}

const SearchAddressContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAddress)

export default SearchAddressContainer
