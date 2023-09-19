import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }


  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about' href="">About</Link>
      </li>
      <li>
        <Link to='/services' href="">Services</Link>
      </li>
      <li>
        <Link to='' href="">Blog</Link>
      </li>
      <li>
        <Link to='' href="">Contact</Link>
      </li>
    </>
  );
  return (
    <div className=" navbar bg-base-100  mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className=" normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end gap-5">
        {
          user?.email? 
          <>
          <Link to='/bookings'><button  className="font-bold text-[#ff3811]">My Bookings</button ></Link>
          <Link to=''><button onClick={handleLogOut} className="font-bold text-[#ff3811]">LogOut</button></Link>
          </>:
          <Link to='/logIn'><button  className="font-bold text-[#ff3811]">LogIn</button ></Link>
        }

        <Link ><button className="btn btn-outline w- border-[#ff3811] text-[#ff3811]">Appointment</button></Link>
      </div>
    </div>
  );
};

export default Header;
