import React from 'react';
import '../Styles/myWorks.css';
import cma from '../assests/cma.png'
import bloggin from '../assests/bloggin.png'
import meme from '../assests/meme.png'
import css from '../assests/css.png'
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
          <h2>Meme Generator</h2>
          <p>Generate a meme using a random selection of the top 100 images fetched from an API</p>
          <img src={meme} alt=''/>
          <div className="card-btns">
          <button className='github-link'>
            <a href='https://github.com/Mattrob10/MEME-REACT' target='blank' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a href='https://shimmering-croissant-3c9077.netlify.app/' target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
        <div className="card card1">
          <h2>CSS Gradient Code Generator</h2>
          <p>Allow user to specify colors, angles, and other parameters, to create visually appealing gradient backgrounds or text effects for their website design. </p>
          <img src={css} alt=''/>
          <div className="card-btns">
          <button className='github-link'>
            <a href='https://github.com/Mattrob10/assignment/tree/main/exercises/LVL%203/random-color-component' target='blank' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a href='https://snazzy-cassata-35a03d.netlify.app/' target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
