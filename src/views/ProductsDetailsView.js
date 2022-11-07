import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetails from '../sections/ProductDetails'

const ProductDetailsView = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
            setProduct(await result.json())
        }
        fetchData()
    }, [])

    return (
    <>
        < MainMenuSection />
        <BreadcrumbSection currentPage="ProductsDetails" />
        <ProductDetails product={product} />
    </>
  )
}

export default ProductDetailsView