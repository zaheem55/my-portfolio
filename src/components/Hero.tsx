import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import profile from "../../publish/zaheem_porfile.jpeg"

const Hero = () => {
  return (
    <div> 
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]' >
        
        <div className='hidden lg:block'>
        <Image src={profile} alt='' height={600} width={500}/>
          
        </div>
        <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p  data-aos="flip-left">I'am</p>
            <p  data-aos="flip-left">Zaheem</p>
            <p  data-aos="flip-left">Hassan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
