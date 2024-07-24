import React , {useState} from 'react'
import "./project.css"

const Project = ({img,title,description,skills,link}) => {
    const [show,setShow] = useState(false)
  return (
    <a href={link}>
        <div 
        onMouseEnter={()=>setShow(true)} 
         onMouseLeave={()=>setShow(false)}
        className="project"
        >
            
               { show ? (
                    <div className='project__content'>
                        <h4>{title}</h4>
                        <h5>{skills}</h5>
                        <p>{description}</p>
                       
                    </div>

                ):(
                    <img src={img} alt=""/>
                )
            }
            
        </div>
    </a>
    
  )
}

export default Project