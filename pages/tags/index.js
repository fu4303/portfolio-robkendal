import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import Layout from '../../components/Layout';
import DateDisplay from '../../components/DateDisplay';

// helpers
import { getSortedPostsData } from '../../lib/posts';

export default function Tag({ allPostsData }) {
  const router = useRouter();

  return (
    <Layout
      title='Helpful blog articles about WordPress, Jamstack & frontend development | Rob Kendal, freelance developer'
      description='Read articles from Rob Kendal about WordPress, Jamstack, frontend development and JavaScript'
    >
      <h1 className='has-text-centered'>All articles in #{router.query.tag}</h1>
      <section>
        <div className='container'>
          {allPostsData
            .filter(({ tags }) => tags.includes(router.query.tag))
            .map(({ id, date, title, featuredimage, description, tags }) => (
              <div className='' key={`${id}_${date}`}>
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
                          <Link href={`/tags/?tag=${tag}`}>
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
            ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
