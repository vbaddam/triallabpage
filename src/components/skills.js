import React from "react"
import Fade from "react-reveal/Fade"

import "../styles/Header.scss"
import "../styles/include-media.scss"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <hr className = 'hr'/>
          <Fade top>
          <h1>Latest News</h1>
          </Fade>
          <li>December 8 2021 - Jiaying is presenting our paper at ICONIP 2021: Multistage Hybrid Attentive Networks for Knowledge-Driven Stock Movement Prediction</li>
          <br/>
          <li>November 7 2021 - Chenhan is presenting our paper at EMNLP 2021: Unsupervised Relation Extraction: A Variational Autoencoder Approach.</li>
          <br/>
          <li>November 1 2021 - Jiaying is presenting our paper at CIKM 2021: <a href="https://arxiv.org/pdf/2011.07126.pdf">Zero-shot Relation Classification from Side Information.</a></li>
        </div>
      </div>
    </div>
  )
}

export default Skills
