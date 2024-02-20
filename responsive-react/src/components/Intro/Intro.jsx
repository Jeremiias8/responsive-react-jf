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
import { motion } from 'framer-motion';

import { themeContext } from '../../Context';
import { useContext } from 'react';

export const Intro = () => {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? 'white' : '' }}>Hi, I AM</span>
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
            <motion.img 
            initial={{ left: '-36%' }}
            whileInView={{ left: '-24%' }}
            transition={transition}

            src={glassesemoji} alt="" />

            <motion.div 
                initial={{ top: '-4%', left: '59%' }}
                whileInView={{ left: '63%' }}
                transition={transition}

                style={{ top: '-18%', left: '-88%' }} 
                className='floating-div'
                >
                    <FloatingDiv image={Crown}
                        txt1='Web'
                        txt2='Developer' 
                    />
            </motion.div>

            <motion.div 
                initial={{ left: '9rem', top: '18rem' }}
                whileInView={{ left: '0rem' }}
                transition={transition}

                style={{ top: '18rem', left: '0rem' }}
                className='floating-div'
                >
                    <FloatingDiv image={thumbup} 
                        txt1='Best Design' 
                        txt2='Award' 
                    />
            </motion.div>

            {/* blur divs */}
            <div className="blur" 
                style={{ background: 'rgb(238 210 255)' }}
            >   
            </div>
            <div className="blur"
                style={{ background: '#C1F5FF', 
                    top: '17rem', 
                    width: '21rem', 
                    height: '11rem',
                    left: '-9rem'
                }}
            >
            </div>

        </div>
    </div>
  )

}
