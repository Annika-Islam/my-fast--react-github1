
import { useState } from 'react'
import './App.css'
import Object from './componests/Object'



const App = () => {

  const [price, setPrice] = useState(10)

  const incrssHandel = () => {
    const total = price + 1
    setPrice(total)
  }

  const dicressHandel = () => {
    const total = price - 1
    setPrice(total)
  }



  const buttonClk = () => {
    alert("Iam aleat chacke me")

  }

  const product = {
    name: " I Phone",
    price: 170000
  }

  const product2 = {
    name2: "Annika",
    depmant: " computer"
  }

  const arrays = ["Annika", "sumaiya", "Akhi", "Nurifa"]

  return (
    <div>

      <h1>price : {price} </h1>
      <button onClick={incrssHandel}>incressH</button>
      <button onClick={dicressHandel}>dicress</button>

      <p>price : {price} </p>
      <span> price : {price} </span>



      <Object 
      
      product = {product}
      product2 = {product2}

      arrays = {arrays}

      alert = {buttonClk}

      ></Object>




    </div>
  )
}

export default App
