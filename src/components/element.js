import React from 'react'

const Element = ({ elem, name }) => (
  <div style={{
    border: '2px solid #111',
    display: 'inline-block',
    margin: '20px 20px',
    width: '120px',
    height: '120px',
  }}>
    <h2 style={{
      fontSize: '50px',
      position: 'relative',
      top: '50%',
      transform: 'translateY(-60%)',
      textAlign: 'center'
    }}>{elem.symbol}</h2>
    <span style={{
      position: 'relative',
      width: '100%',
      display: 'inline-block',
      textAlign: 'center',
      bottom: '10px',
      opacity: name,
    }}>{elem.name}</span>
    <span style={{
      position: 'relative',
      display: 'inline-block',
      bottom: '100px',
      left: '80px',
    }}>{elem.atmNum}</span>
    <span style={{
      position: 'relative',
      display: 'inline-block',
      fontSize: '12px',
      bottom: '20px',
      left: '0'
    }}>{elem.atmMss}</span>
  </div>
)

export default Element
