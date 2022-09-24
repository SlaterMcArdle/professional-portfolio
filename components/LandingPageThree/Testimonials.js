import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";

const Testimonials = () => {

    return (
        <div className="review-area two three five border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">TESTIMONIAL</span>
                    <h2>Some Generous Words Of My Satisfied Client Who Love My Work</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et.</p>
                </div>

                <Swiper 
                    effect={"fade"}
                    navigation={true} 
                    modules={[EffectFade, Navigation]} 
                    className="mySwiper review-slider"
                >
                    <SwiperSlide>
                        <div className="review-item">
                            <i className='bx bxs-quote-right'></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim illo magni debitis in at culpa quidem eum molestiae reiciendis provident, officiis consequatur voluptates error maiores, pariatur natus ex quaerat</p>
                            <img src="/images/review/review1.jpg" alt="Review" />
                            <h3>Andrew Smith</h3>
                            <span>Web Developer</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="review-item">
                            <i className='bx bxs-quote-right'></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim illo magni debitis in at culpa quidem eum molestiae reiciendis provident, officiis consequatur voluptates error maiores, pariatur natus ex quaerat</p>
                            <img src="/images/review/review2.jpg" alt="Review" />
                            <h3>Tom Henry</h3>
                            <span>UX/UI Designer</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="review-item">
                            <i className='bx bxs-quote-right'></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim illo magni debitis in at culpa quidem eum molestiae reiciendis provident, officiis consequatur voluptates error maiores, pariatur natus ex quaerat</p>
                            <img src="/images/review/review3.jpg" alt="Review" />
                            <h3>Jac Jacson</h3>
                            <span>SEO Expert</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials;