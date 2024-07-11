import React from 'react'
import { Carousel } from 'flowbite-react';
import { ChevronRight} from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function HeroCarrousel() {
  return (
    <Carousel 
    pauseOnHover 
    slideInterval={2000} 
    leftControl={<ChevronLeft/>} 
    rightControl={<ChevronRight/>} 
    >
      <Link href="#" className=''>
      <Image src='/assets/images/start/sl2/imgbkslide01.jpg' alt="..." className='w-full' width={712} height={384} />
      </Link>
      <Link href="#" className=''><Image src='/assets/images/start/sl3/img_backslide0-3.jpg' alt="..." className='w-full' width={712} height={384} /></Link>
      <Link href="#" className=''><Image src='/assets/images/start/img-bksl4.jpg' alt="..." className='w-full' width={712} height={384}  /></Link>
      <Link href="#" className=''> <Image src='/assets/images/start/img_backslide0-4.jpg' alt="..." className='w-full' width={712} height={384} /></Link>
    </Carousel>
  );
}
