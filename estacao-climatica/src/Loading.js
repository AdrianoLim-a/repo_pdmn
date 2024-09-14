import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="d-flex justify-cpontet-center align-items-center border roudend p-3">
                <div className='spinner-boarder text primary' style={{ width: '3rem', height: '3rem' }}>
                    <spam className="visually-hidden">{this.props.mensagem}</spam>
                </div>
                <p className='text-primary mt-3'>{this.props.mensagem || "Carregando"}</p>
            </div>
        )
    }
}
