import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <div className="flex justify-center items-center my-4">
          <FaEnvelope className="mr-2 text-xl" />
          <a href={`mailto:${CONTACT.email}`} className=" hover:underline">
            {CONTACT.email || "Email not available"}
          </a>
        </div>
        <div className="flex justify-center items-center my-4">
          <FaPhone className="mr-2 text-xl" />
          <p>{CONTACT.phoneNo || "Phone number not available"}</p>
        </div>
        <a href="mailto:contact@example.com" className=" hover:underline"></a>
      </motion.div>
    </div>
  );
}

export default Contact;
