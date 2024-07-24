import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"
const Topcontent = () => {
  return (
    <div className="topcontent"> 
    <div className="topcontent__container"> 
    <h1>ASHWIN KUMAR B</h1>
    <h3> Fullstack Developer</h3>
    <a href="AshwinKumar__B_(Resume).pdf"  download="resume.pdf">
        <button className='topcontent__download'>Download CV</button>
    </a>
    <Link to="projects" smooth={true} duration={500}>
        <button className='topcontent__work'>My Work</button>
        </Link>
        
    </div>

    </div>
  )
}

export default Topcontent