import React from 'react'
import Project from '../../project/project'
import { Element } from 'react-scroll'
import "./Projectcontainer.css"
const ProjectContainer = () => {

      const Projects = [
        {
          img:require("./img1.png"),
          title:"Dress and Jwellery Ecommerce Website :",
          description:"1.Created a new ecommerce platform from the ground up,including designing and developing all aspects of the website.Hooks, context API, and higher-order components are examples of React concepts that are used and implemented featuressuch as product listings, shopping cart",
          skills:"HTML,CSS,Bootstrap,Javascript,React.js,Redux",
          link:"https://github.com/Ashwinkumar-coder/EcommerceWebsite"
        },
        {
          img:require("./img2.png"),
          title:"Quiz App :",
          description:" A short test of knowledge in codings,typically around 10 questions in length, with question formats often including multiple choice",
          skills:"HTML,CSS,Javascript,React.js",
          link:"https://github.com/Ashwinkumar-coder/Quiz-App"
        },
        {
          img:require("./img3.png"),
          title:"Weather App :",
          description:"Weather forecasting begins with an analysis of the current state of the atmosphere, wind,humidity, and land surface.",
          skills:"HTML,CSS,Javascript,React.js",
          link:"https://github.com/Ashwinkumar-coder/Weather-App"
        },
        {
          img:require("./img9.jpg"),
          title:"ATM Transaction Using Python :",
          description:"Atm transaction is a process to deposit money and withdraw money from atm using vs code.Developed functionalities for balance inquiry, cash withdrawal and amount transfers.",
          skills:"python and TKinter",
          link:"https://github.com/Ashwinkumar-coder/ATM-Transaction"
        },
        {
          img:require("./img7.png"),
          title:"Netflix Clone :",
          description:"Designed and developed a Netflix clone web application using HTML, CSS, JavaScript and React.js.Netflix clone works seamlessly across various devices and screen size.Netflix clone includes user authentication and implemented secure login /logout functionality",
          skills:"HTML,CSS,Bootstrap,Javascript,React.js",
          link:"https://github.com/Ashwinkumar-coder/Netflix---Clone"
        },
        {
          img:require("./img8.png"),
          title:"Movie Search Application :",
          description:"Developed a responsive Movie Search Application using React.js, HTML, CSS, and JavaScript.Designed and implemented a mobile-responsive layout for the Movie Search Application, ensuring optimal user experience across various devices.Utilized Redux for efficient state management, ensuring a seamless flow of data and enhanced application scalability.",
          skills:"HTML,CSS,Bootstrap,Javascript",
          link:"https://github.com/Ashwinkumar-coder/Movie-Search-Application"
        },
      ]
    
  return (
    
      <Element  className="projectContainer" id="projects">
        <h1>PROJECTS</h1>
        <p>Here are some projects which i done </p>
        <div className="projectContainer__projects">
        {
          Projects.map((project,index)=>{
            return (
              <Project 
              key={index} 
              img={project.img} 
              title={project.title}
              description={project.description}
              skills={project.skills}
              link={project.link} />
            )
          })
        }
        </div>
      </Element>
   
  )
}

export default ProjectContainer