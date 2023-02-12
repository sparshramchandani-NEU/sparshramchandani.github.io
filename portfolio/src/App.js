import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Project from './components/Projects/Project';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
  <div className="bg-gray-800 h-full">
    <Router>
    <Navbar/>
    <Dashboard/>
    <Education/>
    <Experience/>
    <Project/>
    <ContactMe/>
    <Skills/>

    {/* <Navbar/>
    <Routes><Route exact path="/" component={Dashboard} /></Routes>
      <Routes><Route path="/education" component={Education} /></Routes>
      <Routes><Route path="/experience" component={Experience} /></Routes>
      <Routes><Route path="/projects" component={Project} /></Routes>
      <Routes><Route path="/skills" component={Skills} /></Routes>
      <Routes><Route path="/contact" component={ContactMe} /></Routes> */}
</Router>
  </div>
    
  );
}

export default App;
