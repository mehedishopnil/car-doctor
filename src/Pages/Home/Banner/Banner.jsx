import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel  h-[650px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex items-center rounded-xl h-full flex pl-24  bottom-0  bg-gradient-to-r from-[#1515157c] to-[#ffffff00]">
            <div className="text-white space-y-7 w-1/2 ">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="color-white ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary text-white border-[#ff3811] bg-[#ff3811] mr-5 hover:bg-transparent hover:border hover:border-red-600">Discover More</button>
                <button className="btn btn-outline  border-[#ff3811] text-white hover:bg-[#ff3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-5 bg-[#ff3811] text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-[#ff3811] text-white">
              ❯
            </a>
          </div>
        </div>


        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute flex rounded-xl items-center h-full flex pl-24  bottom-0  bg-gradient-to-r from-[#1515157c] to-[#ffffff00]">
            <div className="text-white space-y-7 w-1/2 ">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="color-white ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <button className="btn btn-primary text-white border-[#ff3811] bg-[#ff3811] mr-5 hover:bg-transparent hover:border hover:border-red-600">Discover More</button>
                <button className="btn btn-outline  border-[#ff3811] text-white hover:bg-[#ff3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />

          <div className="absolute flex items-center rounded-xl h-full flex pl-24  bottom-0  bg-gradient-to-r from-[#1515157c] to-[#ffffff00]">
            <div className="text-white space-y-7 w-1/2 ">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="color-white ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <button className="btn btn-primary text-white border-[#ff3811] bg-[#ff3811] mr-5 hover:bg-transparent hover:border hover:border-red-600">Discover More</button>
                <button className="btn btn-outline  border-[#ff3811] text-white hover:bg-[#ff3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />

          <div className="absolute flex items-center rounded-xl h-full flex pl-24  bottom-0  bg-gradient-to-r from-[#1515157c] to-[#ffffff00]">
            <div className="text-white space-y-7 w-1/2 ">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="color-white ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <button className="btn btn-primary text-white border-[#ff3811] bg-[#ff3811] mr-5 hover:bg-transparent hover:border hover:border-red-600">Discover More</button>
                <button className="btn btn-outline  border-[#ff3811] text-white hover:bg-[#ff3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl" />

          <div className="absolute flex items-center rounded-xl h-full flex pl-24  bottom-0  bg-gradient-to-r from-[#1515157c] to-[#ffffff00]">
            <div className="text-white space-y-7 w-1/2 ">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="color-white ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <button className="btn btn-primary text-white border-[#ff3811] bg-[#ff3811] mr-5 hover:bg-transparent hover:border hover:border-red-600">Discover More</button>
                <button className="btn btn-outline  border-[#ff3811] text-white hover:bg-[#ff3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl" />
          <div className="absolute flex items-center rounded-xl h-full flex pl-24  bottom-0  bg-gradient-to-r from-[#1515157c] to-[#ffffff00]">
            <div className="text-white space-y-7 w-1/2 ">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="color-white ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <button className="btn btn-primary text-white border-[#ff3811] bg-[#ff3811] mr-5 hover:bg-transparent hover:border hover:border-red-600">Discover More</button>
                <button className="btn btn-outline  border-[#ff3811] text-white hover:bg-[#ff3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
