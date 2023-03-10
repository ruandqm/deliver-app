import React from 'react'
import axios from 'axios'

export const api = {
    restaurants: async function () {
        const response = await axios.get('https://apigenerator.dronahq.com/api/dstqgR3A/restaurantes')
        return response.data
    },
    products: async function () {
        const response = await axios.get('https://apigenerator.dronahq.com/api/3yNrDssc/produtos')
        return response.data
    },
    productsMarcos: async function () {
        const response = await axios.get('https://apigenerator.dronahq.com/api/fg1-lnJO/requestMarcos')
        return response.data
    }
}