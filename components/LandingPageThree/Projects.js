import React from 'react';
import Link from 'next/link';

const Projects = () => {
    return (
        <div id="portfolio" className="projects-area border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">PORTFOLIO</span>
                    <h2>Some Recent Projects</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-7">
                        <div className="projects-item">
                            <img src="/images/projects/encanto-flowers.png" alt="Projects" />
                            <div className="inner">
                                <h3>
                                    <Link href="http://encanto-flowers.herokuapp.com/">
                                        <a target="_blank">Encanto Flowers</a>
                                    </Link>
                                </h3>
                                <span>Cross-stack Integration / Stripe Integration</span>
                            </div>
                        </div>

                        <div className="projects-item">
                            <img src="/images/projects/programeter.png" alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <Link href="https://glacial-garden-96019.herokuapp.com/login">
                                            <a target="_blank">Programeter</a>
                                        </Link>
                                    </h3>
                                    <span>SQL Database / Algorithms</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-5">
                        <div className="projects-item two">
                            <img src="/images/projects/restroom_hunters.png" alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <Link href="https://therestroomhunters.github.io/public-restroom-search/">
                                            <a target="_blank">Restroom Hunters</a>
                                        </Link>
                                    </h3>
                                    <span>Mapbox API Integration</span>
                                </div>
                            </div>
                        </div>

                        <div className="projects-item two">
                            <img src="/images/projects/note_taker.png" alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <Link href="/work-details">
                                            <a target="_blank">Note Taker</a>
                                        </Link>
                                    </h3>
                                    <span>Full Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="text-center">
                    <Link href="/works">
                        <a className="common-btn three" target="_blank">Explore Projects</a>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Projects;