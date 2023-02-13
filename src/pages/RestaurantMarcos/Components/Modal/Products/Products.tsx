import "./style.scss"
import { RestaurantMarcosContext } from "../../../../../contexts/contexts"
import { useContext } from "react"
import { ICartProductMarcos } from '../../../../../interfaces/interfaces'

const Products: React.FC<ICartProductMarcos> = () => {
    const { request, setRequest, actRestaurant } = useContext(RestaurantMarcosContext)

    const removeProduct = (index: number, valueProduct: number) => {
        console.log(index)
        console.log(valueProduct)
        const newRequest = [...request];
        console.log(newRequest)
        if (newRequest[index].count > 1) {
            newRequest[index].count--;
            newRequest[index].value = newRequest[index].value - valueProduct
       
        } else {
          newRequest.splice(index, 1);
          
        }
        setRequest(newRequest);
        window.localStorage.setItem(JSON.stringify(actRestaurant.id), JSON.stringify(newRequest))
      };

        

        return (
            <section className='containerModalProductsMarcos'>
                {request.map((product: ICartProductMarcos, index:number) => {
                    return (
                        <>
                            <div className='containerCartProducts'>
                                <div className="properties">
                                    <span className="propertiesCountNameValue">{product.count}x ➖ {product.name} ➖ Valor: R${product.value?.toFixed(2)}</span>
                                </div>
                                <div className="productDescription">
                                    <p>{product.descricion}</p>
                                </div>
                                <p onClick={() => removeProduct(index, product.valueIndividual)} className='remove'>Remover</p>
                            </div>
                        </>
                    )
                })}
            </section>
        )
    }

    export default Products
