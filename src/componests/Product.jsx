import React from 'react'

const Product = ({Sproduct}) => {

    const {title,category,price,isAvailable,total} = Sproduct
  return (
    <div className='border-2 text-3xl px-3 py-4 bg-sky-500 '>
        <h1 className='font-bold'>title : {title} </h1>
     <h2>   categroy : {category}</h2>
      <h1>  price :{price}</h1>
     
     <h1> total : {total} </h1>
      <button className='text-2xl bg-green-700 px-7 py-3 mt-3 rounded-2xl' >Add to Card</button>  
    </div>
  )
}

export default Product