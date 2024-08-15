import './saludo.css';
import React from 'react';
import Photo from '../assets/137240378.jpg';

function AboutMe() {
  return (
    <div className="container-center p-5">
      <div className="row mt-5">
        <div className="col-md-6 text-center">
          <img
            src={Photo}
            alt="profile_picture"
            className="rounded-circle img-fluid" 
            style={{ maxWidth: '400px' }} 
          />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1>Hi, I'm <span className="text-primary">Patricio Villarreal<span role="img" aria-label="Saludo" className="saludo-emoji">✋</span></span></h1>
          <h3>Front-End Developer💼</h3>
          <h6>
            I'm a 18 year old Front-end Developer based in Guadalajara Mexico.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
