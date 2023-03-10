import { FunctionComponent } from "react"

export interface InavbarProps {
    isHome?: boolean,
    isRequest?: boolean
    modalOpen?: React.MouseEventHandler,
    cartOffCanvas?: React.MouseEventHandler,
    search?: React.ChangeEventHandler,
}

export interface IRestaurant {
    url: string,
    nome: string,
    categoria: string,
    avaliacao: number,
    sobre: string,
    id: number,
}

export interface IProduct {
    idRestaurante: number,
    nome: string,
    url: string,
    valor: number,
    promocao: string,
    valorPromocional: number,
    descricao: string,
    id: number,
    removeProduct?: React.MouseEventHandler,
}

export interface ICards {
    data: IRestaurant[],
    status: string
}

export interface ICartProduct {
    productId: number,
    count: number,
    totalValue?: number,
}

export interface ICartProductMarcos {
    productId: number,
    count: number,
    value: number,
    valueIndividual?: number,
    name?: string,
    descricion?: string,
}


export interface IProductRequest {
    productId: number,
    count: number,
    productName: string
}

export interface IRequest {
    restaurantLogo?: string,
    restaurantName?: string,
    products?: IProductRequest[]
}