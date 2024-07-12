'use client';
import { BaggageClaimIcon, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export default function CategoryCarousel( { products } ) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
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
                <div key={i} href="#" alt="" className='rounded-lg mr-3 bg-slate-200 border dark:bg-slate-800 overflow-hidden'>
                <Link href={`/products/${product.slug}`}>
                  <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={80} 
                  height={80} 
                  className='w-full rounded-lg' />
                </Link>
                
               
               
                <Link href={`/products/${product.slug}`}>
                <h2 className='text-center dark:text-slate-100 mt-2 text-slate-900 font-light text-md'>
                  {product.title}</h2>
                </Link> 
                   <div className="flex items-center justify-between gap-2 mt-3 py-2 px-2 pb-3">
                      <p className='dark:text-blue-400 text-blue-600 text-md font-medium'>$ {product.productPrice}
                        <small className="text-xs"> col</small></p>
                      <button className='flex items-center space-x-2 bg-lime-500
                       dark:bg-lime-800 text-slate-50
                        text-sm rounded-lg p-1 hover:bg-lime-800 duration-300 transition-all dark:hover:bg-lime-400 '>
                      <BaggageClaimIcon className=''/>
                      <span>Add</span>
                      </button>
                    </div>              
                </div>
            );
            })
        }
        
    </Carousel>
  );
}

