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
                    <div className="col-xs-12 col-lg-6">
                        <div className="projects-item">
                            <img src="/images/projects/encanto_flowers_on_devices.png" alt="Projects" />
                            <div className="inner">
                                <h3>
                                    <Link href="http://encanto-flowers.herokuapp.com/">
                                        <a target="_blank">Encanto Flowers</a>
                                    </Link>
                                </h3>
                                <span>Cross-stack Integration / Stripe Integration</span>
                                <a href="https://github.com/encantoflowers/encanto-flowers" target="_blank">
                                    <i className='bx bxl-github bx-md'></i>
                                </a>
                                <a href="http://encanto-flowers.herokuapp.com/" target="_blank">
                                    <i className='bx bx-link bx-md'></i>
                                </a>
                            </div>
                        </div>

                        <div className="projects-item">
                            <img src="/images/projects/programeter_on_devices.png" alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <Link href="https://glacial-garden-96019.herokuapp.com/login">
                                            <a target="_blank">Programeter</a>
                                        </Link>
                                    </h3>
                                    <span>SQL Database / Algorithms</span>
                                    <a href="https://github.com/Programeter/Programeter" target="_blank">
                                        <i className='bx bxl-github bx-md'></i>
                                    </a>
                                    <a href="https://glacial-garden-96019.herokuapp.com/login" target="_blank">
                                        <i className='bx bx-link bx-md'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-lg-6">
                        <div className="projects-item two">
                            <img src="/images/projects/restroom_hunters_on_devices.png" alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <Link href="https://therestroomhunters.github.io/public-restroom-search/">
                                            <a target="_blank">Restroom Hunters</a>
                                        </Link>
                                    </h3>
                                    <span>Mapbox API Integration</span>
                                    <a href="https://github.com/therestroomhunters/public-restroom-search" target="_blank">
                                        <i className='bx bxl-github bx-md'></i>
                                    </a>
                                    <a href="https://therestroomhunters.github.io/public-restroom-search/" target="_blank">
                                        <i className='bx bx-link bx-md'></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="projects-item two">
                            <img src="/images/projects/note_taker_on_devices.png" alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <Link href="https://pacific-island-82773.herokuapp.com/">
                                            <a target="_blank">Note Taker</a>
                                        </Link>
                                    </h3>
                                    <span>Full Development</span>
                                    <a href="https://github.com/SlaterMcArdle/Note_Taker" target="_blank">
                                        <i className='bx bxl-github bx-md'></i>
                                    </a>
                                    <a href="https://pacific-island-82773.herokuapp.com/" target="_blank">
                                        <i className='bx bx-link bx-md'></i>
                                    </a>
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