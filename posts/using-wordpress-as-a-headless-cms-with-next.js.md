---
date: 2020-09-06T04:08:57.000+00:00
published: false
title: Using WordPress as a headless CMS with Next.js
description: In part 2 of the Getting Started with Next.js, we connect WordPress to
  Next.js and pull in blog post content using WPGraphQL
featuredimage: "/img/next-js-with-wordpress-part-2-blog-post.png"
featured: true
tags:
- JavaScript
- WordPress
- Static Sites
- Next

---
![Blog article on connecting WordPress as a headless CMS to Next.js](/img/next-js-with-wordpress-part-2-blog-post.png)

In [part one of using WordPress as a headless CMS with Next.js](https://robkendal.co.uk/blog/configuring-wordpress-as-a-headless-cms-with-next.js), we looked at the basics of setting up a WordPress instance so that we can access Posts and Pages and custom content via GraphQL. We also created a new Next.js app using the `create-next-app` tool.

For part two in the series, we're going to take those starting bases and connect the dots to supply content data from WordPress via the WPGraphQL plugin and access it in our Next.js project.

## Cleaning up the new Next.js project

Out of the box, the `create-next-app` provided by Next.js adds in a lot of helpful stuff as a starter for ten. However, we can remove some of the cruft to get us down to a basic build and limit any possible confusion.

### Files to delete

Open up the project from part one in VS Code (or your favourite IDE) and delete the following files and folders:

* /pages/api
* /pages/api/hello.js

### Files to edit

Next, we need to amend the `/pages/index.js` file. This is the main entry point, our home page, for our app. At the moment, it's crammed full of Next.js guides and links and other helpful, but unwanted markup, so let's clear it out.

Open up `/pages/index.js` and locate the `<main>` element in the component. Replace everything between the open `<main>` and closing `</main>` with the following:

```html
    <h1 className={styles.title}>Welcome to our demo blog!</h1>
    
    <p>
    	You can find more articles on the{' '}
    	<Link href='/blog'>
    		<a>blog articles page</a>
    	</Link>
    </p>
```

If you've used React Router, you might be familiar with the rather unique-looking way that we're linking to the `/blog` page. Next.js uses a similar internal routing component as React Router to link to internal pages, it looks like this:

```html
    <Link href='/blog'>
    	<a>blog articles page</a>
    </Link>
```

You can [read more about the Next.js Link element](https://nextjs.org/docs/api-reference/next/link "Next.js Link element") here, but the essence is that you need to declare the `<Link>` component and add a `href="/link-to-your-page"` attribute with the path to where you want to link to. Finally, you need to add a single `<a>` anchor element with whatever name you want to use for the link.

**Note:** you should add any class names or other typical anchor attributes you wish to the `<a>` tag _not_ the `<Link>` component.

One last thing to do here and that's **import the `Link` component**. Add the following to the top of the `/pages/index.js` file:

    import Link from 'next/link';

With that done, the entire `/pages/index.js` file should look like this:

    import Head from 'next/head';
    import Link from 'next/link';
    import styles from '../styles/Home.module.css';
    
    export default function Home() {
      return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>Welcome to our demo blog!</h1>
    
            <p>
              You can find more articles on the{' '}
              <Link href='/blog'>
                <a>blog articles page</a>
              </Link>
            </p>
          </main>
    
          <footer className={styles.footer}>
            <a
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Powered by{' '}
              <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
            </a>
          </footer>
        </div>
      );
    }

### Files to add

Of course, we need a couple more files that we'll build out over the course of the article. These will handle our blog post routing and data handling, interacting with our WordPress backend.

Add the following folders and files within them:

* Folder `/lib` - put this in the root of the project. This will hold any utility files and specifically our API file that will talk to WordPress.
* File `/lib/api.js` - this will handle our GraphQL queries and data fetching.
* Folder `/pages/blog` - nothing fancy here, just a folder to hold our blog pages.
* File `/pages/blog/index.js` - when people visit a route like `https://somedomain.co.uk/blog/` this is the page that will serve that request.
* File `/pages/blog/[slug].js` -  similar to the above, this rather weird looking page will handle individual blog pages, e.g. a domain like `https://yourdomain.com/blog/an-interesting-article/.`
* File `/styles/Blog.module.css` - this is a standard CSS file that will hold styles for our blog list items.
* File `/.env.local` - an environment variable file to hold

That odd looking file name, `[slug].js` looks really unfamiliar, but it's how Next.js determines dynamic routes within a folder.

We'll cover that next.

## Dynamic routing in Next.js

Before we start building out our new pages, it'll be helpful to quickly highlight how dynamic routing in Next.js works.

Out of the box, without doing anything fancy, Next.js will try to match any route you throw at it to a `.js` file that it finds under the `/pages` folder in your project.

For example:

* `/` will match `/pages/index.js`
* `/blog/` will match `/pages/blog.js` or `/pages/blog/index.js`
* `/contact/thanks` will match `/pages/contact/thanks.js`

However, when it comes to dynamic routes, such as a blog post or product page, we might have one physical page file that acts as a template of sorts, handling an unknown amount of routes.

For this, Next.js will match a filename in the format `[param]`. So, in our case above where we have the file path `/pages/blog/[slug].js`, Next.js will call the `[slug].js` page for the following routes:

* `/blog/my-awesome-blog-post`
* `/blog/another-great-post-title`
* `/blog/some-final-title-here`
* ...and so on.

You can call this dynamically routed file whatever you like between the `[` and `]` characters, but you'll be referencing this name inside the file (as you'll soon see), so it makes sense to call it something meaningful. In our case 'slug' is the terms that WordPress uses, so we'll leave it as that.

It's worth looking at the [official Next.js documentation on dynamic routing](https://nextjs.org/docs/routing/dynamic-routes "Official documentation on Next.js dynamic routing") to familiarise yourself with the syntax and conventions to apply them to your app/site.

## Fetching data with the api.js file

Now for the real meat and potatoes of the article: fetching data!

There's no right way to build out your files in a project like this, but I tend to prefer building things in a least-dependent to most-dependent order. In our case, the data-fetching isn't dependent on anything else, but the UI-layer depends on this, so it makes sense to start here.

### Dealing with environment variables

Some things, like global variables that might change between environments are best stored in (funnily enough) environment variable files, usually created as `.env` files in the root of your project.

Since we've already created one such file, let's populate it with our WordPress GraphQL URL. Open up the file `/.env.local` and add the following line:

    WP_API_URL=http://demo.robkendal.co.uk/graphql/

> **Note:** you can use my URL as above, but note that a) it might be taken down without notice, and b) you may not get the results you want. It's always best to get your own WordPress instance. Either way, you'll want to add in the url in the format `http://your-domain-here.com/graphql/`

Next.js comes with built in support for environment variable files. You just have to add a `.env.local` file in the root of your file and add in what you need. As always, the Next team have [great docs on environment variables]() for you to peruse.

### Adding the general fetching function

Open up the `/lib/api.js` file and let's start adding in our data-fetching magic. The first thing is to add the general fetch function that will handle the talking to our WordPress GraphQL endpoint.

At the top of the file, we'll reference our API URL we just added into the `.env` file, followed by the `fetchAPI` function.

    const API_URL = process.env.WP_API_URL;
    
    async function fetchAPI(query, { variables } = {}) {
      // Set up some headers to tell the fetch call 
      // that this is an application/json type
      const headers = { 'Content-Type': 'application/json' };
      
      // build out the fetch() call using the API_URL 
      // environment variable pulled in at the start
      // Note the merging of the query and variables
      const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables })
      });
    
      // error handling work
      const json = await res.json();
      if (json.errors) {
        console.log(json.errors);
        console.log('error details', query, variables);
        throw new Error('Failed to fetch API');
      }
      return json.data;
    }

This is an asynchronous function as we need to wait for the `fetch()` call to complete. The rest of the comments should be enough to walk you through the file.

Believe it or not, this is the most complex function in our API file. Whilst not the longest, it does have more moving parts. The upcoming functions we'll be defining next largely outline GraphQL queries that the `fetchAPI()` function here will handle.

### Add function to get blog post listings

From here on out, this is where we'll define our GraphQL queries that will shape the data we want back from WordPress. 

> **Quick tip:** although handy to remember all this stuff, the best approach to defining GraphQL queries is to fire up the GraphiQL plugin on the WordPress instance, write your query, test the results and then copy it into your API file. That way, you know it works and hopefully eliminate errors along the way.

As far as queries go, this is quite straightforward. We're looking at all posts, grabbing the first 20 results (for brevity), and ordering them by descending date order.

With these exception of the `extraPostInfo` ACF custom fields [we defined in part one of this series](https://robkendal.co.uk/blog/configuring-wordpress-as-a-headless-cms-with-next.js "Part one of configuring WordPress as a headless CMS with Next.js"), the rest of the data is standard WordPress fare. 

    export async function getAllPosts(preview) {
      const data = await fetchAPI(
        `
        query AllPosts {
          posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
            edges {
              node {
                id
                date
                title
                slug
                extraPostInfo {
                  authorExcerpt
                  thumbImage {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
        `
      );
    
      return data?.posts;
    }

Once the query returns, we use the [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining "Optional chaining operator") to return the `posts` array or `undefined` if that is unavailable.

### Add function to get all blog post slugs

### Add function to get an individual blog post's data

## Listing blog posts from WordPress using GraphQL

Now the exciting part: building out the blog listing page!

### Module styling with `.module.css` files

### Accessing external data in Next.js using `getStaticProps()`

## Handling dynamic routes like blog posts

## What's next in the series

Coming up next, in part three, we'll be creating an XML RSS feed as part of the deployment process so that we can publish and syndicate our posts across the web.

This is a common feature on just about any blog out there on the web, but it's not as straightforward as you may think when using Next.js. Don't worry though, it's all covered in part three.