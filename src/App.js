import React from 'react'
import {addPrefetchExcludes, Root, Routes} from 'react-static'
import {Router} from 'components/Router'
import Dynamic from 'containers/Dynamic'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {

    return (
        <Root className="d-flex flex-column h-100">
            <React.Suspense fallback={<em>Give me a sec...</em>}>
                <Router>
                    <Dynamic path="dynamic"/>
                    <Routes path="*"/>
                </Router>
            </React.Suspense>
        </Root>
    )
}

export default App