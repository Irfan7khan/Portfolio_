import React from 'react'
import homeStyle from './Home.module.css'
const Home = () => {
  const person = {
    name: "IRFAN KHAN",
    profession: "Frontend Developer",
    about: "I am a passionate Frontend Developer. I love building modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and React. My goal is to become a Full Stack Developer and create web applications that make life easier for people."

  }
  return (
    <div className={homeStyle.homeContainer}>
      <div className={homeStyle.homeDiv}>
        <div className={homeStyle.myInfo}>
          <span><strong>Hi</strong>{`  ${"I'm"}`}</span>
          <span>{person.name}</span>
          <span> {person.profession} </span>
          <p> {person.about} </p>
          <div className={homeStyle.homeBtn}>
            <button>Resume</button>
            <button>My Work</button>
          </div>
</div>
      </div>
    </div>
  )
}

export default Home
