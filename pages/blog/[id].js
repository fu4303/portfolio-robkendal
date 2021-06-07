import Link from 'next/link';
import { useEffect } from 'react';
import Prism from 'prismjs';

// components
import Layout from '../../components/Layout';
import DateDisplay from '../../components/DateDisplay';
import CommentsLoader from '../../components/CommentsLoader';
import Webmentions from '../../components/Webmentions';

// helpers
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData
} from '../../lib/posts';

export default function Post({ postData, allRelatedPostsData }) {
  const adHtml = `
    <div
        data-ea-publisher="robkendal-co-uk"
        class="horizontal adaptive flat"
        data-ea-type="image"
        id="ea_text_id_${postData.id}"
        data-ea-keywords="${postData.tags.join('|')}"
        data-ea-manual="true"
    />
  `;

  useEffect(() => {
    // apply code syntax highlighting
    Prism.highlightAll();

    // add ethical ads display to loaded content
    function applyAds() {
      const articleContent = document.querySelector('#article-content .post-content');
      const selectParagraph = articleContent.querySelectorAll('p')[3];

      selectParagraph.insertAdjacentHTML("afterend", adHtml);

      try {
        if(ethicalads) {
          ethicalads.load();
        }  
      } catch (error) {
        // ethical ads not found
      }      
    }
    window.addEventListener('load', applyAds);    

    return () => window.removeEventListener('load', applyAds);
  }, []);

  return (
    <Layout
      description={postData.description}
      image={postData.featuredimage}
      title={postData.title}
      url={`blog/${postData.id}`}
    >
      <>
        <article className='container article' id="article-content">          
          <div className='post-meta'>
            <DateDisplay
                dateString={postData.date}
                className='has-text-grey-light'
            />
            <h1>{postData.title}</h1>
          </div>
          <div
              className='post-content'
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
        <div className="container">
          <div className='author-box section'>
            <div className='media is-small'>
              <div className='media-left'>
                <figure>
                  <img
                    src='/img/38687284.jpg'
                    alt='Rob Kendal'
                    className='avatar fancy-img'
                  />
                </figure>
              </div>
              <div className='media-content'>
                <h3 className='subtitle is-size-4'>About Rob Kendal</h3>
                <p>
                  Rob Kendal is an award-winning freelance front-end developer
                  and marketer who likes simple, organised thinking and making
                  clever things. You can find him working on some things on{' '}
                  <a
                    href='https://github.com/bpk68'
                    title="rob kendal's github profile"
                  >
                    GitHub
                  </a>{' '}
                  and recording podcasts, such as{' '}
                  <a
                    href='https://thefrontendpodcast.site'
                    title='The Front End podcast website'
                  >
                    The Front End
                  </a>
                  . Say hi and{' '}
                  <a href='https://twitter.com/kendalmintcode'>
                    follow me on twitter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <Webmentions url={`blog/${postData.id}`} />
          <CommentsLoader pageUrl={postData.id} pageId={postData.id} />

          <h2 className='title is-size-3'>Read more</h2>
          {allRelatedPostsData.map(
            ({ id, date, title, featuredimage, description, tags }) => (
              <div className='' key={`${id}_${date}_1`}>
                <div className='media article-list-item'>
                  <div className='media-left'>
                    <Link href={`/blog/${id}`}>
                      <a>
                        <img src={featuredimage} alt={title} className='' />
                      </a>
                    </Link>
                  </div>
                  <div className='media-content'>
                    <DateDisplay
                      dateString={date}
                      className='has-text-grey-light has-text-uppercase'
                    />
                    <h3 className='subtitle is-size-4'>
                      <Link href={`/blog/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <p>{description}</p>
                    <p className='tags'>
                      {tags.length > 0 &&
                        tags.map(tag => (
                          <Link href={`/tags/?tag=${tag}`} key={tag}>
                            <a>
                              <small>#{tag}</small>
                            </a>
                          </Link>
                        ))}
                    </p>
                    <p className='has-text-right'>
                      <Link href={`/blog/${id}`}>
                        <a>read the full article</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </>
    </Layout>
  );
}

const hasRelatedTags = (mainPostTags, loopPostTags) => {
  let matchingTags = loopPostTags.length > 0;

  matchingTags = loopPostTags.some(tag => mainPostTags.includes(tag));

  return matchingTags;
};

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    fallback: false,
    paths
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  const allPostsData = await getSortedPostsData();
  let allRelatedPostsData = [];

  try {
    allRelatedPostsData = allPostsData
      .filter(
        post =>
          post.id !== params.id && hasRelatedTags(postData.tags, post.tags)
      )
      .slice(0, 3);
  } catch (err) {
    allRelatedPostsData = [];
  }

  return {
    props: {
      postData,
      allRelatedPostsData
    }
  };
}
