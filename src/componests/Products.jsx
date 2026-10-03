import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {

   const [product ,setProduct]= useState([])

    useEffect( () => {
 fetch("Facks.json")
 .then(res => res.json())
 .then(data => setProduct(data))

    }, [])
  return (
    <div className=' grid grid-cols-3 gap-3.5 '>
        
        {
            product.map(Aproduct => <Product
            key={product.id}
            Sproduct = {Aproduct}
            ></Product>)
        }
    </div>
  )
}

export default Products