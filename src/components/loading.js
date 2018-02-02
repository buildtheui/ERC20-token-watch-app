import React from 'react'

export const Loading = (props) => {
  return (
    <div className="center-loading">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>        
      </div>
      <p className="loading-text">{props.waitingText}</p>
    </div>
  )
}