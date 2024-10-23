import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import Header from './components/Header'
import Event from './components/Event'
import SideNav from './components/SideNavBar'
import project from './assets/projectFile.json'
import event from './assets/eventFile.json'
import Home from './components/Home'
import Domain from './components/Domain'
import Achievements from './components/Achievements'
import Team from './components/Team'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {

  return (
    <div className='main m-0 p-0 bg-black min-h-[100vh] font-lora'>

      <SideNav />

      <Home></Home>
      <AboutUs></AboutUs>
      <Domain></Domain>

      <div id='projects' className='Project overflow-hidden min-h-[100vh]'>
        <Header title="Our Projects" />
        <div className="content flex flex-wrap justify-center sm:justify-around my-4 mx-auto">
          {
            project.map((p) => (
              <ProjectCard key={p.id} id={p.id} image={p.image} PName={p.PName} PDetails={p.PDetails} />
            ))
          }
        </div>
      </div>

      <div id='events' className="Event min-h-[100vh] text-white overflow-hidden">
        <Header title="Our Events" />
        {
          event.map((e) => (
            <Event key={e.id} EventName={e.name} EventContent={e.content} />
          ))
        }
      </div>

      <Achievements></Achievements>
      <Team></Team>
      <Gallery></Gallery>

      <Footer></Footer>
    </div>
  )
}

export default App
