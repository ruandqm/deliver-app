import React, { useContext } from 'react'
import { RestaurantMarcosContext } from '../../../../contexts/contexts'
import VectorExit from "../../../../assets/images/vectorExit.svg"
import "./style.scss"
import Products from "./Products/Products"

export const ModalMarcos = () => {

  const { openModalMarcos, setModalMarcos, actRestaurant, request, totalRequest } = useContext(RestaurantMarcosContext)

  const finishedOrder = () =>{
    alert("Pedido realizado com sucesso!!!! Bom apetite!!")
  }

  const closeModal = () =>
    setModalMarcos(false)

  if (openModalMarcos) {
    return (

      <section className='cartContainer'>

        <div className='cart'>
          <span onClick={closeModal}><img className='close' src={VectorExit} alt="Button Exit" />Seu pedido em</span>

          <h3>Restaurante ➖ {actRestaurant?.nome}</h3>

          <div className='products'> <Products /></div>

          <div className='totalValue'>
            <span>Total: </span>
            <span>R$ {totalRequest.toFixed(2)}</span>
          </div>

          <button onClick={finishedOrder} className='btnRequest' type='submit'>Finalizar Pedido</button>

        </div>
      </section>
    )
  } else { return null }
}
