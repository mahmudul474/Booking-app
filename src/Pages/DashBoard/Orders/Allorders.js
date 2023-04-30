import React, { useEffect, useState } from 'react'

export default function Allorders() {


 const[orders,setOrders]=useState([])

  
 useEffect(()=>{
    fetch("http://localhost:5000/order")
    .then(res=>res.json())
    .then(data=>setOrders(data))
 },[])



 console.log(orders)

  return (
    <div>
     <h1 className='text-center text-xl capitalize my-5'> orders</h1>
     <div>
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
       
        <th>Car</th>
        <th>pickup-Drop</th>
        <th>Date</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
    {
        orders?.map(order=> <tr>
         
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={order?.car.carImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{order?.car.carName}</div>
 
            </div>
          </div>
        </td>
        <td>
          PICKUP: {order?.pickup}
          <br/>
          <span className="badge badge-ghost badge-sm">Drop :{order?.drop}</span>
        </td>
        <td className='flex flex-col'>
            <span>startDate:{order.date}</span> 
             <span>return-Date : {order?.returnDate} </span>
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">{order?.price
} TK</button>
        </th>
      </tr>)
    }
     
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
     </div>
    </div>
  )
}
