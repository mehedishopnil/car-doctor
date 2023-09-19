import { Link } from "react-router-dom";
import signUpImage from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const [successful, setServices] = useState(true)
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const totalValue = { name, email, password };
    console.log(totalValue);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if(user){
          alert('Congratulation! You are a Member of CarDoctor');
          setServices(true);
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className=" py-16 bg-base-200">
        <div className="pb-12">
          <h1 className="text-5xl text-center font-bold">Sign Up now!</h1>
        </div>

        <div className="grid grid-cols-2 space-x-5">
          <div className=" flex justify-end ">
            <img className="w-1/2" src={signUpImage} alt="" />
          </div>

          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>

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
                    type="text"
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
                    value="Sign Up"
                  />
                </div>
              </form>

              <div>
                <p className="my-4 text-center">
                  Already have an account?{" "}
                  <Link className="text-[#ff3811] font-bold" to="/logIn">
                    Log In
                  </Link>
                </p>
              </div>
              { successful && (
                <p className="text-center text-sm text-green-600">Successfully Sign Up</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
