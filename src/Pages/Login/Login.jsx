import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Share/SocialLogin/SocialLogin";

const Login = () => {
  const [successful, setSuccessful] = useState(false);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        
        console.log(user);
        navigate(from, { replace: true });

        if (user) {
          setSuccessful(true);
          alert("Successfully Logged In ");
          

         
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className=" py-16 bg-base-200">
        <div className="pb-12">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
        </div>

        <div className="grid grid-cols-2 space-x-5">
          <div className=" flex justify-end ">
            <img className="w-1/2" src={loginImage} alt="" />
          </div>

          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary border-none bg-[#ff3811] text-white"
                    type="submit"
                    value="login"
                  />
                </div>
              </form>

              <div>
                <p className="my-4 text-center">
                  New to Car Doctors?{" "}
                  <Link className="text-[#ff3811] font-bold" to="/signUp">
                    Sign Up
                  </Link>
                </p>
              </div>
              {successful && (
                <p className="text-center text-sm text-green-600">
                  Successfully logged In
                </p>
              )}

              
              <div className="flex justify-center">
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
