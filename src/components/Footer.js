import React from 'react';
import {Link} from '@reach/router'

import Icon from '../assets/images/Voltstro-Studios-Icon.png'

const Footer = () => {
    return (
        <footer className="footer fixed-bottom mt-auto py-3 justify-content-between" id="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <Link to="/">
                            <img alt="Voltstro-Studios" src={Icon} />
                        </Link>
                        <span className="mx-2 text-muted">(c) 2019-2021 Voltstro-Studios</span>
                    </div>
                    <div className="col d-flex justify-content-end fs-5 nav-item" id="controls-footer-social">
                        <a href="https://github.com/Voltstro-Studios/Team-Capture"
                           className="text-muted footer-link p-2 bi bi-github" />
                        <a href="https://twitter.com/Voltstro" className="text-muted footer-link p-2 bi bi-twitter" />
                        <a href="https://discord.voltstro.dev" className="text-muted footer-link p-2 bi bi-discord" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;