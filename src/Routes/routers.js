import { createBrowserRouter } from "react-router-dom";
import Main from "../Layot/Main";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Bookingpage/Booking";
import Bookinglayot from "../Layot/BookinLayot/Bookinglayot";
import Vehicle from "../Component/Vehicle/Vehicle";
import Passenger from "../Component/Passenger/Passenger";
import Payment from "../Component/Payment/Payment";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register";
import DashBoard from "../Pages/DashBoard/DashBoard";
import DashbordLayot from "../Pages/DashBoard/DashbordLayot/DashbordLayot";
import AddCar from "../Pages/DashBoard/Car/AddCar/AddCar";
import Confirmation from "../Shared/Confirmations/Confirmation";
import Allcars from "../Pages/DashBoard/Car/AllCars/Allcars";
import Allorders from "../Pages/DashBoard/Orders/Allorders";
import Contact from "../Pages/Contact/Contact";
import DayTour from "../Pages/Day-Tour/DayTour";
import ChaufferVehicles from "../Pages/ChaufferVehicles/ChaufferVehicles";
import DettailsVihicles from "../Pages/ChaufferVehicles/DettailsVehicles/DettailsVihicles";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/booking",
        element: <Bookinglayot></Bookinglayot>,
        children: [
          {
            path: "/booking",
            element: <Booking></Booking>,
          },
          {
            path: "/booking/vehicle",
            element: <Vehicle></Vehicle>,
          },

          {
            path: "/booking/passenger",
            element: <Passenger></Passenger>,
          },
          {
            path: "/booking/payment",
            element: <Payment></Payment>,
          },
          {
            path: "/booking/confirmation",
            element: <Confirmation></Confirmation>,
          },
        ],
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        children: [
          {
            path: "/dashboard",
            element: <DashbordLayot></DashbordLayot>,
          },
          {
            path: "/dashboard/addCar",
            element: <AddCar></AddCar>,
          },
          {
            path: "/dashboard/allcars",
            element: <Allcars></Allcars>,
          },
          {
            path: "/dashboard/orders",
            element: <Allorders></Allorders>,
          },
        ],
      },
      {
        path: "/Chauffervehicles",
        element: <ChaufferVehicles></ChaufferVehicles>,
      },
      {
        path:'/Chauffervehicles/:id',
         loader:({params})=>fetch(`http://localhost:5000/car/${params.id}`),
        element:<DettailsVihicles></DettailsVihicles>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/daytour",
        element: <DayTour></DayTour>,
      },
    ],
  },
]);

export default routers;
