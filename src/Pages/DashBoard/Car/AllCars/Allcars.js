import React, { useEffect, useState } from 'react'

export default function Allcars() {

    const [cars,setCars]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/car")
        .then(res=>res.json())
        .then(data=>{
            setCars(data)
        })
    },[])



console.log(cars)
  return (
    <div>
      <h1>All Car</h1>

      <div>
       
            
            
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
         
        <th>Car</th>
        <th>Seat</th>
        <th>Bag</th>
        <th>Price Per K.M</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
     {
        cars?.map(car=>
      <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={car.cartImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{car.carName}</div>
               
            </div>
          </div>
        </td>
        <td>
               
         {car.seat}
          
        </td>
        <td>{car.bag
}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{car.priceperKM}</button>
        </th>
      </tr>
        
   
)}
      </tbody>
    
  </table>
</div>
            
            
           
      </div>
    </div>
  )
}
