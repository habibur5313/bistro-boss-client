import SectionTitle from "../../Shared/SectionTitle";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '@smastrom/react-rating/style.css'

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <div className="mt-10 pt-14">
        <SectionTitle
          heading={"testimonials"}
          subHeading={"What your client say"}
        ></SectionTitle>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center justify-center space-y-5">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />

                <p className="max-w-lg text-center mx-auto">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  architecto soluta quos. Non totam assumenda nobis aliquid
                  laborum! Odio neque repudiandae sit tenetur omnis saepe maxime
                  eum nesciunt facilis illo. Nihil, eligendi hic voluptate
                  provident dolor consequuntur culpa tempore voluptatibus
                  blanditiis ad quis obcaecati ratione a iste ipsa quae aut!
                </p>
                <p className="text-2xl font-medium text-yellow-500">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
