'use client';
import { InfoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export default function TrainingCarousel({training}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      //const sliders =[{},{},{},{},{},{},{}];
  return (
    <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item px-4"
        >

        { training.map((training, i) => {
            return (
                <div key={i}  className='rounded-lg mr-3 pb-3 text-slate-600 dark:text-slate-100
                 bg-slate-50 dark:bg-slate-800 overflow-hidden'>
                    <Link href="#" alt={training.title}>
                            <Image
                            src={training.imageUrl}
                            alt={training.title}
                            width={566} 
                            height={566} 
                            className='w-full rounded-sm' />
                    </Link>
                        <h2 className='text-center dark:text-slate-200 text-slate-800
                         py-2 text-2xl font-medium bg-slate-200 dark:bg-slate-900'>{training.title}</h2>
                        <p className='px-4 py-2 line-clamp-3 mb-3  text-slate-700 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa  adipisicing elit. Soluta ipsa  </p>
                    <div className='flex justify-between items-center px-4'>
                      <Link href="#" className='bg-lime-900 hover:bg-lime-800 duration-300 transition-all
                        text-slate-50 rounded-md px-4 py-2'>
                        Leer mas
                    </Link>
                    <InfoIcon className='h-4 w-4 ml-1'/>
                        <Link className='dark:bg-slate-800 bg-slate-200 rounded-full  px-1 py-1' href="#" alt="">Habla con un consultor</Link>
                    </div>
                </div>

            );
            })
        }
        
    </Carousel>
  );
}

