import React from 'react'
import Heading from './Heading';
import Card from './Card';
import Image from 'next/image';

const data = [
  { 
    id: 0,
    title: "Solar Solution",
    desc: "This is a HTML, CSS project.",
    img: "/project_1.jpg",
    tags: ["HTML", "CSS"]
  }, 
  { 
    id: 1,
    title: "Static Interactive Resume",
    desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills.",
    img: "/project_2.jpg", 
    tags: ["HTML", "Node", "CSS", "Typescript"]
  },
  { 
    id: 2,
    title: "Dynamic Resume Builder",
    desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills.",
    img: "/project_3.JPG",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

const Projects = () => {
  return (
    <div id='Projects' className='container pb-32'>
      <Heading title='my project' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
