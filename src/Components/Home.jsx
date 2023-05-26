import React, { useEffect } from "react";
import "../Styles/home.css";
import Typed from "typed.js";
import resume from "../assests/Resume.pdf";

function Home() {
  useEffect(() => {
    var typed = new Typed('.typing', {
      strings: ["Web Developer", "Veteran", "Art Connoisseur", "Husband/Father", "Lifelong Learner"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <div className="home">
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text">Hello, my name is Matthew Robinson</div>
            <div className="text-1">
              and I'm a <span className="typing"></span>
            </div>
            <br />
            <button id="resume" onClick={handleClick}>
              Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
