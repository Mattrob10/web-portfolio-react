import React from 'react';
import '../Styles/myWorks.css';
import cma from '../assests/cma.png'
import bloggin from '../assests/bloggin.png'
import chatGPT from '../assests/chatGPT.png'


const MyWork = () => {
  return (
    <div className="my-work-container">
      <h2 id='title'>Projects</h2>
      <div className="my-work">
        <div className="card card1">
          <h2>CMA</h2>
          <p>React App that allows a user to search Works Of Arts with an API provided by The Institute of Chicago</p>
          <img src={cma} alt=''/>
          <div className="card-btns">
          <button className='github-link'>
            <a href='https://github.com/Mattrob10/CMA-REACT' target='blank' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a href='https://magical-malabi-9c3700.netlify.app/' target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
        <div className="card card1">
          <h2>Bloggin</h2>
          <p>MERN Stack Blog</p>
          <img src={bloggin} alt=''/>
          <div className="card-btns">
          <button className='github-link'>
            <a href='https://github.com/Mattrob10/blog-app-1' target='blank' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a href='https://react-blog-1v1y.onrender.com' target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
        <div className="card card1">
          <h2>MattGPT</h2>
          <p>ChatGPT Clone using Openai</p>
          <img src={chatGPT} alt=''/>
          <div className="card-btns">
          <button className='github-link'>
            <a href='https://github.com/Mattrob10/MatthewGPT' target='blank' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a href='https://matthewgpt.onrender.com/' target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
