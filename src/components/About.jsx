import React from 'react'

export default function About() {
    return (
        <section className="section_about">
            <h2 className="about">About</h2>
            <p className="about__text">
            As a FullStack Developer, 
            I am dedicated to building efficient, scalable, and user-friendly web applications. 
            With a strong background in Java Spring Boot and front-end web technologies, 
            as well as a passion for learning and staying up-to-date with the latest industry trends, 
            I am confident in my ability to deliver exceptional results for your project.
            </p>
       
            <h2 className='skill'>Skills</h2>
            <ul className="skill__text">
                
                <li>Frontend Development:HTML, CSS, JavaScript (ES6), React (in progress) </li>
                <li>Server Development: Java Spring Boot, Node.js and npm</li>
                <li>Databases: MySql, MSSql, MongoDB, Redis</li>
                <li>HTTP: RESTful API Development</li> 
                <li>Deployment: Docker, Nginx</li>
                <li>Source control: Git</li>
                
            </ul>
      </section>
    )
}