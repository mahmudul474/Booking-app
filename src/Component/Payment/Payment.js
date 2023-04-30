import React, { useState } from 'react'
import {BsCash, BsCreditCard2Back}from "react-icons/bs" 

  function Payment() {



    //card open 
 const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', cvv: '' });
   

  const handleCardClick = () => {
    setIsCardOpen(!isCardOpen);
    
  };

  const handleCashClick = () => {
    setIsCardOpen(false);
   const cash ={
    payment:"cash"
   }
    localStorage.setItem(
      "payment",
      JSON.stringify({ cash })
    );

  };

  const handleCardInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cardDetails);
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
         


     
      <button onClick={handleCashClick} type="button" className=" border border-gray-500 font-bold   focus:bg-gray-500 text-black focus:outline-none text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
  <span className="w-4 h-4 mr-1"><BsCash/></span> 
 CASH
</button>


      <button onClick={handleCardClick} type="button" className=" border-gray-500  font-bold  border focus:bg-gray-500 text-black focus:outline-none text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
  <span className="w-4 h-4 mr-1"><BsCreditCard2Back/></span> 
  CARD
</button>
        
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



    </div>
  )
}

export default Payment