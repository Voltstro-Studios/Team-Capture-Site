import React from 'react'
import Helmet from 'react-helmet'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default () => (
    <div>
        <NavBar/>
        <main className="flex-shrink-0 py-5 bg-white">
            <div className="container">
                <h1 className="tc-icon pt-5">Team<br />Capture</h1>
                <h1 className="mt-5">Welcome to Team-Capture!</h1>
                <p className="lead">Here is our map rotation:</p>
                <ol>
                    <li>dm_ditch</li>
                </ol>
                <p>And our rules are:</p>
                <ol>
                    <li>No cheating</li>
                    <li>Have fun!</li>
                </ol>
                <p className="lead">Happy fragging!</p>
            </div>
        </main>
        <Footer/>
        <Helmet>
            <title>MOTD - Team-Capture</title>
        </Helmet>
    </div>
)