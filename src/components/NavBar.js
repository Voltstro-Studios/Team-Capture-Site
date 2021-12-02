import React from 'react';
import {Link} from 'components/Router'

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-orange fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">Team-Capture</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link bi bi-house-fill"> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link bi bi-info-square-fill"> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/news" className="nav-link bi bi-newspaper"> News</Link>
                            </li>
                        </ul>
                        <span className="navbar-text text-black">
                        Welcome, <span id="playerName">Player</span>!
                    </span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;