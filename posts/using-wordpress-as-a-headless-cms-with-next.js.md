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

In [part one of using WordPress as a headless CMS with Next.js](https://robkendal.co.uk/blog/configuring-wordpress-as-a-headless-cms-with-next.js), we looked at the basics of setting up a WordPress instance so that we can access Posts and Pages and custom content via GraphQL using the Next.js framework. We also created a new Next.js app using the `create-next-app` tool.

For part two in the series, we're going to take those starting bases and connect the dots to supply content data from WordPress via the WPGraphQL plugin and access it in our Next.js project.

_If you like this article, you'll love the other helpful content I post on Twitter._ [_Find me on Twitter @kendalmintcode_](https://twitter.com/kendalmintcode "Find me on Twitter @kendalmintcode") _and say hi._

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
* File `/styles/Blog.module.css` - a modular

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

From here on out, we'll define our GraphQL queries that will shape the data we want back from WordPress.

> **Quick tip:** the best approach to defining GraphQL queries is to fire up the GraphiQL plugin on the WordPress instance, write your query, test the results and then copy it into your API file. That way, you know it works and hopefully eliminate errors along the way.

As far as queries go, this is quite straightforward. We're looking at all posts, grabbing the first 20 results (for brevity), and ordering them by descending date order.

With these exception of the `extraPostInfo` ACF custom fields [we defined in part one of this series](https://robkendal.co.uk/blog/configuring-wordpress-as-a-headless-cms-with-next.js "Part one of configuring WordPress as a headless CMS with Next.js"), the rest of the data is standard WordPress data, such as title, id and the slug of the post.

    // Notice the 'export' keyword here. We'll be calling this function
    // directly in our blog/index.js page, so it needs to be exported
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

You can see that this is a really simple function. There's only two real operations here: 1 to call the `fetchAPI()` function we defined previously; and 2 to return the data. The largest part of this function is the GraphQL query that Next.js will be passing to WordPress to retrieve our Posts data.

> GraphQL is one of those technologies that's quite simple to get to grips with on the surface, but has a great deal of depth if you want to do more complex queries with multiple parts and fragments. I'd recommend having a [look around the official GraphQL docs](https://graphql.org/ "Official GraphQL documentation") and playing with some of the queries in your WordPress GraphQL playground.

Here's how the same query looked in GraphiQL when I built it, and the results that it returned:

![All WordPress posts GraphQL query](/img/nextjs-article-graphql-query.png)

### Add function to get all blog post slugs

Having fetched a list of blog posts from WordPress with some specific data, now we want to get a list of all possible Posts, but _only_ the slug of each Post. 

This function, `getAllPostsWithSlug()` will be used on our individual blog article page, currently located at `/blog/[slug].js`. 

I'll go into this in more detail when we get to the frontend component, but for now, it's enough to understand that we need to get a list of matching slug values for Next.js to match an individual one (i.e. the one you're visiting) against. That's where this function comes in.

Still in the `/lib/api.js` file, define a new exported async function, `getAllPostsWithSlug()` and populate it as follows:

    export async function getAllPostsWithSlug() {
      const data = await fetchAPI(`
        {
          posts(first: 10000) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `);
      return data?.posts;
    }

These sorts of queries will start to look more common and familiar the more that you build them out. You'll start to notice a pattern too where we define a content type (e.g. `posts`), add an optional filter (e.g. `(first: 10000)`), then look for `edges` and a `node` within that (e.g. the individual content type item) and properties of that content type (e.g. `slug`). 

### Add function to get an individual blog post's data

This next GraphQL query is going to be used to pull in data from an individual Post item. It'll be called when viewing a single blog article on the `[slug].js` page. 

Under the last query, define a new exported async function called `getPost()`. It should look like this:

    export async function getPost(slug) {
      const data = await fetchAPI(
        `
        fragment PostFields on Post {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
        query PostBySlug($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
            ...PostFields
            content
          }
        }
      `,
        {
          variables: {
            id: slug,
            idType: 'SLUG'
          }
        }
      );
    
      return data;
    }

This is the longest query in our `api.js` file and it looks a little different, so let's review it. 

### GraphQL fragments

The very first part is called a [fragment](https://graphql.org/learn/queries/#fragments "GraphQL fragment documentation") and it's decorated with the `fragment` keyword in the query. 

    fragment PostFields on Post {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }

GraphQL fragments give us the ability to break larger, more complex queries into smaller, reusable parts. 

For example, you might have a couple of queries as part of your call, but they both use the same Post data. Rather than have to define the same fields on each query, you can define a single fragment, and then use the spread operator syntax to pull those fields in to each separate query. 

We've done that here in the `PostBySlug` query that we defined:

    query PostBySlug($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
            ...PostFields
            content
          }
        }

Notice the `...PostFields` fragment that we've referenced. You could also remove the fragment and define the query like this:

    query PostBySlug($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
            title
          	excerpt
          	slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            content
          }
        }

### GraphQL variables

The other interesting thing in our query is the use of variables to filter the specific Post we want to fetch data about. 

Focussing on the main part of the query for now, this part:

    `
      query PostBySlug($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
            ...PostFields
            content
          }
        }
      `,
        {
          variables: {
            id: slug,
            idType: 'SLUG'
          }
        }

You can see the GraphQL variables defined with a '$' dollar symbol. In the first line, `query PostBySlug($id: ID!, $idType: PostIdType!)` we're defining our query name and the variables we'll be passing in, and their types. 

The variable types are dictated by the GraphQL schema. You can view the schema on the WordPress GraphiQL explorer, but it's a bit beyond the scope of this article. 

Next, we pass those variable placeholders in to filter a single, specific Post item using `post(id: $id, idType: $idType)`. 

Of course, now we need to actually pass in the variable _values_, which is where the second argument of the `fetchAPI()` method comes in. We pass in a plain JavaScript object with a `variables` property that contains all our GraphQL variables and their values. 

In this case, for `id` we're using the `slug` argument passed to the containing function, `getPost(slug)`. And for `idType` we're using a simple string value of `SLUG`. 

With all our queries defined, tested and verified in WordPress GraphiQL, it's on to the frontend components and pages.

## Listing blog posts from WordPress using GraphQL

Now the exciting part: building out the blog listing page! Next.js is built on React, so there shouldn't be too much out of the ordinary here. 

Open up the `/pages/blog/index.js` file and let's kick things off with the imports at the top:

    import Head from 'next/head';
    import Link from 'next/link';
    
    // data
    import { getAllPosts } from '../../lib/api';
    
    // styles
    import styles from '../../styles/Home.module.css';
    import blogStyles from '../../styles/Blog.module.css';

You can see that we're pulling in the `Head` and `Link` components from Next.js (more on `Head` in a moment), followed by our data handling `getAllPosts` function. Right after those, we're adding two style module files. 

These are essentially modular, [component-level CSS files that Next.js gives support for](https://nextjs.org/docs/basic-features/built-in-css-support "Next.js built in CSS support") right out of the box. We'll also discuss those in a moment. 

Cool, imports done. Next thing is to outline the main Blog component:

    const Blog = ({ allPosts: { edges } }) => (
      <div className={styles.container}>
        <Head>
          <title>Blog articles page</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
    
        <main className={styles.main}>
          <h1 className={styles.title}>Latest blog articles</h1>
          <hr />
          <section>
            {edges.map(({ node }) => (
              <div className={blogStyles.listitem} key={node.id}>
                <div className={blogStyles.listitem__thumbnail}>
                  <figure>
                    <img
                      src={node.extraPostInfo.thumbImage.mediaItemUrl}
                      alt={node.title}
                    />
                  </figure>
                </div>
                <div className={blogStyles.listitem__content}>
                  <h2>{node.title}</h2>
                  <p>{node.extraPostInfo.authorExcerpt}</p>
                  <Link href={`/blog/${node.slug}`}>
                    <a>Read more ></a>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    );

You'll see we're referencing a specific prop, `allPosts` using the destructuring syntax. This will be a collection of all available Posts returned from the WordPress GraphQL query we defined earlier. 

The `allPosts` prop is automatically provided to our Blog component via the `getStaticProps` function that we'll define later in the article. 

The `<Head></Head>` component allows us to define meta data for this page and is a built in Next.js feature, more on this in a moment.

Similarly, the `className={styles.main}` syntax is how we reference styles from our CSS modules in Next.js. Again, we'll cover that shortly. 

The main part of the Blog component is the loop that starts with `{edges.map(({ node }) =>`. It's not the nicest of naming structures, but we're effectively `edges` is an array of `node` items, each `node` represents a WordPress Post item.

Each node returned from the `getAllPosts()` API function will be structured similar to this:

    {
      "node": {
        "id": "cG9zdDoyOA==",
        "date": "2020-07-09T07:18:42",
        "title": "A third post with an interesting name",
        "slug": "a-third-post-with-an-interesting-name",
        "extraPostInfo": {
          	"authorExcerpt": "some excerpt details here",
          	"thumbImage": {
      			"mediaItemUrl": "http://demo.robkendal.co.uk/wp-content/uploads/2020/07/v7jgc6a3zn951.jpg"
      		}
      	  }
      	}
      },

Knowing this information, it becomes easier to pull out the relevant bits of content we need and inject them into our React JSX, like this:

    {
      edges.map(({ node }) => (
          <div className={blogStyles.listitem} key={node.id}>
            <div className={blogStyles.listitem__thumbnail}
              <figure>
                <img
                  src={node.extraPostInfo.thumbImage.mediaItemUrl}
                  alt={node.title}
                />
              </figure>
            </div>
            <div className={blogStyles.listitem__content}>
              <h2>{node.title}</h2>
              <p>{node.extraPostInfo.authorExcerpt}</p>
              <Link href={`/blog/${node.slug}`}>
                <a>Read more ></a>
              </Link>
            </div>
          </div>
        ))
     }

### Meta data with Next.js Head

### Module styling with `.module.css` files

background in here...

With that background in mind, we can populate the `/styles/Blog.module.css` with some basic styles for the blog list. Open up the file and copy in the following:

    .listitem {
      padding: 0.5em 0 1em;
      margin: 1em auto 0.5em;
      display: flex;
      max-width: 60%;
      border-bottom: 1px solid hsl(0, 0%, 89%);
    }
    
    .listitem__thumbnail img {
      max-width: 10em;
    }
    
    .listitem__content h2 {
      margin-top: 0;
    }
    
    .article {
      max-width: 75%;
      margin: 1em auto;
    }
    
    .postmeta {
      text-align: center;
      font-size: 1.5rem;
    }
    
    .article img {
      max-width: 60%;
      height: auto;
    }
    

It's not super imperative to have these styles in place and feel free to amend them. They do stop things looking a little wild though. 

### Static generation and handling external data

Next.js does a [fantastic job of fetching data](https://nextjs.org/learn/basics/data-fetching/two-forms "Next.js data fetching") and baking it into your pages at build time. It offers two main ways to grab this data:

1. Fetching data at build time via `getStaticProps()` - this is known as **static generation.**
2. Fetching data at render time via `getServerSideProps()` - this is known as **server side rendering or SSR**

> There is a third, sort of hybrid way, which is where you have a static-generated front end that calls for data once the page has rendered. It's called **client-side rendering**. It's not exactly an edge case, but it offers a mix of the main two methods mentioned above and might be used on, say, a dashboard page. 

Most of the time, you'll want to strive for **static generation** using `getStaticProps()` because it offers the best performance for the end user and really takes advantage of the whole Jamstack, static site generation approach. 

This is especially key if we're using WordPress because WordPress is already a server-side rendered website out of the box. Part of the reason to decouple WordPress from its own frontend with Next.js is to remove this server business and statically generate our frontend website.

If you're unsure which approach to take you can ask the question: "Can this page be pre-rendered **ahead** of a user's request?" If your answer is 'yes', then static generation is the right choice. 

### Accessing external data in Next.js using `getStaticProps()`

Now that we're a bit clearer on Next.js and its static generation with external data-fetching, we can implement Next's `getStaticProps` method in our `/blog/index.js` page.

Add the following implementation of `getStaticProps` underneath the default export of our Blog component:

    export async function getStaticProps() {
      const allPosts = await getAllPosts();
      return {
        props: {
          allPosts
        }
      };
    }

And just how simple is that?! This function will be called by Next.js during build time to fetch our data from WordPress, passing it into the `props` of our main Blog component. 

You could absolutely do all the data fetching right here without issue. However, we've abstracted at lot of the grunt work into our `/lib/api.js` for several reasons:

1. It reduces the length of our components.
2. It abstracts the data handling responsibility away from the component (whose job isn't really fetching data).
3. It cleans up our components, making them much more maintainable and readable.
4. It reduces duplication, especially around the main `fetchAPI()` function.

It's important to remember that `getStaticProps()` **has to be named exactly so**. It also **has to return a `props: {}` object**. 

You can read more about static generation and `getStaticProps()` in the [official Next.js documentation](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation "Next.js static generation documentation"). 

## Handling dynamic routes like blog posts

## Running the website locally

## What's next in the series

Coming up next, in part three, we'll be creating an XML RSS feed as part of the deployment process so that we can publish and syndicate our posts across the web.

This is a common feature on just about any blog out there on the web, but it's not as straightforward as you may think when using Next.js. Don't worry though, it's all covered in part three.