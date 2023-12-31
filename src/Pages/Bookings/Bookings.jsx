import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow/BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const url = `https://car-doctor-server-khaki-nine.vercel.app/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url,{
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setBookings(data);
        }
        else{
          //logOut and then navigate
          navigate('/');
        }
        
      });
  }, [url, navigate]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://car-doctor-server-khaki-nine.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`https://car-doctor-server-khaki-nine.vercel.app/bookings/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})

    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.modifiedCount > 0){
        // Update state
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        updated.stats = 'confirm'
        const newBookings = [updated, ...remaining];
        setBookings(newBookings);
      }
    })
  };

  return (
    <div className="container mx-auto my-20">
      <div className=" flex justify-center">
        <h1 className="text-center w-1/3 mb-8 py-2 rounded-3xl text-2xl text-white font-semibold bg-[#ff6543]">
          Your Total Bookings: {bookings.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-sm rounded bg-[#feeeea] text-[#ff3811]">
              <th></th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Condition</th>
            </tr>
          </thead>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingConfirm = {handleBookingConfirm}
            ></BookingRow>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
