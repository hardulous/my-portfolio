import React from "react";
import S from "./Portfolio.module.css";
import { PORTFOLIO_DATA } from "../DATA/PortfolioData.js";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`${S.videoWrapper}`}>
        {PORTFOLIO_DATA.map(({ id, title, desc, github, demo, npm, video }) => {
          return (
            <div key={id} className={`${S.videoContainer}`}>
              <div className={`${S.projectDesc}`}>
                <h2>{title}</h2>
                <h3>{desc}</h3>
                <div className={`${S.portfolioItemCTA}`}>
                  {npm && (
                    <a href={npm} className="btn" target="_blank">
                      Npm
                    </a>
                  )}
                  {github && (
                    <a href={github} className="btn" target="_blank">
                      GitHub
                    </a>
                  )}
                  {demo && (
                    <a href={demo} className="btn btn-primary" target="_blank">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              <video src={video} controls title={title} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
