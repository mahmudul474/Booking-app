import { createBrowserRouter } from "react-router-dom";
import Main from "../Layot/Main";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Bookingpage/Booking";
import Bookinglayot from "../Layot/BookinLayot/Bookinglayot";
import Vehicle from "../Component/Vehicle/Vehicle";
import Passenger from "../Component/Passenger/Passenger";
import Payment from "../Component/Payment/Payment";
import Register from "../Register";
import Login from "../Shared/Login/Login";




const   routers=createBrowserRouter([

    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/booking",
                element:<Bookinglayot></Bookinglayot>,
                children:[{
                    path:"/booking",
                    element:<Booking></Booking>
                }
               ,
               {
                path:"/booking/vehicle",
                element:<Vehicle></Vehicle>
               },
               {
                path:"/booking/passenger",
                element:<Passenger></Passenger>
               },
               {
                path:"/booking/payment",
                element:<Payment></Payment>
               }
            
            ]
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
          


        ]
    }
])


export default routers