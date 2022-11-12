import React from 'react'

const ProductDetails = ({item}) => {
  return (
    <div>
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <img src={item.imageName} />
        
    </div>
    
  )
}

export default ProductDetails