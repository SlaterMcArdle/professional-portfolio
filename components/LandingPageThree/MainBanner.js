import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom-two three">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1><span>Joseph</span> McArdle</h1>
                            <p>Hello I am a <span>Full Stack Web Developer</span> from San Diego. I am turning my skills back to software development after spending three years and 20,000 ocean miles as an international yacht captain.</p>

                            <div className="banner-btn-area">
                                <Link href="#contact">
                                    <a className="common-btn three">Contact Me</a>
                                </Link>
                                <Link href="#">
                                    <a className="common-btn three">Hire Me</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;