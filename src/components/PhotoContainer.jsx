import React, { useState } from "react";

export default function PhotoContainer(props) {
    return(
        <div className="text-center container-fluid my-5">
            <div className="row align-items-center g-5 mx-5">
                {props.children}
            </div>
        </div>
    );
}

