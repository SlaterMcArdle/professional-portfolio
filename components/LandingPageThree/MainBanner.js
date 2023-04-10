import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom-two three">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1><span>Slater</span> McArdle</h1>
                            <p>Hello I am a <span>Web Developer</span> from San Diego. Combining my robotics engineering experience with my training in full stack web development, I create robust, intuitive user experiences.</p>

                            <div className="banner-btn-area">
                                <Link href="#contact">
                                    <a className="common-btn three">Contact Me</a>
                                </Link>
                                {/* <Link href="https://www.upwork.com/freelancers/~01c17ac19358059d85">
                                    <a className="common-btn three">Hire Me</a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;