import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Testimonials = () => {

    const clients = [
        {
            img: profilePic1,
            review: 
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic2,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic3,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profilePic4,
            review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        }
    ];

  return (
    <div className="t-wrapper">
        <div className="t-heading">

            <span>Client always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>

            <div className="blur t-blur1" 
                style={{ background: 'var(--purple)' }}
            >
            </div>

            <div className="blur t-blur2" 
                style={{ background: "skyblue" }}
            >
            </div>

        </div>

        {/* slider */}
        <Swiper>
            <SwiperSlide>

            </SwiperSlide>
        </Swiper>
    </div>
  )

}

