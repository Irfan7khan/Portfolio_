import { useState } from 'react'
import navStyle from './Navbar.module.css'

const Navbar = ({ onHomeClick, onProjectClick, onSkillsClick, onAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = ()=> setIsOpen(!isOpen)
  return (
    <>
      <div className={navStyle.container}>
        <div className={navStyle.nav}>
          <div className={navStyle.logo}>
            IRFAN KHAN
          </div>
          <div className={navStyle.pages}>
            <ul>
              <li onClick={onHomeClick} >Home</li>
              <li onClick={onProjectClick} >Project</li>
              <li onClick={onSkillsClick} >Skills</li>
              <li onClick={onAboutClick} >About</li>
            </ul>
          </div>
          <strong className={navStyle.toggleBtn} onClick={()=>toggleSidebar()} >
         {isOpen? <i  class="fa-solid fa-xmark"></i>: <i class="fa-solid fa-bars"></i>}
          </strong>
        </div>
      </div>
      <div className={`${navStyle.sideBar} ${isOpen?navStyle.active:""}`}>
        <div className={navStyle.sidePages}>
          <ul>
            <li onClick={onHomeClick} >Home</li>
            <li onClick={onProjectClick} >Project</li>
            <li onClick={onSkillsClick} >Skills</li>
            <li onClick={onAboutClick} >About</li>
          </ul>
        </div>
      </div>
    </>
  )
              // {isOpen ? <i  class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
// ${isOpen ? navStyle.active : ""}
}

export default Navbar

