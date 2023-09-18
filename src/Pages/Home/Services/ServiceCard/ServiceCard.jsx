import { FaArrowCircleRight } from "react-icons/fa";
import './ServiceCard.css'
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
  const { _id, service_id, title, img, price } = service;
  return (
    <div className="">
      <div className=" card-content-body ">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className=" card-info ">
          <h2 className="card-title text-2xl">{title}</h2>
          <p className=" font-bold text-[#FF3811]">Price: ${price}</p>

          <div className=" card-icon">
            
            <Link className="btn-text-icon " to={`/book/${_id}`}>
              <button className="book-now-btn flex gap-1  ">
              <p className="text-sm ">Book Now</p>
              <p className=" mt-1"><FaArrowCircleRight /></p>
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
