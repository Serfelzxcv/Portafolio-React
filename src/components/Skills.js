import React, { useState, useEffect } from 'react';
import '../App.css';
import react_icon from '../assets/img/react-icon.svg';
import Angular_icon from '../assets/img/angular.svg';
import flutter_icon from '../assets/img/flutter-icnon.svg';
import node_icon from '../assets/img/Node.js_logo.svg';
import sql_icon from '../assets/img/sql-icon.svg';
import mongodb_icon from '../assets/img/mongodb-icon.svg';
import docker_icon from '../assets/img/docker-icon.svg';
import git_icon from '../assets/img/git-icon.svg';

export const Skills = () => {
  const [active, setActive] = useState(2);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const items = [
    {title:"React", img: react_icon, text:"React is a JavaScript library for building user interfaces."},
    {title:"Angular", img: Angular_icon, text:"Angular is a JavaScript framework for building robust and dynamic web applications"},
    {title:"Flutter", img: flutter_icon, text:"Flutter is a framework for building native cross-platform apps with a single codebase. "},
    {title:"Node", img: node_icon, text:"Node.js is a runtime for executing JavaScript on the server side."},
    {title:"SQL", img: sql_icon, text:"SQL is a language for managing and manipulating relational databases."},
    {title:"MongoDB", img: mongodb_icon, text:"MongoDB is a NoSQL database that uses JSON documents to store data in collections."},
    {title:"Docker", img: docker_icon, text:"It's a platform for creating, deploying, and running applications in isolated, portable containers."},
    {title:"Git-GitHub", img: git_icon, text:"Git is a version control system for tracking changes in source code during software development."},
  ];

  const loadShow = () => {
    return items.map((item, index) => {
      let className = "item";
      let style = {};

      if (!isMobile) {
        if (index === active) {
          style = {
            transform: `none`,
            zIndex: 1,
            filter: 'none',
            opacity: 1
          };
        } else if (index > active ) {
          const stt = index - active;
          style = {
            transform: `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`,
            zIndex: -stt,
            filter: 'blur(5px)',
            opacity: stt > 2 ? 0 : 0.6
          };
        } else if (index < active) {
          const stt = active - index;
          style = {
            transform: `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`,
            zIndex: -stt,
            filter: 'blur(5px)',
            opacity: stt > 2 ? 0 : 0.6
          };
        }
      }

      if (isMobile) {
        if (index === active) {
          style = {
            transform: `none`,
            zIndex: 1,
            filter: 'none',
            opacity: 1
          }
        } 
      }

      return (
        <div className={className} style={style} key={index}>
          <h1>{item.title}</h1>
          <img src={item.img} alt={`Slide ${index + 1}`} className="item-image" />
          <div id='items-text'>
            <p>{item.text}</p>
          </div>
        </div>
      );
    });
  };

  const next = () => {
    setActive((prevActive) => (prevActive + 1) % items.length);
  };

  const prev = () => {
    setActive((prevActive) => (prevActive - 1 + items.length) % items.length);
  };
  

 

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are the skills I've acquired throughout my professional development:</p>
              <div className="slider">
                {loadShow()}
                
              </div>
              <button id="prev" onClick={prev}>{'<'}</button>
              <button id="next" onClick={next}>{'>'}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
