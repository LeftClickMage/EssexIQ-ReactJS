import React, { useState } from "react";

export default function EssexImage(props) {
    return(
        <div className = "col-lg-3 col-sm-6">
            <img src={props.src} className="img-fluid border border-dark border-3 essexImage"/>
        </div>
    );
}

