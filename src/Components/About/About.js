import React from 'react'
import S from "./About.module.css"
import {FaAward} from "react-icons/fa"
import {FaRegBuilding} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"
import img from "../../assets/about-pic2.jpg"
const About = () => {
  return (
    
    <section id="about">

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={`container ${S.aboutContainer}`}>
        <div className={`${S.aboutMe}`}>
          <div className={`${S.aboutMeImg}`}>
            <img src={img} alt="aman.jpeg" />
          </div>
        </div>
        <div className={`${S.aboutContent}`}>
          <div className={`${S.aboutCards}`}>

            <article className={`${S.aboutCard}`}>
              <FaAward className={`${S.aboutIcon}`}/>
              <h5>Experience</h5>
              <small>2+ Years Working Experience</small>
            </article>
            <article className={`${S.aboutCard}`}>
              <FaRegBuilding className={`${S.aboutIcon}`}/>
              <h5>Industry</h5>
              <small>Have experience of real world projects</small>
            </article>
            <article className={`${S.aboutCard}`}>
              <VscFolderLibrary className={`${S.aboutIcon}`}/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

          </div>

          <p>Highly skilled and motivated JavaScript Developer with 2+ years of experience in designing and developing enterprise-level applications. Seeking a challenging position in a company to leverage my expertise in JavaScript, React, Next.js, TypeScript and various frameworks to contribute to the company's success.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>

  )
}

export default About