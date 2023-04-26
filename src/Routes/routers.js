import { createBrowserRouter } from "react-router-dom";
import Main from "../Layot/Main";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Bookingpage/Booking";
import Bookinglayot from "../Layot/BookinLayot/Bookinglayot";

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
                }]
            }


        ]
    }
])


export default routers