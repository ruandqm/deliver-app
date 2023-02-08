import React, { useContext } from 'react'
import { RestaurantMarcosContext } from '../../../../contexts/contexts'
import VectorExit from "../../../../assets/images/vectorExit.svg"
import "./style.scss"

export const ModalMarcos = () => {

  const { openModalMarcos, setModalMarcos, actRestaurant } = useContext(RestaurantMarcosContext)

  const closeModal = () =>
    setModalMarcos(false)

  if (openModalMarcos) {
    return (

      <section className='cartContainer'>

        <div className='cart'>
          <span onClick={closeModal}><img className='close' src={VectorExit} alt="Button Exit" />Seu pedido em</span>

          <h3>Restaurante ➖ {actRestaurant?.nome}</h3>

          <div>Produtos</div>

          <span className='value'>Total</span>

          <button className='btnRequest' type='submit'>Finalizar Pedido</button>

        </div>
      </section>
    )
  } else { return null }
}
