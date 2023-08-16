import React from 'react'

const About = () => {
  return (
    <div className='mb-20'>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>About Me</h1>
        <p className='mx-auto leading-relaxed text-base mb-4'>
            My Name is Aditya Sarwade.
        </p>
        <p className='mx-auto leading-relaxed text-base mb-4'>
            I'm a student of Dayananda Sagar University.
            I am currently pursuring my B.Tech in  (Computer Science Engineering).
            I am in my final year of education at the time of writing.
        </p>
        <p className='mx-auto leading-relaxed text-base mb-4'>
            I take keen interest in web development and try to build functional and user-friendly web applications,
            while trying to learn new things in the domain of web development.
        </p>
        <p className='mx-auto leading-relaxed text-base mb-4'>
            I also love listening to music and travelling.
            I also enjoy driving, especially on scenic routes.
        </p>
        <p className='mx-auto leading-relaxed text-base mb-4'>
            Wish you a happy day ahead {String.fromCodePoint('0x1f603')}
        </p>
    </div>
  )
}

export default About