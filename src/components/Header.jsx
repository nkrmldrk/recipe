import React from 'react'

function Header() {
    return (
        <nav className="oranges">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="!#" className="brand-logo">
                        React Recipe
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="https://github.com/nkrmldrk">Repository</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header