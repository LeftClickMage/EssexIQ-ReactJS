import React, { useState } from "react";
import SRDescription from "./components/SRDescription.jsx";
import PhilosphyDescription from "./components/PhilosphyDescription.jsx";
import EssexImage from "./components/EssexImage.jsx";
import SponsorsImage from "./components/SponsorsImage.jsx";
import PhilosophyImage from "./components/PhilosophyImage.jsx";
import PhotoContainer from "./components/PhotoContainer.jsx";
import Title from "./components/Title.jsx";
export default function Index() {
    return(
        <>
            <div className="container-fluid text-center row align-items-center g-5">
                <div className="col-sm-6">
                    <img src="./photos/logo.PNG" className="my-3 rounded-circle img-fluid border border-5 border-dark"/>
                </div>
                
                <div className = "col-sm-6">
                    <Title>SUMMER ROBOTICS</Title>

                    <SRDescription>
                        <b>Three week</b> coding and robotics program hosted by Essex Tech and Millburn High mentors
                    </SRDescription>

                    <SRDescription>
                        Students will <b>build and program their own robots</b> using the VEX IQ system
                    </SRDescription>

                    <SRDescription>
                        Fun challenges and mini-games along the way with a full-day <b>final competition</b> at the end
                    </SRDescription>
                </div>
            </div>

            
            <PhotoContainer>               
                <EssexImage src="./photos/logo.PNG"/>
                <EssexImage src="./photos/logo.PNG"/>
                <EssexImage src="./photos/logo.PNG"/>
                <EssexImage src="./photos/logo.PNG"/>
            </PhotoContainer>

            <PhotoContainer>
                <Title>OUR SPONSORS</Title>
                <SponsorsImage src="./photos/logo.PNG"/>
                <SponsorsImage src="./photos/logo.PNG"/>
                <SponsorsImage src="./photos/logo.PNG"/>
                <SponsorsImage src="./photos/logo.PNG"/>
            </PhotoContainer>

            <PhotoContainer>
                <Title>TEACHING PHILOSOPHY</Title>
                <PhilosophyImage src="./photos/logo.PNG" />

                <PhilosphyDescription>
                    Description of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHY
                </PhilosphyDescription>

                <PhilosphyDescription>
                    Description of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHYDescription of PHILOSOPHY
                </PhilosphyDescription>

                <PhilosophyImage src="./photos/logo.PNG" />
            </PhotoContainer>
                


            

        </>
    );
}

