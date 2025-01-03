import React, { useState } from "react";

import { Link } from "react-router-dom";

import NavButton from "./components/navButton.jsx";
export default function Navbar() {
    return ( 
        <>
      <nav className="border border-5 border-dark border-top-0 border-start-0 border-end-0 navbar navbar-expand-md navbar-dark p-2 m-0 position-fixed top-0 w-100 bg-essexPrimary" id="navigationBar">
        <div className="container-fluid">
            <Link to="/" className="noUnderline">
            <a className="navbar-brand fs-1">
                ESSEX IQ
            </a>
            </Link>

            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

      
            <div className="navbar-collapse collapse" id="collapse">
                <ul className="navbar-nav">
                   

          <NavButton text="Instructors" to="/instructors"/>
          <NavButton text="Students" to="/students"/>
          <NavButton text="Sponsors" to="/sponsors"/>
          <NavButton text="Teaching" to="/teaching"/>
          <NavButton text="Our Team" to="/ourteam"/>



          
                </ul>
            </div>

        </div>
    </nav>
        </>
    );
}
