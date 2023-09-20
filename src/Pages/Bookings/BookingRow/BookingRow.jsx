
import { Link } from "react-router-dom";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const {_id, customerName, email, service, price, date, img, status } = booking;

  
  return (
    <tbody className=" bg-[#fff9f8ae]">
      <tr className="border-[#ffd2c9]">
        <th>
          <label>
            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm font-semibold border-[#ffbbad] bg-white text-[#ff5b3a] hover:bg-[#ff3811] hover:text-white">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{service}</div>
              <div className="text-sm opacity-50">{customerName}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>

        <td>
          <p className="text-xs font-semibold ">${price}</p>
        </td>
        <td>
          <p className="text-xs font-semibold">{date}</p>
        </td>
        <td>
          {
            status === 'confirm'  ? <span className="font-bold text-success"> Confirmed </span>:
            <Link>
            <button onClick={() => handleBookingConfirm(_id)} className=" h-8 w-28 rounded text-white bg-[#ff3811] hover:bg-[#e13e1d]">
              Please Confirm
            </button>
          </Link>
          }
        </td>
      </tr>
    </tbody>
  );
};

export default BookingRow;
