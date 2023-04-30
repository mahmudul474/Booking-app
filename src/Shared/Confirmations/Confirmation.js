import React from 'react'

export default function Confirmation() {
  
    const numberr=Math.random()
    return (
    <div className='flex flex-col items-center '>
      <h1 className='text-lg w-full text-center'>order successfully done</h1>
      <p>order Id  : {numberr}</p>
    </div>
  )
}
