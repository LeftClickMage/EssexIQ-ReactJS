import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavButton(props) {
    return(
        <>
            <Link to={props.to} className="text-decoration-none">
              <li className="nav-item">
                  
               <a className="nav-link fs-3 text-light">{props.text}</a>
             </li>

            </Link>

                
        </>
    );
}

