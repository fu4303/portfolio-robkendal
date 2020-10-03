---
date: 2020-09-27T07:08:20.000+00:00
published: false
title: Create a Next.js RSS feed for your static website
description: 'Creating a static website RSS feed with Next.js is straightforward,
  but gets a little tricky when you''re exporting the project. '
featuredimage: "/img/nextjs-with-wordpress-part3-blog-post.png"
featured: true
tags:
- Tutorials
- Next.js
- JavaScript

---
If you've been following along with the series, you'll have come across the previous posts:

* [Configuring WordPress for use as a headless CMS and setting up a Next.js project](https://robkendal.co.uk/blog/configuring-wordpress-as-a-headless-cms-with-next.js "Configuring WordPress as a headless CMS with Next.js")
* [Using WordPress as a headless CMS with Next.js](https://robkendal.co.uk/blog/using-wordpress-as-a-headless-cms-with-next.js "Using WordPress as a headless CMS with Next.js")

In part three, we're going to cover an important aspect of any good blogging site or marketing site that is frequently updated: an RSS feed.

_If you like this article, you'll love the other helpful content I post on Twitter._ [_Find me on Twitter @kendalmintcode_](https://twitter.com/kendalmintcode "Find me on Twitter @kendalmintcode") _and say hi._

## Your Next.js website needs an RSS feed

RSS feeds are an important part of any website that has frequently updated content, such as a blog (we are using WordPress after all!) or marketing-led website.

An RSS feed is a specific page on a website (usually `/rss.xml`) which returns all, or part of a website's content as a list in structured XML format. This makes it very easy for content readers (such as Feedly) to pull in new and updated content on a regular basis.

However, creating an RSS feed for a Next.js site is surprising not well documented, so I wanted to bring my solution to the web to hopefully solve an issue for someone else, that I had to solve for this very website you're reading right now.

## Creating an RSS feed for a Next.js site hosted on Netlify

Hosting your Next.js website [on Vercel's platform](https://vercel.com/ "Next.js hosting on Vercel") (the creators of Next.js) means you won't have to worry about anything; it's perfectly geared up to handling the default Next build output.

However, if you're looking to host your sites on a different provider, such as Netlify, then you'll need to employ

This website, like an increasing number of static websites, is hosted on the excellent [Netlify platform](https://www.netlify.com "Netlify hosting for static sites"). It's quick, slick, and offers a great developer experience, especially for hosting statically generated websites and SPA's.

One of the drawbacks, however, to hosting Next.js sites on providers like Netlify (i.e non-Vercel .e.is that they're generally not geared up for handling the rather unique build structure that Next outputs.

By default, when you run the `yarn build` command to do all the building goodness for your site, Next.js outputs a combination of statically generated files, along with a small Node server to run any of the server-side content generation that it needs to do on each request.

## RSS feed options when using Next.js

However you choose to go about gathering and generating your RSS feed data, you're going to need to ultimately render it as XML data into the browser.

You've got a few ways to handle this:

1. Use a third-party site-mapping tool or RSS feed generator  
   These can be expensive and require additional faff to set up and maintain.
2. Generate the XML RSS feed on each request using Next's `getServerSideProps()`

   This won't work for sites that are generated using the `yarn export` command.
3. Generate a static XML RSS feed at build time using a separate Node script as part of the build process  
   This is what we'll be doing in this article!

> The programatic options above will work with the code we're going to outline in a moment. The main difference is that if you stick to using vanilla Next.js then you can run this as a separate page (e.g. `rss.js`) and use the `getServerSideProps()` function to push the feed as XML content to the response object. **We won't have that option, so we'll incorporate a separate Node command as part of our build process.**

I based my final code on this [excellent article by Fredrik Bergqvist on Dev](https://dev.to/fredrikbergqvist/how-to-add-an-rss-feed-to-your-next-js-site-1h02 "How to add an rss feed to your Next.js site").

[![Follow Rob Kendal on Twitter @KendalMintCode](/img/twitter_cta.png "Follow me on Twitter for even more front end content")](https://twitter.com/kendalmintcode "Follow Rob Kendal on Twitter")

## Creating an Next.js RSS feed for a Next.js website (using WordPress)

Since we've been making a series on using WordPress in headless CMS mode with Next.js, we'll be continuing on that theme and pulling our RSS XML data direct from WordPress.

However, the main body of the code here will work whatever your situation, the big differences are going to be _where_ you get your data from (e.g. WordPress, `.md` files, other CMS, API endpoint, etc.), and _when_ you get your data — are you grabbing yours on the fly for each request using `getServerSideProps`, or generating it ahead of time when the site builds?

### Project set up

We'll be carrying on with our existing site from the previous articles. You can find the [wordpress-next-starter project on GitHub](https://github.com/bpk68/wordpress-next-starter "WordPress and Next.js Starter project on GitHub") if you'd like to take a look.

The first thing we need to do is install the [axios project](https://github.com/axios/axios "Axios fetch library on GitHub") as it'll make handling fetches to our WordPress instance easier via Node.

We'll also add in [the Dotenv package](https://www.npmjs.com/package/dotenv "Dotenv - a package for loading environment variable files"). This will enable us to load in our API URL information from the default `.env.local` file we added in the previous articles.

    yarn add --dev axios dotenv

Now, we'll need to add a new Node script into the `package.json` file. Open up the `package.json` file and add in the following line to the `"scripts"` section:

    "deploy": "yarn build && yarn export && node rss-gen.js"

What we're doing here is a combination Node command that does a few things to build us a finished build directory (located at `/out`) that we can deploy to wherever we wish.

It achieves three things:

1. It gets Next.js to build the site.
2. Then, it [triggers the Next.js export feature](https://nextjs.org/docs/advanced-features/static-html-export "Next.js export feature documentation") to generate us a completely static build to a new directory, `/out`.
3. Finally, it runs a Node command to execute the `rss-gen.js` file we'll be building in a moment. This file will gather up our posts information from WordPress, create an XML RSS feed and stash this new XML file inside of the `/out` directory.

With that line in place, your `scripts` section in the `package.json` file will look like this:

     "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "deploy": "yarn build && yarn export && node rss-gen.js"
      },

### Creating the RSS generator file

With our new packages added and the `package.json` file updated, we need to create a new file to actually generate us some RSS XML. Let's do it!

Create a new file in the project root called `rss-gen.js` and add the following imports at the top:

    require('dotenv').config({ path: '.env.local' });
    const fs = require('fs');
    const path = require('path');
    const axios = require('axios');

Nothing flash so far. We're loading in the `dotenv` package as the **very first thing** so we can grab variables from our `.env.local` file to use later on. By default, Node won't recognise an environment variable file called `.env.local`, hence the need for the `dotenv` helper here.

Next, we're importing the `fs` library to do file system things, `path` to deal with our working directory when we want to save our the RSS XML, and `axios` to handle the data fetching.

### Fetching all the posts data

Next up, let's add the following code that will physically go off to our WordPress instance and grab our post data:

    const getAllPostsXmlData = async () => {
      const query = `
        query AllPosts {
          posts(where: {orderby: {field: DATE, order: DESC}}) {
            edges {
              node {
                id
                date
                title
                slug
                content
                excerpt
              }
            }
          }
        }
        `;
      const headers = { 'Content-Type': 'application/json' };
      const allPosts = await axios({
        method: 'post',
        url: process.env.WP_API_URL,
        headers,
        data: JSON.stringify({ query })
      });
    
      return allPosts.data.data.posts.edges;
    };

We've got a very stripped down GraphQL query here that just grabs an ID, date, title, slug, content, and excerpt.

Next, we simply call axios' post request with the `WP_API_URL`. Once this returns, we pass back the array of posts data fresh from the WordPress kitchen.

### Processing posts data into XML

### Generating the file's XML feed

### Putting it all together

### The finished `rss-gen.js` file

With all of the above done, the finished `rss-gen.js` file should look like this:

    require('dotenv').config({ path: '.env.local' });
    const fs = require('fs');
    const path = require('path');
    const axios = require('axios');
    
    const getAllPostsXmlData = async () => {
      const query = `
        query AllPosts {
          posts(where: {orderby: {field: DATE, order: DESC}}) {
            edges {
              node {
                id
                date
                title
                slug
                content
                excerpt
              }
            }
          }
        }
        `;
      const headers = { 'Content-Type': 'application/json' };
      const allPosts = await axios({
        method: 'post',
        url: process.env.WP_API_URL,
        headers,
        data: JSON.stringify({ query })
      });
    
      return allPosts.data.data.posts.edges;
    };
    
    const blogPostsRssXml = blogPosts => {
      let latestPostDate = '';
      let rssItemsXml = '';
      blogPosts.forEach(({ node }) => {
        const post = node;
        const postDate = Date.parse(post.date);
    
        // Remember to change this URL to your own!
        const postHref = `https://myamazingwebsite.com/blog/${post.slug}`;
    
        if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
          latestPostDate = post.date;
        }
    
        rssItemsXml += `
          <item>
            <title><![CDATA[ ${post.title} ]]></title>
            <link>${postHref}</link>
            <pubDate>${post.date}</pubDate>
            <guid isPermaLink="false">${postHref}</guid>
            <description>
            <![CDATA[ ${post.excerpt} ]]>
            </description>
            <content:encoded>
              <![CDATA[ ${post.content} ]]>
            </content:encoded>
        </item>`;
      });
      return {
        rssItemsXml,
        latestPostDate
      };
    };
    
    const getRssXml = blogPosts => {
      const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);
    
      // Edit the '<link>' and '<description>' data here to reflect your own website details!
      return `<?xml version="1.0" ?>
      <rss
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:content="http://purl.org/rss/1.0/modules/content/"
        xmlns:atom="http://www.w3.org/2005/Atom"
        version="2.0"
      >
        <channel>
            <title><![CDATA[ Frontend development articles by Rob Kendal ]]></title>
            <link>https://myamazingwebsite.com</link>
            <description>
              <![CDATA[ A description about your own website that really shows off what it's all about ]]>
            </description>
            <language>en</language>
            <lastBuildDate>${latestPostDate}</lastBuildDate>
            ${rssItemsXml}
        </channel>
      </rss>`;
    };
    
    async function generateRSS() {
      const allBlogPostData = await getAllPostsXmlData();
      const processedXml = getRssXml(allBlogPostData);
    
      const staticOutputPath = path.join(process.cwd(), 'out');
    
      fs.writeFile(`${staticOutputPath}/rss.xml`, processedXml, err => {
        if (err) {
          console.log(err);
        } else {
          console.log('File written successfully');
        }
      });
    }
    
    // kick it all off
    generateRSS();

## What's coming up next?

Next in the Next.js and WordPress series is going to be an in-depth look at a familiar situation: sending emails from contact forms within a static website.

_If you like this article, you'll love the other helpful content I post on Twitter._ [_Find me on Twitter @kendalmintcode_](https://twitter.com/kendalmintcode "Find me on Twitter @kendalmintcode") _and say hi._