import React, { useEffect } from "react";
import "../Styles/home.css";
import Typed from "typed.js";



function Home() {
  useEffect(() => {
    var typed = new Typed('.typing', {
      strings: ["Web Developer", "Veteran", "Art Connoisseur", "Lifelong Learner"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      showCursor: false
    });

    // Stop the typing animation when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text">Hello, my name is Matthew Robinson</div>
            <div className="text-1">and I'm a <span className="typing"></span>
            </div>
            <br></br>
            <button id="resume">
            <a href="https://www.linkedin.com/in/matthewrobinsondev/overlay/1635521927089/single-media-viewer/?profileId=ACoAADzYqEcBcrLGhsFRXDQizVtDB1iFlEg2Vbw" target="_blank" rel="noopener noreferrer" id="resume-btn">Resume</a>
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;