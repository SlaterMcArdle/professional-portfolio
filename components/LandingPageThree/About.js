import React from 'react'; 

const About = () => {
    return (
        <div id="about" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="about-img-three">
                            <img src="/images/IMG_8410-2.jpg" alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title three">
                                <span className="sub-title">ABOUT ME</span>
                                <h2>I Am A Web Developer, Specializing In JavaScript, Node, React, SQL & NoSQL</h2>
                                <p>After two years as a software engineer for a small robotics company, I turned my sights towards the oceans. I spent the next three years captaining yachts through over a dozen countries, making it halfway around the world. Now back home, I'm returning to my software roots and focusing on web development. See my portfolio below for recent examples of my work.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="left">
                                        <ul>
                                            <li>
                                                <span>Age: </span>
                                                29 Years
                                            </li>
                                            <li>
                                                <span>Home: </span>
                                                San Diego
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-7">
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <span>Phone:</span>
                                                <a href="tel:+14422667320">+1 442-266-7320</a>
                                            </li>
                                            <li>
                                                <span>Email:</span>
                                                <a href="mailto:slater.mcardle@outlook.com">slater.mcardle@outlook.com</a>
                                            </li>
                                            <li>
                                                <span>Website:</span>
                                                <a href="#" target="_blank">www.slatermcardle.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;