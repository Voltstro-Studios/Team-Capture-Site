import React from 'react'

import {Helmet} from "react-helmet";

import NavBar from "components/NavBar"
import Footer from "components/Footer"

export default () => (
    <div>
        <NavBar/>
        <main className="flex-shrink-0 py-5 bg-white">
            <section className="py-5 text-center container">
                <h1>About Team-Capture</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Here is the marketing crap for our project.</p>
                </div>
            </section>
            <div className="container px-4 py-5">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-joystick feature-icon"></i>
                        </div>
                        <div>
                            <h2>Casual Fun</h2>
                            <p>We are nothing serious, high action movement, over the top guns and built by boxing
                                kangaroos. No fucks are given about anything (/s).</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-pc-display feature-icon"></i>
                        </div>
                        <div>
                            <h2>Cross-Platform</h2>
                            <p>Playing on Windows, or on giga chad Linux? Whatever you use, it fully works natively on
                                both without any bullshit.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-file-earmark-binary feature-icon"></i>
                        </div>
                        <div>
                            <h2>Open Source</h2>
                            <p>Entire project's source code is open source, under the AGPL license. View the guts of the
                                project and do what you want to it.</p>
                        </div>
                    </div>
                </div>

                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-people feature-icon"></i>
                        </div>
                        <div>
                            <h2>Independent Team</h2>
                            <p>The entire project is built by an independent team who work on the project in their free
                                time. We don't have to uphold bullshit from higher ups.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-clock-history feature-icon"></i>
                        </div>
                        <div>
                            <h2>Alpha</h2>
                            <p>We are still an early alpha, but we have a lot of the basics down. Nothing in the game is
                                any near finalized, but we are always working on it.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-building feature-icon"></i>
                        </div>
                        <div>
                            <h2>Build On The Shoulders Of Giants</h2>
                            <p>Built with the Unity game engine, and open source libraries such as Mirror.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center container">
                    <h2>Download Now</h2>
                    <a className="btn btn-download m-1 btn-lg" href="#" role="button">Download</a>
                    <a className="btn btn-outline-secondary m-1" href="https://github.com/Voltstro-Studios/Team-Capture"
                       role="button">View Source Code</a>
                </div>
            </div>
        </main>
        <Footer/>
        <Helmet>
            <title>About - Team-Capture</title>
        </Helmet>
    </div>
)