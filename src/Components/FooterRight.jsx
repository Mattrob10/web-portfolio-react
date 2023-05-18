import React from "react";
import "../Styles/footer-right.css"

const currentDate = new Date();
const year = currentDate.getFullYear();

function FooterRight() {
  return (
    <div className="footer">
      <div className="footer-border">---------------</div>    
      <div className="social-link">
      <a href="https://github.com/Mattrob10"target="_blank" rel="noreferrer">
              <i className="fab fa-github" id="github-icon"></i>
            </a>
      </div>
      <div className="social-link">
      <a href="https://twitter.com/MayoCodes"target="_blank" rel="noreferrer">
      <i className="fa-brands fa-twitter" id="twitter-icon"></i>
            </a>
      </div>
      <div className="social-link">
      <a href="https://www.linkedin.com/in/matthewrobinson-web-developer/"target="_blank" rel="noreferrer">
      <i className="fa-brands fa-linkedin-in" id="linkedin-icon"></i>
            </a>
      </div>
     
      <h3 id="credit-title">Created by 
         Matthew Robinson &copy; {year}</h3>
       </div>
  )
}

export default FooterRight;