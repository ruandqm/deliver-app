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
}

export interface ICards {
    data: IRestaurant[],
    status: string
}

export interface ICartProduct {
    productId: number,
    count: number
}


