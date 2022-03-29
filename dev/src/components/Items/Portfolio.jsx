import React from "react";

function Portfolio({ portfolio: { id, name, category, image, slug, server } }) {
  let dom = "https://aincrivelfabrica.com.br/projects/"
  if ( server !== undefined || server === "" ) {
    dom = server
  }
  return (
    <a target="_black" href={`${dom}/0${id}_${slug}`}>
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
          <span className="term">{category.join(",  ")}</span>
        </div>
        <span className="plus-icon">+</span>
        <div className="thumb">
          <img src={image} alt={name} />
          <div className="mask"></div>
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
