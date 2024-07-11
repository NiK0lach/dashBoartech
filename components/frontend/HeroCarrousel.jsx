
import React from 'react'
import { Carousel } from 'flowbite-react';
import { ChevronRight} from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';



export default  function HeroCarrousel({banners}) {
       return (
          <div className="h-60 sm:h-full md:h-full xl:h-90 2xl:h-96">
            <Carousel 
            pauseOnHover 
            slideInterval={2000} 
            leftControl={<ChevronLeft/>} 
            rightControl={<ChevronRight/>} 
            className='rounded-md overflow-hidden'
            >
              {
                banners.map((banner, i) => {
                  return(
                    <Link key={i} href={banner.link} className=''>
                    <Image 
                    className='w-full object-cover' 
                    width={712} 
                    height={600}
                    src={banner.imageUrl} 
                    alt={banner.title}  />
                  </Link>
                  )
                })
              }

            </Carousel>
        </div>
      );
    }
