import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../../assets/banner/banner1.webp";
import img2 from "../../../../assets/banner/banner1.webp";
import img3 from "../../../../assets/banner/banner1.webp";
import img4 from "../../../../assets/banner/banner1.webp";
import img5 from "../../../../assets/banner/banner1.webp";
import 'aos/dist/aos.css';

const Banner = () => {
  return (
               <Carousel className=" text-center ">
      <div >
        <img src={img2} />
    <div className="absolute bottom-0 left-0 top-72 mb-10 ">
    <h3 className="text-2xl font-bold">Yoga is a practice that connects the body, breath, and mind. It uses physical postures, <br /> breathing exercises, and meditation to improve overall health. Yoga was developed as a spiritual practice thousands of years ago.</h3>
    <button className="btn btn-outline btn-secondary mb-4">Buy Now</button>
    </div>
      </div>
      <div>
        <img src={img1} />
        <div className="absolute bottom-0 left-0 top-72 mb-10 ">
    <h3 className="text-2xl font-bold">Yoga is a practice that connects the body, breath, and mind. It uses physical postures, <br /> breathing exercises, and meditation to improve overall health. Yoga was developed as a spiritual practice thousands of years ago.</h3>
    <button className="btn btn-outline btn-secondary mb-4">Buy Now</button>
    </div>
      </div>
      <div>
        <img src={img3} />
        <div className="absolute bottom-0 left-0 top-72 mb-10 ">
    <h3 className="text-2xl font-bold">Yoga is a practice that connects the body, breath, and mind. It uses physical postures, <br /> breathing exercises, and meditation to improve overall health. Yoga was developed as a spiritual practice thousands of years ago.</h3>
    <button className="btn btn-outline btn-secondary mb-4">Buy Now</button>
    </div>
      </div>
      <div><img src={img4} alt="" />
      <div className="absolute bottom-0 left-0 top-72 mb-10 ">
    <h3 className="text-2xl font-bold">Yoga is a practice that connects the body, breath, and mind. It uses physical postures, <br /> breathing exercises, and meditation to improve overall health. Yoga was developed as a spiritual practice thousands of years ago.</h3>
    <button className="btn btn-outline btn-secondary mb-4">Buy Now</button>
    </div>
      
      </div>
      <div><img src={img5} alt="" /></div>
    </Carousel>
  
  );
};

export default Banner;
