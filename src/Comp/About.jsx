import React from 'react'

const About = () => {
  return (
    <>
      <h1 className='titlen'>About me</h1>
      <p className='info'>I'm Sourav , I have a strong foundation in a variety of programming languages, including Python, HTML, CSS, JavaScript, SQL, and PHP. With my expertise in these languages, I am able to create, develop, and maintain dynamic web applications with ease. I am comfortable
        with front-end and back-end development and am able to create visually appealing and interactive websites.</p>
      <hr/>
      <div className="aboutx">
        <p>Name: Sourav Joshi</p>
        <p>EMail : <a href="mailto: souravjoshi2410@gmail.com">souravjoshi2410@gmail.com</a></p>
        <p>Location: Thane,India</p>
        <button className='btnresume' target='_blank' href="https://drive.google.com/file/d/1wqdrhBOp6v9WacQfw4BLp8j1S3Y8lQNM/view?usp=sharing">Download Resume</button>
      </div>
    </>
  )
}

export default About
