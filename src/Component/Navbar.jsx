import React from 'react'
// import Img from "../assets/img.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
// import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-end justify-end py-6'>
      {/* <div className='flex flex-shrink-0 items-center gap-4 w-1/2 text-neutral-600'>
        <Link to="About" smooth={true} duration={500} className="cursor-pointer">About</Link>
        <Link to="Experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link>
        <Link to="Technology" smooth={true} duration={500} className="cursor-pointer">Technology</Link>
        <Link to="Project" smooth={true} duration={500} className="cursor-pointer">Project</Link>
        <Link to="Contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
      </div> */}

      <div className='m-8 text-neutral-500 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/anamika-sharma-62a954204/'>
          <FaLinkedin />
        </a>
        <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>
          <MdEmail />
        </a>
        <a href='https://github.com/Anamika205'>
          <FaGithub />
        </a>
      </div>


    </nav>
  )
}

export default Navbar