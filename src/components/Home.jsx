import React from 'react';
import About from './About';
import Contact from './Contact';
import People from './People';
import Portfolio from './Portfolio';
import Resume from './Resume';
import { MdCopyright } from 'react-icons/md';
import Wave from 'react-wavify';

const Home = () => {
  return (
    <div className="main" id="home">
      <Wave
        fill="#09BCAB"
        paused={false}
        options={{
          height: 80,
          amplitude: 40,
          speed: 0.2,
          points: 4,
        }}
        className="wave"
      />
      <div className="container1" id="home">
        <div className="first">
          <span className="intro">Hi,I am Ankitha</span>
          <span className="intro1">A Full-Stack Developer</span>
          <span className="intro2">Get ready to turn ideas into reality</span>
          <div className="btns">
            <button className="btn1">
              <a href="#contact">Hire Me</a>
            </button>
            <a href="Resume.pdf" download="Resume.pdf">
              <button className="btn2">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="second">
          <div className="img1"></div>
        </div>
      </div>

      <About />
      <Portfolio />
      <Resume />
      <People />
      <Contact />

      <div className="bottompp">
        <p style={{ textAlign: 'center', paddingTop: '20px' }}>
          <span style={{ fontSize: '14px' }}>
            <MdCopyright />
          </span>
          2022 Ankitha. All rights reserved.
        </p>

        <span className="bottomcontent"></span>
      </div>
    </div>
  );
};
export default Home;
