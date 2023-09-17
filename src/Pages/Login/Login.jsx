import loginImage from '../../assets/images/login/login.svg'

const Login = () => {
  return (
    <div>
      <div className=" py-16 bg-base-200">
        <div className='pb-12'>
        <h1 className="text-5xl text-center font-bold">Login now!</h1>
        </div>
        
        <div className="grid grid-cols-2 space-x-5">
          <div className=" flex justify-end">
            <img src={loginImage} alt="" />
          </div>

          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
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
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
