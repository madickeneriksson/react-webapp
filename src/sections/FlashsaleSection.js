
import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { FlashsaleProductsContext } from '../context/Contexts'


const FlashsaleSection = ({title, items =[]}) => {
  const products = useContext(FlashsaleProductsContext)

  return (
    <section className="__flashsales container">
    <div className="__flashsales-box">
        <div className="__flashsales-body">
        <h1 className="__flashsales-title">2 FOR USD $29</h1>
        <button className="__btn-theme-white" href="#">
            <span className="__btn-theme-left-white"></span>
            <span className="__btn-theme-right-white"></span>
           FLASE SALE
        </button>
    </div>
    </div>
    <div className="product-grid">
    <div className="container">
        <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          
         {
          items.map( product => <ProductCard key={product.articleNumber} item={product} />)
         }
    </div>
</div>
</div>
</section>

  )
}

export default FlashsaleSection