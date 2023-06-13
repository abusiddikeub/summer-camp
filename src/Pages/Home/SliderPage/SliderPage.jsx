import React from "react";
import slider from '../../../assets/gallery/gallery.webp';
import slider1 from '../../../assets/gallery/gallery1.webp';
import slider2 from '../../../assets/gallery/gallery2.webp';
import slider3 from '../../../assets/gallery/gallery3.webp';



const SliderPage = () => {
  
  return (
          <div className="grid  md:grid-cols-4 gap-5">
                    <div className="card w-96 bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
                 <img src={slider}alt="Shoes" className="rounded-xl hover:bg-purple-500 bg-opacity-30"  data-aos="fade-down" data-aos-duration="3000" />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title">METAL BASKET POT</h2>
                 <p className="text-2xl"> $ 328.00  </p>
                 <div className="card-actions">
                   <button className="btn btn-primary">Buy Now</button>
                 </div>
               </div>
             </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
                 <img src={slider1}alt="Shoes"  data-aos="fade-down" className="rounded-xl" />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title">BATHING ACCESSORIES</h2>
                 <p className="text-2xl"> $ 369.00</p>
                 <div className="card-actions">
                   <button className="btn btn-primary">Buy Now</button>
                 </div>
               </div>
             </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
                 <img src={slider2}alt="Shoes" className="rounded-xl"  data-aos="fade-down"/>
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title">YOGA BATH HERBAL</h2>
                 <p className="text-2xl">$ 739.00</p>
                 <div className="card-actions">
                   <button className="btn btn-primary">Buy Now</button>
                 </div>
               </div>
             </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
                 <img src={slider3}alt="Shoes" className="rounded-xl" data-aos="fade-down" />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title">YOGA VASE DECOR</h2>
                 <p className="text-2xl"> $ 529.00</p>
                 <div className="card-actions">
                   <button className="btn btn-primary">Buy Now</button>
                 </div>
               </div>
             </div>
    
          </div>
  );
};

export default SliderPage;
