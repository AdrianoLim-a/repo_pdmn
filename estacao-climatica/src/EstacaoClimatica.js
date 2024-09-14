// react class component: rcc
import React, { Component } from 'react'
// imrd
import ReactDOM from 'react-dom'

export default class EstacaoClimatica extends Component {

    timer = null
    state = {
        data: null
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const dataAtual = new Date().toLocaleDateString()
            // this.state.data = dataAtual
            this.setState({ data: dataAtual })
        }, 1000)
    }
    constructor(props) {
        super(props)
        console.log('EC:Constructor')
    }
    componentDidUpdate() {
        console.log('EC: componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('EC: componetDidUnmount')
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div
                        style={{ height: '6rem' }}
                        className='d-flex align-items-center rounded mb-2 '>
                        <i className={`fa-solid fa-5x ${this.props.icone}`}></i>
                        <p className="w-75 ms-3 text-center fs-1">{this.props.estacao}</p>
                    </div>
                    <p className='text-center'>
                        {
                            this.props.latitude ?
                                `Cordenadas: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.state.data}`
                                :
                                this.props.mensagemDeErro ?
                                    this.props.mensagemDeErro
                                    :
                                    'Clique no botão para saber qual a sua estação climática'
                        }
                    </p>
                    <button
                        onClick={this.props.obterLocalizacao}
                        className='btn btn-outline-primary w-100 mt-2'>
                        Descubra a sua estação climática
                    </button>
                    <button onClick={() =>
                        ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
                    } className='btn btn-outline-danger w-100 mt-2'>
                        Unmount
                    </button>
                </div>
            </div>
        )
    }
}
