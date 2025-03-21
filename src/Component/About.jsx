import React from 'react'
import Profile from "../assets/profile.jpeg"
import { ABOUT_ME } from "../Constants/index"
import { motion } from 'framer-motion'
function About() {
    return (
        <div className='border-b border-b-neutral-800 pb-4'>

            <h1 className='my-20 text-center text-4xl'>About <span className='text-green-300
        '>me</span></h1>
            <div className='flex flex-wrap'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100 }}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className="rounded-xl" src={Profile} alt="change image here" height="500px" width="500px" /></div>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-6 max-w-xl py-6 '>{ABOUT_ME}</p>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}

export default About