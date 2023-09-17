import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
            <img src={parts} className="absolute right-5 top-1/2 border-8 border-white w-1/2 rounded-lg shadow-2xl" />
          </div>
          <div className="lg:w-1/2 pr-28 space-y-4  ">
            <h3 className="text-xl text-[#FF3811] font-bold">About Us</h3>
            <h3 className="text-3xl text-[#151515] font-bold">We are qualified & of experience in this field</h3>
            <p className="py-6 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /><br />

            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn btn-primary border-none text-white bg-[#FF3811]">Get More info </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
