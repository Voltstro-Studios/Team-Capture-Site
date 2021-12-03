import React from 'react'
import Helmet from 'react-helmet'
import {Link} from '@reach/router'

import {useRouteData} from 'react-static'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import '../assets/css/news.css'
import '../assets/css/discordWidget.css'

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
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="col-lg-6 mx-auto">
                                {posts.map(post => (
                                    <div key={post.id}
                                         className="news-post">
                                        <h2>
                                            <Link
                                                to={`news/${post.dateYear}/${post.dateMonth}/${post.dateDay}/${post.id}/`}>
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p>{post.author} - {post.dateYear}/{post.dateMonth}/{post.dateDay}</p>
                                        <p>{post.preview}</p>
                                        <Link
                                            className="btn btn-outline-secondary m-1"
                                            to={`news/${post.dateYear}/${post.dateMonth}/${post.dateDay}/${post.id}/`}>
                                            Read
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <p>Come join the <a href="https://discord.voltstro.dev">Voltstro Discord server</a>, brought
                                to you by the devs of this project!</p>
                            <iframe className="discord-widget"
                                    src="https://discord.com/widget?id=424080906232266753&theme=dark"
                                    frameBorder="0"
                                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
            <Helmet>
                <title>News - Team-Capture</title>
            </Helmet>
        </div>
    )
}