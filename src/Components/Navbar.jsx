import { useRef, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbMusicOff, TbMusic } from "react-icons/tb";
import ReactPlayer from "react-player";

import "../Styles/navbar.css";
import logo from '../assests/hex-logo2.png'

function Navbar() {
  const navRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  const handleLinkClick = (sectionId) => {
    showNavbar();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <header>
      <img src={logo} alt="Logo" id="hex-logo"/>

      <nav ref={navRef}>
        <a href='#home' onClick={() => handleLinkClick("home")}>
          Home
        </a>
        <a href='#about' onClick={() => handleLinkClick("about")}>
          About
        </a>
        <a href='#myWork' onClick={() => handleLinkClick("myWork")}>
        Projects
        </a>
        <a href='#skills' onClick={() => handleLinkClick("skills")}>
          Skills
        </a>
        <a href='#contact' onClick={() => handleLinkClick("contact")}>
          Contact
        </a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <RiCloseLine />
        </button>
       
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <RxHamburgerMenu />
      </button>
      <button className='play-toggle-btn' onClick={handlePlayToggle}>
  <p>click to {isPlaying ? "pause" : "play"}</p>
  {isPlaying ? <TbMusicOff /> : <TbMusic />}
</button>
      {isPlaying && (
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=2meDyjU3N6c"}
          playing={isPlaying}
          width="0"
          height="0"
        />
      )}
       <button id="nav-resume">
            <a href="https://www.linkedin.com/in/matthewrobinsondev/overlay/1635521927089/single-media-viewer/?profileId=ACoAADzYqEcBcrLGhsFRXDQizVtDB1iFlEg2Vbw" target="_blank" rel="noopener noreferrer" id="resume-btn">Resume</a>
            </button>
    </header>
  );
}

export default Navbar;
