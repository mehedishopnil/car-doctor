import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRout from "./PrivateRout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'services',
          element: <Services></Services>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'book/:id',
          element: <PrivateRout><BookService></BookService></PrivateRout>,
          loader: ({params})=> fetch(`https://car-doctor-server-khaki-nine.vercel.app/services/${params.id}`)

        },
        {
          path: 'bookings',
          element: <PrivateRout><Bookings></Bookings></PrivateRout>
        }
      ]
    },
  ]);

  export default router;