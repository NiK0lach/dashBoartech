
import React from 'react'
import { Carousel } from 'flowbite-react';
import { ChevronRight} from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function HeroCarrousel() {
  return (
    <div className="h-60 sm:h-full md:h-full xl:h-90 2xl:h-96">
    <Carousel 
    pauseOnHover 
    slideInterval={2000} 
    leftControl={<ChevronLeft/>} 
    rightControl={<ChevronRight/>} 
    className='rounded-md overflow-hidden'
    >
      <Link href="#" className=''>
       <Image src='/assets/images/start/sl2/imgbkslide01.jpg' alt="..." className='w-full object-cover' width={712} height={600} />
      </Link>
      <Link href="#" className=''><Image src='/assets/images/start/sl3/img_backslide0-3.jpg' alt="..." className='w-full object-cover' width={712} height={600} /></Link>
      <Link href="#" className=''><Image src='/assets/images/start/img-bksl4.jpg' alt="..." className='w-full object-cover' width={712} height={600}  /></Link>
      <Link href="#" className=''> <Image src='/assets/images/start/img_backslide0-4.jpg' alt="..." className='w-full object-cover' width={500} height={600} /></Link>
    </Carousel>
    </div>
  );
}
