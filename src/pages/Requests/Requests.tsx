import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../../api/api'
import { Navbar } from '../../components/Navbar/Navbar'
import { IProductRequest, IRequest } from '../../interfaces/interfaces'

import './style.scss'

export const Requests = () => {
    const [requests, setRequests] = useState<IRequest[]>([])

    const GetRequests = async () => {
        const response = await axios.get('https://apigenerator.dronahq.com/api/9x07oRHk/deliveryRequests')
        setRequests(response.data)
    }

    useEffect(() => {
        GetRequests()
    }, [])

    return (
        <div className='requestsContainer'>
            <Navbar isRequest={true} />
            <section className="myRequests">
                <h2 className="title">Meus Pedidos</h2>
                <div className="requests">
                    {requests && requests.map((req) => {
                        return (
                            <article className="request">
                                <div className="restaurantInfos">
                                    <img src={req.restaurantLogo} alt="logo do restaurante" />
                                    <h3>{req.restaurantName}</h3>
                                </div>
                                <hr />
                                <div className="products">
                                    {req.products?.map((product: IProductRequest) => {
                                        return (
                                            <div className="product">
                                                <h3>{product.productCount}</h3>
                                                <h3>{product.productName}</h3>
                                            </div>
                                        )
                                    })}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}