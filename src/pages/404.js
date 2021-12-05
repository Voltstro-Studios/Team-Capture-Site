import React from "react"
import Helmet from "react-helmet";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default () => (
    <div>
        <NavBar/>
        <main className="flex-shrink-0 py-5 bg-white">
            <section className="py-5 text-center container">
                <h1>404 - Not Found</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Your requested file was not found!</p>
                </div>
            </section>
        </main>
        <Footer/>
        <Helmet>
            <title>404 - Team-Capture</title>
        </Helmet>
    </div>
)
