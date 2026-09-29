import React from 'react'

const SingleData = ({singleData}) => {
  const {name , phone , website , company} =  singleData
  return (
    <div className='border-2 bg-amber-700 rounded-2xl  border-red-400 p-5'>
   <h1 className='text-3xl' >Data : {name} </h1>
    <h2> Website : {website} </h2>
    <span className=' text-xl'> number : {phone} </span> <br />
    <h3> Company  : {company.name} </h3>

    </div>
  )
}

export default SingleData