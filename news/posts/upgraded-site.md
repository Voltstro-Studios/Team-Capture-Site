date_year: 2021
date_month: 12
date_day: 5
author: TC Team
title: Upgraded Site
preview: Hey everyone, long time no post, but we have some minor updates regarding the website.
# Upgraded Site

Hey everyone, long time no post, but we have some minor updates regarding the website. As you might be able to tell, the site had some minor appearance updates. Mainly the 'News' section and that we have an 'About' and 'Download' page now.

But under-the-hood the site has completely been revamped. If you looked at the site's [GitHub repo before all the revamping](https://github.com/Voltstro-Studios/Team-Capture-Site/tree/dffedfbb99bed6aa537859114c3366b7f36c2ae4), you can see that the only files included are just the HTML, CSS and JS files, and thats because the site was directly done like that, no generator was used. However this made maintaining the site hard, as for example if you want to change or add a link in the NavBar, you got to manually do it for each page.

But now, we have re-done the site in [NodeJS](https://nodejs.org/en/) and [react-static](https://github.com/react-static/react-static). This will make maintaining the site WAY easier, and since the deployable version of the site is still static, it will still be lightweight like the old version.

The updates site also makes posting new blog posts easier as well, as we can now just write it in plain markdown (instead of HTML files) and have it converted for us.

I do want to make a note, none of the developers on the project are front end developers, or even "proper" web devs, so we have no clue what we are doing, but it seems to function and look fine, so I guess we didn't fuck up too bad. If you know how to use NodeJS/npm/React, and see something fucked in the code, please don't be afraid to open a PR on the [site's repo](https://github.com/Voltstro-Studios/Team-Capture-Site).

Oh we also attached a license to site's code, about time. All of it is under the [MIT license](https://github.com/Voltstro-Studios/Team-Capture-Site/blob/master/LICENSE.md).

## Game Updates

We still have been busy working on the game it self, and this site overhaul will tie into some future updates for the game. But currently we don't have anything to show off, but that will be in the next post!