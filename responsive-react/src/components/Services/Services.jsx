import React from 'react'
import './Services.css'
import { Card } from '../Card/Card';

import ProgWebCV2024 from '../../CV/CV_2024-ProgWeb.pdf'

import HeartEmoji  from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humbre from '../../img/humble.png';

import { themeContext } from '../../Context';
import { useContext } from 'react';

import { motion } from 'framer-motion';

export const Services = () => {

    const transition = {duration: 1, type: 'spring'};
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">

        {/* left side */}
        <div className="awesome">
            <span style={{ color: darkMode ? 'white' : '' }}>
                My Awesome
            </span>
            <span>services</span>

            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br />
                Laboriosam sunt, aut tempora, delectus reprehenderit corrupti quidem iste, minus in doloremque necessitatibus. 
            </span>

            <a href={ProgWebCV2024} download>

                <button className="button s-button">
                    Download CV
                </button>
            </a>

            <div className="blur s-blur" style={{
                background: "#ABF1FF94"
            }}></div>
        </div>

        {/* right side */}
        <div className="cards">
            
            <motion.div 
                whileInView={{ left: '14rem' }}
                initial={{ left: '25%' }}
                transition={transition}

                style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
            </motion.div>
            <div style={{ top: '16rem', left: 
            '10rem' }}>
                <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={"HTML5, CSS3, JavaScript, React, NodeJS, ExpressJS"}
                />
            </div>
            <div style={{ top: '32rem', left: '14rem' }}>
                <Card
                    emoji={Humbre}
                    heading={'UI/UX'}
                    detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                />
            </div>

            <div className="blur s-blur2" style={{ background: 'var(--purple)' }}>

            </div>

        </div>

    </div>
  )

}
