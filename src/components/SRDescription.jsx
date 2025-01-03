import React, { useState } from "react";

export default function SRDescription(props) {
    return(
        <>
        <p className = "fs-5">- {props.children}</p>
        </>
    );
}

