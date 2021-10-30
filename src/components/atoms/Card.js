import React from "react"

const Card = ({ heading, imgurl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
        "url(" +
        imgurl +
        ")",
      }}
    >
      <div className="content">
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <span>
          <h3>{heading}</h3>
        </span>
      </div>
    </div>
  )
}

export default Card
