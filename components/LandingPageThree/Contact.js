import React, { useState } from 'react';

const Contact = () => {
    return (
        <div id="contact" className="contact-area three border-bottom-two pt-100 pb-70">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">CONTACT</span>
                    <h2>Have A Project? Drop Me A Line.</h2>
                </div>

                <div className="row align-items-center">
                    
                    <div className="col-md-5 col-lg-6">
                        <div className="contact-content">
                            <div className="top">
                                <ul>
                                    <li>
                                        <span>Phone:</span>
                                        <a href="tel:+14422667320">+1 (442)-266-73206</a>
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <a href="mailto:slater.mcardle@outlook.com">slater.mcardle@outlook.com</a>
                                    </li>
                                    <li>
                                        <span>Website:</span>
                                        <a href="#" target="_blank">slatermcardle.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="bottom">
                                <ul>
                                    <li>
                                        <a href="https://linkedin.com/in/joseph-s-mcardle" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/SlaterMcArdle" target="_blank">
                                            <i className='bx bxl-github'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.upwork.com/freelancers/~01c17ac19358059d85" target="_blank">
                                            <i className='bx bxl-upwork'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;