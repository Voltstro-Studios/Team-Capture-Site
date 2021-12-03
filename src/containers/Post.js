import React from 'react'
import Markdown from 'markdown-to-jsx'
import {useRouteData} from 'react-static'

export default function Post() {
    const {post} = useRouteData()

    return (
        <div>
            <Markdown>
                {post.markdown}
            </Markdown>
        </div>
    )
}
