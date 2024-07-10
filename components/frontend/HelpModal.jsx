"use client";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { HelpCircle } from 'lucide-react'

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full">
      <button onClick={() => setOpenModal(true)}>Toggle modal</button>
      <Modal show={openModal} size="sm" onClose={() => setOpenModal(false)} popup>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            
          </div>
        </Modal.Body>
        
      </Modal>
    </div>
  );
}


