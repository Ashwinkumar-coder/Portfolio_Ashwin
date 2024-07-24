import React from 'react'
import { Element } from 'react-scroll'
import { LinearProgress } from '@mui/material'
import "./Skillcontainer.css"
const Skillcontainer = () => {
  return (
    <Element className='skillContainer' id="skills">
        <div className='skillContainer__image'>
        <img src={require("./skill.jpg")} alt="" />
        </div>
        <div className="skillContainer__Text" >
        <h1>SKILLSET</h1>
        <div className="skillContainer__skillset">
            <h5>React</h5>
            <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={60} />
            </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>Javascript</h5>
            <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={75} />
            </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>Python</h5>
            <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={70} />
            </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>HTML</h5>
            <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={90} />
            </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>CSS</h5>
            <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={80} />
            </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>MySql</h5>
            <div className="skillContainer__slider skillContainer__slider6">
            <LinearProgress variant="determinate" value={75} />
            </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>Bootstrap</h5>
            <div className="skillContainer__slider skillContainer__slider7">
            <LinearProgress variant="determinate" value={80} />
            </div>
        </div>
        </div>
    </Element>
  )
}

export default Skillcontainer