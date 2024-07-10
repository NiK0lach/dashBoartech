"use client";
import { useState } from "react";
import {  Modal } from "flowbite-react";
import { HelpCircle, HeadphonesIcon, Truck, CornerDownLeft, MessageSquare} from 'lucide-react'
import Link from "next/link";


export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
   
    <button onClick={() => setOpenModal(true)} className="flex items-center
    space-x-1 text-slate-800 dark:text-slate-100 text-xs">
      <HelpCircle/>
      <span>Ayuda</span>
      </button>
      <Modal show={openModal}  onClose={() => setOpenModal(false)} >
        <Modal.Header>Necesitas Algun tipo de asistencia?</Modal.Header>
        <Modal.Body>
          
            <div className="grid grid-cols-2 gap-6">
              <Link href="tel:3144433267" className="flex items-center space-x-2
               text-slate-800 dark:text-slate-100 ">

                <div className="flex items-center justify-center rounded-full
                 w-10 h-10  bg-lime-100">
                  <HeadphonesIcon className="w-6 h-6 text-lime-800"/></div>
                <span>Llamanos : +1 314 4433 267</span>
              </Link>

              <Link href="/truck" className="flex items-center space-x-2
               text-slate-800 dark:text-slate-100 ">

                <div className="flex items-center justify-center rounded-full
                 w-10 h-10  bg-lime-100">
                  <Truck className="w-6 h-6 text-lime-800"/></div>
                <span>Rastrea tu orden</span>
              </Link>

              <Link href="#" className="flex items-center space-x-2
               text-slate-800 dark:text-slate-100 ">

                <div className="flex items-center justify-center rounded-full
                 w-10 h-10  bg-lime-100">
                  <CornerDownLeft className="w-6 h-6 text-lime-800"/></div>
                <span>Devoluciones y reembolsos</span>
              </Link>

              <Link href="#" className="flex items-center space-x-2
               text-slate-800 dark:text-slate-100 ">

                <div className="flex items-center justify-center rounded-full
                 w-10 h-10  bg-lime-100">
                  <MessageSquare className="w-6 h-6 text-lime-800"/></div>
                <span>Chat</span>
              </Link>
            </div>
            
         
        </Modal.Body>
       </Modal>
   
    </>
  );
}


