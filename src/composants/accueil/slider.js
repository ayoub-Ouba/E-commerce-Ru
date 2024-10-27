import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../assets/slider.css"

// import required modules
import { Autoplay } from "swiper";
export default function Slider(){
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;}
    return(<>
            <div className="sliders">
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay: 4000,disableOnInteraction: false}} pagination={{ clickable: true}}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper">
                <SwiperSlide className="slide"><img src="images/img1.jpg" className="img_slider" /></SwiperSlide>
                <SwiperSlide className="slide"><img src="images/img1.jpg"  className="img_slider"/></SwiperSlide>
                <SwiperSlide className="slide"><img src="images/img1.jpg"  className="img_slider"/></SwiperSlide>
                <SwiperSlide className="slide"><img src="images/img1.jpg"  className="img_slider"/></SwiperSlide>
            </Swiper>
      </div>
           
        </>
    )
}