import React from 'react'
import path from 'path'
import posts from './public/posts.json'

export default {
  getRoutes: async () => {
    return [
      {
        path: '/news',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/${post.dateYear}/${post.dateMonth}/${post.dateDay}/${post.id}/`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  getSiteData: async ({ dev }) => ({
    title: 'Team-Capture Site',
    lastBuilt: Date.now(),
  }),
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US" className="h-100">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Team-Capture, a multiplayer, open-source FPS game, inspired by games like Quake and TF2" />
        <meta name="keywords" content="Team-Capture, Voltstro, Voltstro-Studios, Quake, TF2, open-source, FPS" />
        <meta name="author" content="Voltstro-Studios" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto&display=swap" rel="stylesheet" />
        <title>Team-Capture</title>
      </Head>
      <Body>
        {children}
        <script type="text/javascript" src="/bootstrap.bundle.min.js" />
      </Body>
    </Html>
  ),
}
