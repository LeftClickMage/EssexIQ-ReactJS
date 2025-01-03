import React, { useState } from "react";

export default function PhilosophyImage(props) {
    return(
        <div className="col-sm-6">
            <img src={props.src} className="img-fluid border border-3 border-dark" />
        </div>
    );
}

