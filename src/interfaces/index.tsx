export interface InavbarProps {
    isHome?: boolean,
    isRequest?: boolean
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

