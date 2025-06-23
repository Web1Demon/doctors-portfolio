import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '2348060444099';
  const message = 'Hey Dr. Jasmine , I would like to schedule a consultation.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center gap-2"
    >
      <FaWhatsapp size={24} />
      <span className="hidden md:inline">Chat Me Up</span>
    </a>
  );
};

export default WhatsAppButton;
