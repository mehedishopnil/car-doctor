import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";


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
          path: 'checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;