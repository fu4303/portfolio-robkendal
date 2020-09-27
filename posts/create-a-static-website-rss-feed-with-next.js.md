---
date: 2020-09-27T07:08:20
published: false
title: Create a static website RSS feed with Next.js
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

This website, like an increasing number of static websites 

### Hosting your website on non-Vercel hosts

mention the issue with grabbing data for an XML feed as you have to effectively generate the page for each request.

## RSS feed options when using Next.js

Whatever your situation, you have a

## Creating an RSS feed for a Next.js website (using WordPress)

Since we've been making a series on using WordPress in headless CMS mode with Next.js, we'll be continuing on that theme and pulling our RSS XML data direct from WordPress. 

However, the main body of the code here will work whatever your situation, the big difference is going to be either where you get your data from (e.g. WordPress, `.md` files, other CMS, API endpoint, etc.), and _when_ you get your data — are you grabbing yours on the fly for each request, or generating it ahead of time when the site builds?