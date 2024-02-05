import React from 'react'
import './Intro.css'

import Github from '../../img/github.png';
import Linkedln from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';

export const Intro = () => {

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi, I AM</span>
                <span>JEREMÍAS FERNANDES</span>
              
                <span>
                    FullStack Developer with medium level of experience in web designing and development, producting the Quality work.
                </span>
            </div>

            <button className="button i-button">Hire me</button>

            <div className="i-icons">

                <a href="https://github.com/Jeremiias8">
                    <img src={Github} alt="" />
                </a>
                
                <img src={Linkedln} alt="" />
                <img src={Instagram} alt="" />
            </div>

        </div>

        <div className="i-right">
            
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />

            <div>
                <FloatingDiv image={Crown}
                    txt1='Web'
                    txt2='Developer' 
                />
            </div>

        </div>
    </div>
  )

}
