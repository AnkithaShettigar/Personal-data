import React from 'react';
const About = () => {
  return (
    <div className="main1" id="about">
      <div className="abtpage">
        <div className="abtleft"></div>
        <div className="abtright">
          <h1 style={{ color: '#105652' }}>About Me</h1>
          <hr className="hr1" />
          <p style={{ color: '#105652' }}>
            I'm a web designer & front-end developer with 0 years of
            professional experience. I'm interested in all kinds of visual
            communication, but my major focus is on designing web, mobile &
            tablet interfaces. I also have skills in other fields like branding,
            icon design or web development.
          </p>
          <p style={{ color: '#105652' }}>
            I enjoy turning complex problems into simple, beautiful and
            intuitive designs. When I'm not pushing pixels, you'll find me
            cooking, gardening or working out in the park
          </p>
          <div className="skills">
            <p className="lang" style={{ color: '#105652' }}>
              Languages/Library/Technology
            </p>
            <hr className="hr2" />
            <div className="icon">
              <div className="icon1"></div>
              <div className="icon2"></div>
              <div className="icon3"></div>
              <div className="icon4"></div>
              <div className="icon5"></div>
              <div className="icon6"></div>
              <div className="icon7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
