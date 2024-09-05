'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductImageCarrousel({
    productImages=[],
        thumbnail
    }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='col-span-3'>
           {productImages.length <= 0 ?(
                <Image src={thumbnail}
                    alt={""}
                    width={556}
                    height={5556}
                    className='w-full object-cover' />
                ):(
                <>
                <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                
                {productImages.map((image, i) => {
                    return(
                        <SwiperSlide key={i}>
                         <img src={image} alt=''/>
                        </SwiperSlide>
                    );
                  })}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                
                  {productImages.map((image, i)=>{
                    return(
                        <SwiperSlide key={i}>
                        <img src={image} alt=''/>
                        </SwiperSlide>
                     );
                  })}
                   </Swiper>
                </>
              )}
    </div>
   
  );
}
