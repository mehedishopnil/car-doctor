import React from 'react';
import { Link } from 'react-router-dom';

const BookingRow = ({booking}) => {
    const {customerName,email,service,price,date,img} = booking;
    return (
        
            <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
              <div className="avatar">
                    <div className="rounded w-24 h-24">
                      <img
                        src={img}
                        alt="Avatar Tailwind CSS Component"
                      />
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
                <Link><button className=' h-8 w-16 rounded text-white bg-[#ff3811] hover:bg-[#e13e1d]'>Pending</button></Link>
            </td>

            </tr>
            
          </tbody>
        
    );
};

export default BookingRow;