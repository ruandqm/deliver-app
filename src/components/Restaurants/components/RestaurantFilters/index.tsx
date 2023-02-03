import React, { useContext, useEffect, useState } from 'react'
import { HomeFilterContext } from '../../../../contexts'
import { IRestaurant, ICards } from '../../../../interfaces/index'
import './style.scss'

export const RestaurantFilters = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [isGet, setIsGet] = useState(false)
    const {
        restaurantsToRender,
        setRestaurantsToRender,
        filteredRestaurants,
        setFilteredRestaurants,
        data,
        status } = useContext(HomeFilterContext)

    const [render, toRender] = useState(false)
    const [categoryFilter, setCategoryFilter] = useState('all')
    const [sortFilter, setSortFilter] = useState('all')

    const GetCategories = () => {
        data.map((restaurant: IRestaurant) => {
            const lastCategories = categories
            lastCategories.includes(restaurant.categoria) ? null : lastCategories.push(restaurant.categoria)
            setCategories(lastCategories)
        })
        setIsGet(true)
    }

    const SetFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.target.name == 'categoryFilter' ? (
            setCategoryFilter(e.target.value)
        ) : (
            setSortFilter(e.target.value)
        )
    }

    const FilterData = () => {
        /*  categoryFilter != 'all' ? (
             setFilteredRestaurants(data.filter((restaurant: IRestaurant) => {
                 return restaurant.categoria == categoryFilter
             })
             )) : null
         sortFilter != 'all' ? (
             sortFilter === 'bigger' ? setFilteredRestaurants(data.sort((a: IRestaurant, b: IRestaurant) => {
                 return a.avaliacao - b.avaliacao
             })) : setFilteredRestaurants(data.sort((a: IRestaurant, b: IRestaurant) => {
                 return b.avaliacao - a.avaliacao
             }))
         ) : null */
    }

    const SortData = (array: any) => {
        if (sortFilter != 'all') {
            if (sortFilter === 'bigger') {

                return (array.sort((a: IRestaurant, b: IRestaurant) => {
                    return b.avaliacao - a.avaliacao
                }))
            } else if (sortFilter === 'smaller') {
                return (array.sort((a: IRestaurant, b: IRestaurant) => {
                    return a.avaliacao - b.avaliacao
                }))
            }
        } else {
            return array
        }
    }

    useEffect(() => {
        status === "success" ? GetCategories() : null
    }, [status])

    useEffect(() => {
        let array = data
        if (categoryFilter != 'all') {
            array = array.filter((restaurant: IRestaurant) => {
                return restaurant.categoria == categoryFilter
            })
            setFilteredRestaurants(SortData(array))
        } else {
            setFilteredRestaurants(SortData(array))
        }
    }, [categoryFilter])

    useEffect(() => {
        const array = [...filteredRestaurants]
        setFilteredRestaurants(SortData(array))
        toRender(!render)
    }, [sortFilter])

    useEffect(() => {
    }, [render])

    useEffect(() => {
        setFilteredRestaurants(data)
    }, [data])

    useEffect(() => {
        console.log(filteredRestaurants)
    }, [filteredRestaurants])


    return (
        <section className="homeFilters">
            <select name="categoryFilter" defaultValue={'all'} onChange={SetFilter}>
                <option value="all">Categoria</option>
                {isGet && (categories.map((category, index) => {
                    return <option key={index}>{category}</option>
                }))} </select>
            <select name="sortFilter" defaultValue={'all'} onChange={SetFilter}>
                <option value="all">Ordenar</option>
                <option value="bigger">Maior Avaliação</option>
                <option value="smaller">Menor Avaliação</option>
            </select>
        </section>
    )
}
