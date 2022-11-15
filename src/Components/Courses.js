import React from "react";

const Courses = () =>{
    return(
        <div className='Courses-container'>
          <div className='Courses-text'>
            <div>
              <h2>“You are never too old to set another goal or to dream a new dream.”</h2>
              <h3>— Malala Yousafzai</h3>
            </div>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </h4>
          </div>
          
          <div className='Courses-video'>
            <video src="/courses.mp4" muted loop autoPlay />
          </div>
      </div>
    )
}

export default Courses