import React, { Component } from 'react';
import "./About.css";
import profilePic from "../assets/profile_pic_name.jpeg";
  
export default class About extends Component{
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src = {profile_pic_name}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Jenifer Nguyen</div>
          <div className="brief_description">
            Student at George Mason University || Statistics
          </div>
        </div>
      </div>
    </div>
    )
    }
  }
