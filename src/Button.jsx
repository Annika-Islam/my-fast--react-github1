import React, { useState } from 'react'

const Button = () => {
    const [visiteded , setVisiteded] = useState(false)

    const handelVidid = ()=> {
        // setVisiteded(true)
        // setVisiteded(!visiteded)
        if( visiteded){
             setVisiteded(false)
        }
        else{
          setVisiteded(true)
        }
    }
  return (
    <div>
        
        <button onClick={handelVidid} className='border-2 rounded-3xl bg-amber-500 px-7 py-3 mt-5 ml-6'> { visiteded ? "visited ": "not visited"} </button>
        <button className='border-2 rounded-3xl bg-amber-500 px-7 py-3 mt-5 ml-6'> visit me2 </button>
        <button className='border-2 rounded-3xl bg-amber-500 px-7 py-3 mt-5 ml-6'>visit me3 </button>
        <button className='border-2 rounded-3xl bg-amber-500 px-7 py-3 mt-5 ml-6'>visit me4 </button>
    </div>
  )
}

export default Button