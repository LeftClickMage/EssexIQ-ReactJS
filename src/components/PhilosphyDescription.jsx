import React, { useState } from "react";

export default function PhilosphyDescription(props) {
    return(
        <div className="col-sm-6">
            <p className = "fs-3">{props.children}</p>
        </div>
    );
}

