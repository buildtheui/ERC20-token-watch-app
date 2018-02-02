import React, { Component } from 'react'
import { connect } from 'react-redux'
import SimpleStorageContract from '../../build/contracts/SimpleStorage.json'
import Erc20Abi from '../utils/ERC-20-abi'
import { FormAddress } from '../components/FormAddress'

import '../assets/css/oswald.css'
import '../assets/css/open-sans.css'
import '../assets/css/pure-min.css'
import '../assets/css/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0
    }
  }

  componentDidMount() {
    this.instantiateContract()
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */




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
    return (
      <div >
        <nav className="navbar pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">ERC20 Token watch app</a>
        </nav>
        <main className="container">
          <FormAddress />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    web3: state.web3.web3Instance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
