import React, { useRef } from 'react'

const ProjectCard = (Project) => {
  const detailsRef = useRef();

  const showDetails = () => {
    detailsRef.current.style.display = "flex";
  }
  const hideDetails = () => {
    detailsRef.current.style.display = "none";
  }
  return (
    <div
      className="card my-16 sm:my-[100px] mx-auto sm:mx-10 w-[80vw] sm:w-[410px] bg-[rgb(3,2,14)] hover:bg-[rgb(0,0,0)] border border-transparent rounded-3xl hover:border-[rgb(71,255,47)] overflow-hidden  text-white"
      onMouseEnter={showDetails} onMouseLeave={hideDetails} 
    >

      <div className="pic"><img src={Project.image} alt="event"></img></div>

      <div className="Pname text-center my-5 p-2 text-3xl text-cyan-400">{Project.PName}</div>

      <div className="Pdetail text-center m-5 p-5 overflow-auto max-h-[250px] hidden" ref={detailsRef}>
        {Project.PDetails}
      </div>
    </div>
  )
}

export default ProjectCard
