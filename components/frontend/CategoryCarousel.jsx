'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export default function CategoryCarousel({products}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      
  return (
    <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
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

        { products.map((product, i) => {
            return (
                <Link key={i} href="#" alt="" className='rounded-lg mr-3'>
                <Image
                src={product.imageUrl}
                alt={product.title}
                width={80} 
                height={80} 
                className='w-full' />
                <h2 className='text-center dark:text-slate-200 mt-2 text-slate-800'>{product.title}</h2>
                </Link>
            );
            })
        }
        
    </Carousel>
  );
}

