import React from 'react'

function cartao(props) {
  return (
    <div className='card'>
    <div className='card-header text-muted'>
      {props.cabecalho}
    </div>
    <div className='card-body'>
      {props.children}
    </div>
  </div>
  )
}

export default cartao