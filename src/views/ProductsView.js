import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../context/Contexts'



const ProductsView = () => {
  window.top.document.title = 'Fixxo.'
  const products = useContext(ProductContext);
  
  return (
    <>
     < MainMenuSection />
     < BreadcrumbSection currentPage="Products" />
     < ProductGridSection title="Products" items={products} />

     <FooterSection />
  
    </>
  )
}

export default ProductsView