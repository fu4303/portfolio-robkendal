// components
import Layout from '../../components/Layout';
import DateDisplay from '../../components/DateDisplay';
import CommentsLoader from '../../components/CommentsLoader';

// helpers
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <Layout
      description={postData.description}
      image={postData.image}
      title={postData.title}
      url={`blog/${postData.id}`}
    >
      <>
        <article className='container article'>
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
                    title='the front end podcast website'
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
        </article>
        <div className='container'>
          <CommentsLoader pageUrl={postData.id} pageId={postData.id} />

          <h2 className='title is-size-3'>Read more</h2>
        </div>
      </>
    </Layout>
  );
}

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
  return {
    props: {
      postData
    }
  };
}
