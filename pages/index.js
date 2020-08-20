import Link from 'next/link';

// components
import Layout from '../components/Layout';

// helpers
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <h1>Welcome to the home page</h1>
      <img src='/img/rob-kendal.jpg' alt='' className='fancy-img' />
      <section>
        <h2>Latest articles</h2>
        {allPostsData
          .slice(0, 5)
          .map(({ id, date, title, featured, featuredimage, description }) => (
            <div key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {date} <br />
              {description} <br />
              This post is featured? {featured ? 'yes' : 'no'} <br />
              <img src={featuredimage} alt={title} />
            </div>
          ))}
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
