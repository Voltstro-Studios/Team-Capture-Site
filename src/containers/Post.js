import React from 'react'
import Markdown from 'markdown-to-jsx'
import Helmet from "react-helmet";

import {useRouteData} from 'react-static'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import '../assets/css/news.css'

export default function Post() {
    const {post} = useRouteData()

    return (
        <div>
            <NavBar/>
            <main className="flex-shrink-0 py-5 bg-white">
                <section className="py-5 text-center container">
                    <h1>{post.title}</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">{post.preview}</p>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="col-lg-6 mx-auto news-post">
                                <Markdown>
                                    {post.markdown}
                                </Markdown>
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
                <title>{post.title} - Team-Capture</title>
            </Helmet>
        </div>
    )
}
