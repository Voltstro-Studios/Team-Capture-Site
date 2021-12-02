import React from 'react';
import {Link} from 'components/Router'

const Footer = () => {
    return (
        <footer className="footer fixed-bottom mt-auto py-3 justify-content-between" id="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <Link to="/">
                            <img alt="Voltstro-Studios" src="./images/Voltstro-Studios-Icon.png"></img>
                        </Link>
                        <span className="mx-2 text-muted">(c) 2019-2021 Voltstro-Studios</span>
                    </div>
                    <div className="col d-flex justify-content-end fs-5 nav-item">
                        <a href="https://github.com/Voltstro-Studios/Team-Capture"
                           className="text-muted footer-link p-2 bi bi-github"></a>
                        <a href="https://twitter.com/Voltstro" className="text-muted footer-link p-2 bi bi-twitter"></a>
                        <a href="https://discord.voltstro.dev" className="text-muted footer-link p-2 bi bi-discord"></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;