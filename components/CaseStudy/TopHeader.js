import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="logo">
                            <img src="images/logo.png" alt="Logo" />
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                <Link href="#case-study">
                                    <a>Case Study</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;