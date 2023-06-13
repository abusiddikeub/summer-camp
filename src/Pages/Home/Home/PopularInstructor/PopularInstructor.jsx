import React from "react";
import Title from "../../../Shared/Title/Title";
import UseClassHooks from "../../../../Component/Hooks/UseClassHooks";
//  import InstructorShow from "../InstructorShow/InstructorShow";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const PopularInstructor = () => {
  const [classes] = UseClassHooks();
  console.log(classes);
  return (
    <section className="my-20">
      <Title title={"Popular Instructor Section"}></Title>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {classes.map((instructor) => (
          <SwiperSlide key={instructor._id}>
            <div className="m-24">
              <h2 className="text-2xl text-orange-400 text-center mb-2">
           Instructor-Name :  {instructor.instructorName}
              </h2>
              <img
                src={instructor.imgURL}
                alt=""
                className="h-[200px] w-[200px] rounded-2xl mx-auto mb-2"
              />
              <p>{instructor.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularInstructor;
