import React from "react";
import { Row, Col, Input, CardPanel } from "react-materialize";
// import "./Car.d.css";
import { Link } from "react-router-dom";

const Nav = props => (
    <nav className="navbar is-primary">
    {/* <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </a>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> */}
    
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="/">
          Home
        </a>
        {/* <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href="/documentation/overview/start/">
            Docs
          </a>
          
        </div> */}
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
            <Link to="/push" className="button">
                <span>
                  + push
                </span>
            </Link>

            </p>
            <p className="control">
            <Link to="/food" className="button">
               
                <span>+ food</span>
</Link>            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  
);

export default Nav;
