import React from 'react'
import {useRouteData} from 'react-static'
import {Link} from 'components/Router'

import NavBar from "components/NavBar"
import Footer from "components/Footer"
import Helmet from "react-helmet";

export default function News() {
    const {posts} = useRouteData()
    return (
        <div>
            <NavBar/>
            <main className="flex-shrink-0 py-5 bg-white">
                <section className="py-5 text-center container">
                    <h1>Team-Capture News</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">We will post any major news we have related to Team-Capture here!</p>
                    </div>
                </section>
                <div>
                    <ul>
                        {posts.map(post => (
                            <li>
                                <Link
                                    to={`news/${post.publishDate.year}/${post.publishDate.month}/${post.publishDate.day}/${post.title.replace(/[^\w\s]/gi, '').replace(" ", "-").toLowerCase()}/`}>{post.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer/>
            <Helmet>
                <title>News - Team-Capture</title>
            </Helmet>
        </div>
    )
}