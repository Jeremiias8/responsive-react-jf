import React from 'react'
import './Services.css'
import { Card } from '../Card/Card';

import HeartEmoji  from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humbre from '../../img/humble.png';

export const Services = () => {

  return (
    <div className="services">

        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>

            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br />
                Laboriosam sunt, aut tempora, delectus reprehenderit corrupti quidem iste, minus in doloremque necessitatibus. 
            </span>

            <button className="button s-button">Download CV</button>

            <div className="blur s-blur" style={{
                background: "#ABF1FF94"
            }}></div>
        </div>

        {/* right side */}
        <div className="cards">
            
            <div>
                <Card
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </div>
            <div>
                <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={"HTML5, CSS3, JavaScript, React, NodeJS, ExpressJS"}
                />
            </div>
            <div>
                <Card
                    emoji={Humbre}
                    heading={'UI/UX'}
                    detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                />
            </div>

        </div>

    </div>
  )

}
