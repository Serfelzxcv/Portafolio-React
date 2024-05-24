import React, { useState } from 'react';
import '../App.css';

export const Skills = () => {
  const [active, setActive] = useState(2);
 
  const items = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic iure enim, rem accusamus odit nemo aspernatur consequuntur vero in veniam fugiat, consectetur officiis voluptatum quidem libero. Sed, dignissimos exercitationem, animi a repellendus tempora recusandae qui consequatur, itaque deleniti nobis.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe facilis cumque! Voluptate, cumque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe facilis cumque! Voluptate, cumque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe facilis cumque! Voluptate, cumque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis? Voluptas, nostrum facere. Distinctio saepe facilis cumque! Voluptate, cumque.",
    
  ];

  const loadShow = () => {
    return items.map((item, index) => {
      let className = "item";
      let style = {};

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

      return (
        <div className={className} style={style} key={index}>
          <h1>Slide {index + 1}</h1>
          {item}
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
                <button id="prev" onClick={prev}>{'<'}</button>
                <button id="next" onClick={next}>{'>'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
