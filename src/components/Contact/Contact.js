import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import { LinkedIn,Facebook,Instagram } from '@mui/icons-material'
import "./contact.css"
const Contact = () => {
  return (
    <Element className="contact" id="contact">
        <h1>CONTACT</h1>
        <div className='contact__container'>
           <p>
                Mobile No : <span>+91 9361003309</span>
            </p>
            <p>
                Email : <span>ashwinbaskaran2002@gmail.com</span>
            </p>
            <p>
                Github Username : <span>@Ashwinkumar-coder</span>
            </p>
            <div className='contact__icons'>
                <a href="https://www.linkedin.com/in/aswin-kumar-baskaraselvan/">
                    <IconButton>
                        <LinkedIn />
                        
                    </IconButton>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100041795236071">
                    <IconButton>
                        <Facebook />
                        
                    </IconButton>
                </a>
                <a href="https://instagram.com/___.ashwin_001.___?igshid=YTQwZjQ0NmI0OA==">
                    <IconButton>
                        <Instagram />
                        
                    </IconButton>
                </a>
            </div>
        </div>
        </Element>
  )
}

export default Contact