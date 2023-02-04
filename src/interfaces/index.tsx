import { FunctionComponent } from "react"

export interface InavbarProps {
    isHome?: boolean,
    isRequest?: boolean
    modalOpen?: React.MouseEventHandler,
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

export interface ICards {
    data: IRestaurant[],
    status: string
}

export interface IModal {
    isOpen: boolean
}

