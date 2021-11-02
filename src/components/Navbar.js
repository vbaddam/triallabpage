import React from "react"


const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="name">
            Machine Learning Laboratory @VT
          </div>
          <a href = '#' className = "toggle-button">
            <span className = "bar"></span>
            <span className = "bar"></span>
            <span className = "bar"></span>
            <span className = "bar"></span>
            <spam className = "bar"></spam>
        </a>

          <div className="links-wrapper">
            <ul>
            <li><a href = '/'>Home</a></li>
            <li><a href = '/about'>About</a></li>
            <li><a href = '/publications'>Publications</a></li>
            <li><a href = '/members'>Members</a></li>
            <li><a href = '/about'>Resources</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

// <li><button onClick={() => scrollTo("#about")}>About</button></li>