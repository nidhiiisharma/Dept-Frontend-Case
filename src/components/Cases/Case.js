import React from "react";
import "./Case.css";

const Cases = ({ casesInfo }) => {
  return (
    <section className="case-container">
      <div className="case-card-container">
      {casesInfo.map((workCase) => (
          <article key={workCase.id} className="case-card">
            <div className="case-image">
              <img src={workCase.image}></img>
            </div>
            <h4 className="case-name">{workCase.name}</h4>
            <h2 className="case-title">{workCase.title}</h2>
            <a href="#" className="case-link">
              <button className="case-link-btn">View Case</button>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Cases;