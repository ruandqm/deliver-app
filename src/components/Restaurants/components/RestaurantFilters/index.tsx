import React, { useContext, useEffect, useState } from 'react'
import { HomeContext } from '../../../../contexts'
import { IRestaurant, ICards } from '../../../../interfaces/index'
import './style.scss'

export const RestaurantFilters = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [isGet, setIsGet] = useState(false)
    const {
        filteredRestaurants,
        setFilteredRestaurants,
        data,
        status } = useContext(HomeContext)
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

    const FilterData = (reset?: boolean) => {
        let array = data
        if (categoryFilter != 'all') {
            array = array.filter((restaurant: IRestaurant) => {
                return restaurant.categoria == categoryFilter
            })
            if (!reset) {
                setFilteredRestaurants(SortData(array, true))
            }
        }
        if (reset) {
            return array
        }
        else {
            setFilteredRestaurants(array)
        }
    }

    const SortData = (array: any, filtering?: boolean) => {
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
        } else if (filtering) {
            return array
        }
        else {
            return FilterData(true)
        }
    }

    useEffect(() => {
        status === "success" ? GetCategories() : null
    }, [status])

    useEffect(() => {
        if (isGet) {
            FilterData()
        }
    }, [categoryFilter])

    useEffect(() => {
        if (isGet) {
            const array = [...filteredRestaurants]
            setFilteredRestaurants(SortData(array))
            toRender(!render)
        }

    }, [sortFilter])

    useEffect(() => {
    }, [render])

    useEffect(() => {
        setFilteredRestaurants(data)
    }, [data])

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