import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow/BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  console.log(bookings);

  return (
    <div className="container mx-auto my-20">
      <div>
        <h1 className="text-center pb-8 text-2xl font-semibold">
          Your Total Bookings: {bookings.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-sm text-[#ff3811]">
              <th>CheckBox</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Condition</th>
            </tr>
          </thead>
          {bookings.map((booking) => (
            <BookingRow key={booking._id} booking={booking}></BookingRow>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
