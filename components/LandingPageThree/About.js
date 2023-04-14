import React from 'react'; 

const About = () => {
    return (
        <div id="about" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="about-img-three">
                            <img src="./images/IMG_8410-2.jpg" alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title three">
                                <span className="sub-title">ABOUT ME</span>
                                <h2>I Am A Web Developer, Specializing In React and Node</h2>
                                <p>After two years as a software developer for a custom automation company, I turned my sights towards the oceans. I spent the next three years skippering yachts through over a dozen countries, making it halfway around the world. Now back home, I'm offering mysoftware expertise, focusing on web development. I recently completed the Full Stack Web Development Boot Camp through UC San Diego. Now I'm seeking entry level opportunities. See my portfolio below for recent examples of my work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;