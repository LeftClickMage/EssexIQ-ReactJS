import React, { useState } from "react";

export default function Title(props) {
    return(
        <>
           <h1 className = "display-3">{props.children}</h1>  
        </>
    );
}

