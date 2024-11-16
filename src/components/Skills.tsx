import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-20 items-center'>
            <div data-aos="flip-left">
                <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
                <p className='text-gray-500 pt-2'>
                    I have a solid function in wed development specazing in Html Css,and Javascript. My experience extends to using frameworks like React and next.js to create dymaic and user-friendly applications l'm also proficiend in tailwind css for effication styline and design with a passion for learing.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="flip-left">Typescript</h2>
                        <h2 data-aos="flip-left">React.js</h2>
                        <h2 data-aos="flip-left">next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="flip-left">Tailwind</h2>
                        <h2 data-aos="flip-left">Css</h2>
                        <h2 data-aos="flip-left">node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
