import React, {useEffect} from 'react'
import Helmet from 'react-helmet'
import {Link} from '@reach/router'

import '../assets/css/index.css'

const addBodyClass = className => document.body.classList.add(className);
const removeBodyClass = className => document.body.classList.remove(className);

function useBodyClass(className) {
    useEffect(
        () => {
            //Set up
            className instanceof Array ? className.map(addBodyClass) : addBodyClass(className);

            //Clean up
            return () => {
                className instanceof Array
                    ? className.map(removeBodyClass)
                    : removeBodyClass(className);
            };
        },
        [className]
    );
}

export default function Index() {

    useBodyClass('h-100');
    useBodyClass(`bg-dark`);
    useBodyClass(`bg-img`);

    return (
        <div>
            <div className="cover-container text-center d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="mb-auto">
                    <div>
                        <nav className="nav nav-masthead justify-content-center">
                            <Link className="nav-link active bi bi-house-fill" aria-current="page" to="/"> Home</Link>
                            <Link className="nav-link bi bi-info-square-fill" to="/about"> About</Link>
                            <Link className="nav-link bi bi-newspaper" to="/news"> News</Link>
                            <Link className="nav-link bi bi-file-earmark-arrow-down-fill" to="/download"> Download</Link>
                        </nav>
                    </div>
                </header>
                <main className="px-3">
                    <h1 className="tc-icon">
                        Team
                        <br/>
                        Capture
                    </h1>
                    <p className="lead pt-5">A multiplayer, open-source FPS game, inspired by games like Quake and
                        TF2.</p>
                    <p className="lead text-danger">This project is still in an early stage.</p>
                    <div className="lead text-center container">
                        <h2>Download Now</h2>
                        <Link className="btn btn-download m-1 btn-lg bi bi-file-earmark-arrow-down-fill" to="/download"
                           role="button"> Download</Link>
                        <a className="btn btn-secondary m-1 bi bi-git"
                           href="https://github.com/Voltstro-Studios/Team-Capture" role="button"> Source Code</a>
                    </div>
                </main>
                <footer className="mt-auto fixed-bottom text-black-50">
                    <p>(c) 2019-2021 Voltstro-Studios</p>
                </footer>
            </div>
            <Helmet>
                <title>Team-Capture</title>
            </Helmet>
        </div>
    )
}
