import React, { useState } from "react";

export default function SponsorsImage(props) {
    return(
        <div className = "col-lg-3 col-sm-6">
            <img src={props.src} className="img-fluid rounded-circle border border-dark border-3 sponsorsImage"/>
        </div>
    );
}

