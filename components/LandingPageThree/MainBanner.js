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
                            <p>Hello I am a <span>Full Stack Web Developer</span> from San Diego. I have turned my skills back to software development after spending three years and 20,000 ocean miles as an international yacht captain.</p>

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