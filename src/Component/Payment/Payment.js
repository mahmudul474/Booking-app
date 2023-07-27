import React, { useContext, useState } from 'react'
import {BsCash, BsCreditCard2Back}from "react-icons/bs" 
import DataContext from '../../Context/BookingDataContex';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
 

  function Payment() {

const navigate=useNavigate()

const { data, setData, category, setCategory, userInfo, setUserInfo ,distance,setDistance}=useContext(DataContext)
   
   
  const  totalwithreturn=parseFloat(distance * (category && category.price) * 2).toFixed(2)
    const singlePrice=parseFloat(distance * (category && category.price)  ).toFixed(2)
    
const price=(data &&  data.returnDate==="" && data.waitandReturn==="" ? singlePrice:totalwithreturn)




//card open 
 const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', cvv: '' });
   

  const handleCardClick = () => {
    setIsCardOpen(!isCardOpen);
    
  };

  const handleCashClick = () => {
    setIsCardOpen(false);
   const payment ={
    payment:"cash"
   }
    
  

  };

  const handleCardInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   const bookinginfo={
    pickup:data && data.origin,
    drop: data && data.destination,
     date:data && data.date,
     returnDate:data && data.returnDate,
     user:userInfo && userInfo,
     car:category&& category,
     price

   }
     
     fetch("https://booking-server-devsobuj910.vercel.app/order",
     {
      method:"POST",
        headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookinginfo)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      if(data.acknowledged){
        toast.success("order successfully done")
        navigate("/booking/confirmation")
      }
     })
    
  };



   
  const [selectedBtn, setSelectedBtn] = useState("cash");

  const handleClick = (btn) => {
    setSelectedBtn(btn);
  };


  return (
    <div>
      
      {/*title*/}
       <div className='my-7'>
          <h1 className='text-xl capitalize font-bold '>Payment</h1>
       <span className='bg-orange-700  mt-3 w-14 h-[2px] block'></span>
    </div>




   <div className="flex justify-start">
      
      <div className=" inline-block w-full">
         


    

 {
  selectedBtn==="cash" ?  <button  type="button" className=" border border-gray-500 font-bold      text-cyan-50 bg-green-950 focus:outline-none text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
  <span className="w-4 h-4 mr-1"><BsCash/></span> 
 CASH
</button>: <button onClick={()=>{
  handleClick("cash")
  handleCashClick()
}}  type="button" className=" border border-gray-500 font-bold   focus:bg-gray-500 text-black focus:outline-none text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
  <span className="w-4 h-4 mr-1"><BsCash/></span> 
 CASH
</button>
 }

     
     

{
  selectedBtn === "card" ?   <button   type="button" className="    font-bold   border  bg-green-950 text-white    focus:outline-none text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
  <span className="w-4 h-4 mr-1"><BsCreditCard2Back/></span> 
  CARD
</button>:<button onClick={()=>{
  handleCardClick()
   handleClick("card")
  }} type="button" className=" border-gray-500  font-bold  border focus:bg-gray-500 text-black focus:outline-none text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
  <span className="w-4 h-4 mr-1"><BsCreditCard2Back/></span> 
  CARD
</button>
}



      
        
        {isCardOpen && (
          <div className="  w-full mt-2 bg-white shadow-lg  p-4">
            <form onSubmit={handleSubmit} className="px-4  py-2 w-full">
              
               <div className='flex justify-center w-full flex-col lg:flex-row '>
        <div className='mb-5  w-full'>
            <input class="w-full  border  border-r-gray-600  py-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name on Card"/>
        </div>
        <div className='w-full mb-5'>
            <input class="w-full  border    py-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder=" 1234-1234-1234"/>
        </div>
 

    </div>
               <div className='flex justify-center w-full flex-col lg:flex-row '>
        <div className='mb-5  w-full'>
            <input class="w-full  border  border-r-gray-600  py-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="MM / YY"/>
        </div>
        <div className='w-full mb-5'>
            <input class="w-full  border    py-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder=" CVC"/>
        </div>
 

    </div>





      <div>
        <h1 className='text-left text-lg font-bold'>Billing Address</h1>
   
    <div>
        
               <div className='flex justify-center w-full flex-col lg:flex-row '>
        <div className='mb-5  w-full'>
            <input class="w-full  border  border-r-gray-600  py-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Address Line"/>
        </div>
        <div className='w-full mb-5'>
            <input class="w-full  border    py-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder=" Postal code"/>
        </div>
 

    </div>
    
               <div className='flex justify-center w-full flex-col lg:flex-row '>
        <div className='mb-5  w-full'>
            <input class="w-full  border  border-r-gray-600  py-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="City"/>
        </div>
        <div className='w-full mb-5'>
            <input class="w-full  border    py-3  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder=" +8801******"/>
        </div>
 

    </div>
    </div>


      </div>



            </form>
          </div>
        )}
      </div>
    </div>

<div className='flex justify-end  items-center my-5'>
 <h2 className='text-xl mr-2 font-bold'>Price: {category && category.price} $ </h2>

  <button onClick={handleSubmit} className='w-32 bg-green-950 hover:bg-green-950 btn'>Place Order</button>
</div>

    </div>
  )
}

export default Payment