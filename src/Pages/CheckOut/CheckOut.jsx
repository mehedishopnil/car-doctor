import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const services = useLoaderData();
  const { title, price, service_id } = services;
  return (
    <div>
      <div className="text-center py-8">
        <h1 className="text-2xl font-semibold">Title: {title}</h1>
        <h1 className="font-semibold">Price: <span className="text-[#ff3811]">${price}</span></h1>
        <p>Service id: {service_id}</p>
      </div>

      {/* Check Out Part */}
      <div className="flex justify-center">
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Check Out</h1>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
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
                placeholder="Your email address"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                placeholder="Your Phone Number"
                name="phone"
                className="input input-bordered"
              />

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Message"
                  name="message"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input 
                className="btn btn-primary text-white bg-[#ff3811] border-none" 
                type="submit" 
                value="Check Out" 
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
