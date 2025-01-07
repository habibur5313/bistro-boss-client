import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../Shared/SectionTitle';

import side1 from '../../../assets/home/slide1.jpg'
import side2 from '../../../assets/home/slide2.jpg'
import side3 from '../../../assets/home/slide3.jpg'
import side4 from '../../../assets/home/slide4.jpg'
import side5 from '../../../assets/home/slide5.jpg'

const OrderSection = () => {
                    return (
                                       <section>
                                        <SectionTitle heading={'order online'} subHeading={'from 11.00am to 10.00pm'}></SectionTitle>
                                        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
                    <img className='w-full h-[500px]' src={side1} alt="" />
                    <h3 className='text-2xl font-medium -mt-20 text-center text-white uppercase'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
                    <img className='w-full h-[500px]' src={side1} alt="" />
                    <h3 className='text-2xl font-medium -mt-20 text-center text-white uppercase'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
                    <img className='w-full h-[500px]' src={side1} alt="" />
                    <h3 className='text-2xl font-medium -mt-20 text-center text-white uppercase'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
                    <img className='w-full h-[500px]' src={side1} alt="" />
                    <h3 className='text-2xl font-medium -mt-20 text-center text-white uppercase'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
                    <img className='w-full h-[500px]' src={side1} alt="" />
                    <h3 className='text-2xl font-medium -mt-20 text-center text-white uppercase'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
                    <img className='w-full h-[500px]' src={side2} alt="" />
                    <h3 className='text-2xl font-medium -mt-20 text-center text-white uppercase'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
                    <img className='w-full h-[500px]' src={side3} alt="" />
                    <h3 className='text-2xl font-medium -mt-20 text-center text-white uppercase'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
                    <img className='w-full h-[500px]' src={side4}alt="" />
                    <h3 className='text-2xl font-medium -mt-20 text-center text-white uppercase'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
                    <img className='w-full h-[500px]' src={side5} alt="" />
                    
        </SwiperSlide>
      </Swiper>
                                       </section>
                    );
};

export default OrderSection;