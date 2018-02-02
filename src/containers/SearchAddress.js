import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchAddress extends Component {

  constructor(props) {
    super(props)

    this.state = {
      address: ''
    }
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
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="address">Contract address:</label>
            <input type="address" className="form-control" id="address"
              onChange={this.inputContractAddress.bind(this)} />
          </div>
          <button className="btn btn-primary" onClick={this.trackContract.bind(this)}>Track</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    contractAddress: state.contractAddress
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
