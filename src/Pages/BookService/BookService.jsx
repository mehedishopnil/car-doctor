import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
    const [successful, setSuccessful] = useState(false);
    const services = useLoaderData();
  const { title, price,img, service_id } = services;
  const {user} = useContext(AuthContext);


    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const dueAmount = form.dueAmount.value;
        const bookings = {
            customerName: name,
            email,
            img,
            phone,
            dueAmount,
            date,
            service: title,
            service_id: service_id,
            price: price
        }

        console.log(bookings);

        fetch('http://localhost:5000/bookings',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
                setSuccessful(true);
                form.reset();
            }
        })
    }

    return (
        <div className="my-8">
      <div className="text-center py-5">
        <h1 className="text-2xl font-semibold">Title: {title}</h1>
        <h1 className="font-semibold">Price: <span className="text-[#ff3811]">${price}</span></h1>
        <p>Service id: {service_id}</p>
      </div>

      {/* Check Out Part */}
      <form onSubmit={handleBookService}>
        <div className="flex justify-center">
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Book Services</h1>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.name}
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
                name="email"
                defaultValue={user?.email}
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
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  name="dueAmount"
                  defaultValue={"$" + price}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input 
                className="btn btn-primary text-white bg-[#ff3811] border-none" 
                type="submit" 
                value="Order Confirm" 
                />

              </div>
              { successful && (
                <p className="text-center text-sm mt-3 text-green-600">Successfully Order Confirmed</p>
              )
              }
            </div>
          </div>
        </div>
      </div>
      </form>


    </div>
    );
};

export default BookService;