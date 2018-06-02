import React from "react";
import { Row, Col, Input, CardPanel } from "react-materialize";
// import "./Car.d.css";
import { Link } from "react-router-dom";

const Nav = props => (
    <nav class="navbar is-primary">
    {/* <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> */}
  
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="https://bulma.io/">
          Home
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/documentation/overview/start/">
            Docs
          </a>
          
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
            <Link to="/push" className="button">
                <span>
                  + push
                </span>
            </Link>

            </p>
            <p class="control">
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
