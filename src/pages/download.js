import React from 'react'
import Helmet from 'react-helmet'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import background from "../assets/images/Background.jpg"

export default () => (
    <div>
        <NavBar/>
        <main className="flex-shrink-0 py-5 bg-white">
            <section className="py-5 text-center container">
                <h1>Download Team-Capture</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Here are the current ways of downloading Team-Capture.</p>
                </div>
            </section>
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h2 className="lead">System Requirements</h2>
                            <p>We haven't done any proper tests on the hardware that you will need to run this project, but while this project is an early alpha, we still have done a lot of optimization, and can run quite well on lower end hardware.</p>
                            <p>You will need a PC that has x64-bit version of either Windows 10 or a Debian based Linux distribution (We only officially support Debian based distros as all testing is done on Ubuntu 21.10. Other distros might work). We currently do not support MacOS, mobile or consoles.</p>
                        </div>

                        <p>Currently, there is two ways of obtaining a pre-compiled version of Team-Capture.</p>
                    </div>
                    <div className="col-6">
                        <h3>DevOps Builds</h3>
                        <p>You can download the latest successful DevOps builds of the project from <a href="https://nightly.link/Voltstro-Studios/Team-Capture/workflows/main/master">here</a>.</p>
                        <p>This build is the absolute LATEST bleeding-edge pre-compiled build of the project you can get. Theses builds are automatically done.</p>
                    </div>
                    <div className="col-6">
                        <h3>GitHub Releases</h3>
                        <p>You can also download a build off from the <a href="https://github.com/Voltstro-Studios/Team-Capture/releases">GitHub releases</a>.</p>
                        <p>These builds will be significantly behind on features then the DevOps build, but are manually compiled.</p>
                    </div>
                    <div className="col-12 mt-5">
                        <h3>Building</h3>
                        <p>You can also build the project your self, if you have the know-how and the tools.</p>
                        <p>Checkout the project's <a href="https://github.com/Voltstro-Studios/Team-Capture">GitHub page</a> for instructions on how to.</p>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        <Helmet>
            <title>Download - Team-Capture</title>
        </Helmet>
    </div>
)