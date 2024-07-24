import React from 'react'
import Header from './components/Header/header'
import TopContainer from './components/Header/TopContainer/TopContainer'
import Skillcontainer from './components/Header/SkillContainer/Skillcontainer'
//import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
//import Projects from './pages/projects'
import Contact from './components/Contact/Contact';
//import ProjectDisplay from './pages/projectDisplay';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import Project from './project/project';
import Experience from './components/Education/Education';

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <Experience />
      <Skillcontainer />
      {/* <Router>
        <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
      </Router> */}
     
      <ProjectContainer />
      <Contact />
    </div>
  )
}

export default App