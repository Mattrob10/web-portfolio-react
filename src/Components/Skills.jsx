import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitSquare,} from 'react-icons/fa';
import{DiMongodb} from 'react-icons/di'
import {SiPostman, SiExpress, SiVite, SiJson, SiNodemon, SiJquery}from 'react-icons/si'
import "../Styles/skills.css"

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 id='title'>Skills</h2>
      <div className='skills-border'></div>
      <div className="skills-list">
        <div className="skill-item" id='html5'>
        <FaHtml5/>
        <p>HTML5</p>
        </div>
        <div className="skill-item" id='css3'>
        <FaCss3Alt/>
          <p>CSS3</p>
        </div>
        <div className="skill-item" id='javaScript'>
        <FaJsSquare/>
          <p>JavaScript</p>
        </div>
        <div className="skill-item" id='express'>
          <SiExpress/>
          <p>Express.js</p>
        </div>
        <div className="skill-item" id='json'>
          <SiJson/>
          <p>JSON</p>
        </div>
        <div className="skill-item" id='nodemon'>
       <SiNodemon/>
          <p>Nodemon</p>
        </div>
        <div className="skill-item" id='git'>
         <FaGitSquare />
          <p>Git</p>
        </div>
        <div className="skill-item" id='postman'>
          <SiPostman/>
          <p>Postman</p>
        </div>
        <div className="skill-item" id='react'>
        <FaReact />
          <p>React.js</p>
        </div>
        <div className="skill-item" id='vite'>
          <SiVite/>
          <p>Vite</p>
        </div>
        <div className="skill-item" id='mongo'>
        <DiMongodb />
          <p>MongoDB</p>
        </div>
        <div className="skill-item" id='jquery'>
        <SiJquery />
          <p>JQuery</p>
        </div>

      </div>
      <div className='skills-border'></div>
    </div>
  );
};

export default Skills;
