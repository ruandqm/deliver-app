import RequestIcon from '../../assets/images/requests.svg'
import AddRestaurantIcon from '../../assets/images/addRestaurant.svg'
import CartIcon from '../../assets/images/shoppingCart.svg'
import { InavbarProps } from '../../interfaces/interfaces'
import './style.scss'

export const Navbar = (props: InavbarProps) => {

    return (
        <header className='mainNavbar'>
            <a className='brand' href="/"><h2>DeliverApp</h2></a>

            {/* Ternaries check which page the navbar is on to display the correct icons */}

            {props.isHome ? (<div className="searchBar">
                <span className="material-symbols-outlined">
                    search
                </span>
                <input onChange={props.search} type="text" placeholder='Busque por um restaurante' />
            </div>) : (<div className="return"><a href="/">
                <span className="material-symbols-outlined">
                    undo
                </span>
                <span>Restaurantes</span></a>
            </div>)}

            <nav>
                <a href='/requests'><img src={RequestIcon} alt="ir para os pedidos" /></a>

                {props.isHome ? <a onClick={props.modalOpen}><img src={AddRestaurantIcon} alt="adicionar um restaurante" /></a> : (
                    props.isRequest ? null : <a onClick={props.cartOffCanvas}><img src={CartIcon} alt="ir para o carrinho" /></a>
                )}
            </nav>
        </header>
    )
}