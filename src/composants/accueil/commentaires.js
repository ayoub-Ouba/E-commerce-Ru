import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../../assets/commentaires.css"

// import required modules

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
export default function Commentaires(){
    return(<>
<Swiper
        slidesPerView={3}
        spaceBetween={200}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="block w-content rounded-lg bg-black p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black card">
            <div className="flex items-end">
            <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTgzODM0NDU&ixlib=rb-1.2.1&q=80"/>
            <h5
                className="mb-2 ml-5 text-xl font-medium leading-tight  text-neutral-800 dark:text-neutral-50">
                Card title
            </h5>
            </div>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p>
            
        </div>

        </SwiperSlide>
        <SwiperSlide>
         <div className="block w-content rounded-lg bg-black p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black card">
            <div className="flex items-end">
            <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTgzODM0NDU&ixlib=rb-1.2.1&q=80"/>
            <h5
                className="mb-2 ml-5 text-xl font-medium leading-tight  text-neutral-800 dark:text-neutral-50">
                Card title
            </h5>
            </div>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p>
            
        </div>

        </SwiperSlide>
        <SwiperSlide>
         <div className="block w-content rounded-lg bg-black p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black card">
            <div className="flex items-end">
            <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTgzODM0NDU&ixlib=rb-1.2.1&q=80"/>
            <h5
                className="mb-2 ml-5 text-xl font-medium leading-tight  text-neutral-800 dark:text-neutral-50">
                Card title
            </h5>
            </div>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p>
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="block w-content rounded-lg bg-black p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black card">
            <div className="flex items-end">
            <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTgzODM0NDU&ixlib=rb-1.2.1&q=80"/>
            <h5
                className="mb-2 ml-5 text-xl font-medium leading-tight  text-neutral-800 dark:text-neutral-50">
                Card title
            </h5>
            </div>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p>
            
        </div>

        </SwiperSlide>
        <SwiperSlide>
         <div className="block w-content rounded-lg bg-black p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black card">
            <div className="flex items-end">
            <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTgzODM0NDU&ixlib=rb-1.2.1&q=80"/>
            <h5
                className="mb-2 ml-5 text-xl font-medium leading-tight  text-neutral-800 dark:text-neutral-50">
                Card title
            </h5>
            </div>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p>
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="block w-content rounded-lg bg-black p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black card">
            <div className="flex items-end">
            <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTgzODM0NDU&ixlib=rb-1.2.1&q=80"/>
            <h5
                className="mb-2 ml-5 text-xl font-medium leading-tight  text-neutral-800 dark:text-neutral-50">
                Card title
            </h5>
            </div>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p>
            
        </div>

        </SwiperSlide>
        
      </Swiper>
</>)}