import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import MyWork from "./Components/MyWork";
import Skills from "./Components/Skills";
import ContactMe from "./Components/Contact";
import FooterLeft from "./Components/FooterLeft";
import FooterRight from "./Components/FooterRight";
import { useState } from "react";


function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false);
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="myWork">
        <MyWork />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
      <div id="footer">
        <FooterLeft />
        <FooterRight />
      </div>
      <button className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}>
  <i className="fa-solid fa-arrow-up"></i>
  <span className="scrollText">Scroll To Top</span>
</button>
    </div>
  );
}

export default App;