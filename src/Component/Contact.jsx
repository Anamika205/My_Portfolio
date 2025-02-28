import React from 'react'
import { CONTACT } from "../Constants/index";
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className='border-b border-neutral-900 pb-20  bg-gradient-to-r from-pink-300 via-green-200 to-purple-400 '>
      <h1 className='my-10 pt-10 text-center text-4xl text-neutral-800 font-semibold '>Get in touch</h1>
      <div className='text-center tracking-tighter'>
        <p className='my-4 text-neutral-800'>{CONTACT.address}</p>

        <p className='my-4 text-neutral-600'>{CONTACT.phoneNo}</p>
        <a href="#" className='my-4 underline text-neutral-600'>{CONTACT.email}</a>
      </div>
    </motion.div>
  )
}

export default Contact