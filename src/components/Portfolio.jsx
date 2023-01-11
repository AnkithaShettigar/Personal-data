import React from 'react';

const Portfolio = () => {
  return (
    <div className="main1" id="portfolio">
      <div className="line3">
        <h1 style={{ color: '#105652', textAlign: 'center' }}>My Porfolio</h1>
        <hr className="hr3" />
      </div>
      <div className="portpage">
        <a href="https://ankithashettigar.github.io/project1/">
          <div className="prj1"></div>
        </a>
        <a href="https://ankithashettigar.github.io/Project2/">
          <div className="prj2"></div>
        </a>
        <a href="https://ankithashettigar.github.io/Project3/">
          <div className="prj3"></div>
        </a>
        <a href="https://ankithashettigar.github.io/JS-ClockUI/">
          <div className="prj4"></div>
        </a>
        <a href="https://ankithashettigar.github.io/TodoApp-JS/">
          <div className="prj5"></div>
        </a>
        <a href="https://react-new-project.netlify.app/">
          <div className="prj6"></div>
        </a>
        <a href="https://mern-full-react.netlify.app/">
          <div className="prj8"></div>
        </a>
        <a href="https://ecommerce-mobile-ishop.netlify.app/">
          <div className="prj9"></div>
        </a>
        <a href="https://placement-assign-app.netlify.app/">
          <div className="prj10"></div>
        </a>
      </div>
    </div>
  );
};
export default Portfolio;
