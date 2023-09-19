import React from "react";
import { Link } from "react-router-dom";

const BookingRow = ({ booking }) => {
  const { customerName, email, service, price, date, img } = booking;
  return (
    <tbody className=" bg-[#fff9f8ae]">
      <tr className="border-[#ffd2c9]">
        <th>
          <label>
            <button className="btn btn-circle border-[#ffbbad] bg-white text-[#ff5b3a] hover:bg-[#ff3811] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
          <Link>
            <button className=" h-8 w-16 rounded text-white bg-[#ff3811] hover:bg-[#e13e1d]">
              Pending
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default BookingRow;
