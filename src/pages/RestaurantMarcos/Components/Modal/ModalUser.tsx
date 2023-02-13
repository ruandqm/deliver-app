import React, { useContext } from 'react'
import { RestaurantMarcosContext } from '../../../../contexts/contexts'
import "./styleModalUser.scss"

const ModalUser = () => {

    const { openModalUser, setModalUser } = useContext(RestaurantMarcosContext)

    const send = () => {
        alert("Pedido enviado com sucesso!!! Agora é com a gente ❤")
        setModalUser(false)
    }

    const closeModalUser = () => {
        setModalUser(false)
    }

    if (openModalUser) {
        return (
            <div className="containerModalUser">
            <section className='modalUser'>
                <div className='modal'>
                    <span onClick={closeModalUser} className='exit'>❌</span>
                    <h3 className='title    '>Insira seus dados:</h3>
                    <label>Nome:</label>
                    <input type="text" />
                    <label>Endereço:</label>
                    <input type="text" />
                    <label htmlFor="">Forma de pagamento:</label>
                    <select name="" id="">
                        <option value="">Cartão</option>
                        <option value="">Dinheiro</option>
                        <option value="">Pix</option>
                    </select>
                    <button onClick={send} className='sendRequest'>Enviar pedido</button>
                </div>
            </section>
            </div>
        )
    } else { return null }
}

export default ModalUser
