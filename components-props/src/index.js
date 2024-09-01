import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Cartao from './cartao'
import Pedido from './pedido'

const App = () => {
    return <div className='container border p-4'>
        <div className='row'>
            <div className='col-12'>
                <h1 className='display-5 text-center border-bottom mb-4'> Seus Pedidos</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12 col-lg-6 col-xxl-4 '>
                <Cartao cabecalho="22/05/2025">
                    <Pedido icone="fa-solid fa-hard-drive fa-2x" titulo="SSD" descricao="SSD Kingston Sata A400" />
                </Cartao>
            </div>

            <div className='col-sm-12 col-lg-6 col-xxl-4 '>
                <Cartao cabecalho="23/05/2025">
                    <Pedido icone="fa-solid fa-memory fa-2x" titulo="Memoria" descricao="Memoria ram 16gb" />
                </Cartao>
            </div>
            <div className='col-sm-12 col-lg-6 col-xxl-4 '>
                <Cartao cabecalho="23/06/2022">
                    <Pedido icone="fa-solid fa-shuttle-space fa-2x" titulo="Foguete" descricao="Foguetinho" />
                </Cartao>
            </div>
        </div>
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)