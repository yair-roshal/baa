import React, { Component } from "react";
// import logo from "../images/logo RE 999.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              {/* <img src={logo} alt="Real Estate" /> */}
              {/* <img src="../images/logoText.png" alt="Real Estate" /> */}
              {/* <img src="../images/logo RE 999.svg" alt="Real Estate22" /> */}
             <div class="divLogo">
             <button class="logo">Binyan Adey Ad</button>
              {/* <p>Binyan Adey Ad</p>
              <p>בניין עדי עד</p> */}
             </div> 
            </Link>

            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          <ul
            className={this.state.isOpen ? "navLinks showNav" : "navLinks"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            {/* <li>
              <Link to="/houses">Houses</Link>
            </li> */}

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/programs">Programs</Link>
            </li>

            <li>
              <Link to="/contacts">Contacts</Link>
            </li>

          
          </ul>
        </div>
      </nav>
    );
  }
}
