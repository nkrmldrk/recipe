import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="#ff5252 red">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="./" className="brand-logo">
                        React Recipe
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export {Header}
