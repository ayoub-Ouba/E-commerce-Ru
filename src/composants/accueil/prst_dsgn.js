import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/content_accueil.css";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";
export default function Prst_dsgn() {
    return ( <div class="container mb-20 bg-white shadow-2xl py-10 mx-auto max-w-[1200px] max-[1290px]:w-[90%] max-lg:py-2">
    <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <div>
                    <Swiper  effect={"cube"} grabCursor={true} cubeEffect={{shadow: true,slideShadows: true,shadowOffset: 20,shadowScale: 0.94,}}
                        modules={[EffectCube, Pagination]} className="swiper3d" >
                    <SwiperSlide>
                    <img src="/images/c1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="/images/c2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="/images/c3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="/images/c4.png" />
                    </SwiperSlide>
                </Swiper>
        </div>
        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

            <a href="#" class="block mt-4 text-2xl font-semibold md:text-3xl text-black ml-5">
            Live In Your World With Your Different Style
            </a>

            <p class="mt-3 text-sm text-black  md:text-sm ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                laudantium quia tempore delect
            </p>
            <div class="flex  items-center mt-6 ml-5">
                    <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
                    <div class="mx-4">
                        <h1 class="text-sm text-gray-700 ">Reda serti</h1>
                        <p class="text-sm text-gray-500 ">Lead Designe</p>
                    </div>
                    <img class="object-cover object-center w-10 h-10 rounded-full ml-20" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
                    <div class="mx-4">
                        <h1 class="text-sm text-gray-700 ">Marwane seketit</h1>
                        <p class="text-sm text-gray-500 ">Lead Designe</p>
                    </div>
            </div>
            
        </div>
    </div>
</div>

    )
}