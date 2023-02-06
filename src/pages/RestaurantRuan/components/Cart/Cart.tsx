import React, { useContext } from 'react'
import { RestaurantRuanContext } from '../../../../contexts/contexts'
import CloseIcon from '../../../../assets/images/close.svg'
import './style.scss'

export const Cart = () => {

    const { offCanvas, setOffCanvas } = useContext(RestaurantRuanContext)

    const CloseCart = () => {
        setOffCanvas(false)
    }

    if (offCanvas) {
        return (
            <div className='cartOffCanvas'>
                <div className="cartContainer">
                    <div className="header">
                        <span className='close' onClick={CloseCart}><img src={CloseIcon} alt="fechar" /></span>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}


