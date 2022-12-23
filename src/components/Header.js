import React from "react";
import profile from '../'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAtom } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
      return(
            <div className="header">
                  <img src="./pfp.jpg" className="header-img"/>
                  <div className="header-info">
                     <h1 className="name">Amit Jimiwal</h1>
                     <p className="skills">Frontend Developer</p>
                  </div>
                  <div className="header-links">
                     <button className="githubbtn"><a href="https://github.com/amitjimiwal" target="_blank"><i class="fa-brands fa-github"></i> Github</a></button>
                     <button className="linkedinbtn"><a href="https://www.linkedin.com/in/amit-jimiwal-37576721a/" target="_blank"><i class="fa-brands fa-linkedin"></i> Linkedin</a></button>
                  </div>
            </div>
      )
}