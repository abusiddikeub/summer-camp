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
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div><img src={img4} alt="" /></div>
      <div><img src={img5} alt="" /></div>
    </Carousel>
  
  );
};

export default Banner;
