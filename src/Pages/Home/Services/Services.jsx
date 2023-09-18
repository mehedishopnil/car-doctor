import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])


    return (
        <div className="my-24">
            <div>
                <h2 className="text-xl font-bold text-[#FF3811] text-center mt-24 mb-5">Our Services</h2>
                
                <h1 className="text-5xl font-bold text-center pb-5">Our Service Area</h1>

                <p className="text-center text-gray-500 pb-8">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    services.map(service => <ServiceCard
                    key={service}
                    service = {service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;