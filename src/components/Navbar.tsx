import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Zaheem Hassan</div>
            <ul className='gap-9 lg:gap-10 hidden md:flex'></ul>
            <li className='menulink list-none'><a href='#hero'>Home</a></li>
            <li className='menulink list-none'><a href='#about'>About</a></li>
            <li className='menulink list-none'><a href='#projects'>Projects</a></li>
            <li className='menulink list-none'><a href='#skills'>Skills</a></li>
            <li className='menulink list-none'><a href='#contact'>Contact</a></li>
            <AiOutlineMenu  className='md:hidden' size={30}/>
        </div>
      
    </div>
  )
}

export default Navbar
