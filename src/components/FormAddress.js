import React from 'react'

export const FormAddress = (props) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="address">Contract address:</label>
          <input type="address" className="form-control" id="address"/>
        </div>
        <button className="btn btn-primary">Track</button>
      </div>
    </div>
  )
}