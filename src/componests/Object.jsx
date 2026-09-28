import React from 'react'

const Object = (props) => {

   
    
  return (
    <div>
        <h2>Product Name :  {props.product.name}  </h2>
        <h2> product Price : {props.product.price} </h2>
        <h1> My Name is : {props.product2.name2} </h1> 
        <h1> My Name is : {props.product2. depmant} </h1>

         <h2> Name Length : {props.arrays.length} </h2>

         <button onClick={props.alert}> Click Me plz chack </button>
    </div>
  )
}

export default Object