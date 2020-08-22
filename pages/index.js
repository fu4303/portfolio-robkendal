import Link from 'next/link';

// components
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import DateDisplay from '../components/DateDisplay';

// helpers
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div className='columns is-vcentered'>
        <div className='column is-6 is-offset-1'>
          <h1 className=''>Welcome to the home page</h1>
          <p>
            this is a big paragraph of text explaining things about WordpRess
            development. It goes on a little bit but it illustrates a pointn you
            want to make with a slightly longer paragraph you see
          </p>
          <ul>
            <li>This is point one</li>
            <li>This is a slightly longer point</li>
            <li>This is an even longer point</li>
            <li>This is a slightly longer point</li>
            <li>This is an even longer point</li>
            <li>This is point one</li>
            <li>This is an even longer point</li>
          </ul>
          <p>
            this is a big paragraph of text explaining things about WordpRess
            development. It goes on a little bit but it illustrates a pointn you
            want to make with a slightly longer paragraph you see
          </p>
          <p>
            <Link href='/contact'>
              <a className='button is-primary has-icon is-medium'>
                <span>hire me</span>
                <span className='icon fas fa-chevron-circle-right'></span>
              </a>
            </Link>
            <Link href='/blog'>
              <a className='button is-default has-icon is-medium'>
                <span>read my articles</span>
                <span className='icon fas fa-chevron-circle-right'></span>
              </a>
            </Link>
          </p>
        </div>
        <div className='column is-4 is-offset-1'>
          <img
            src='/img/rob-kendal.jpeg'
            alt='Rob Kendal freelance wordpress developer'
            className='fancy-img is-lg filter'
          />
        </div>
      </div>

      <section className='section is-secondary is-lg'>
        <div className='columns is-vcentered'>
          <div className='column is-5'>
            <video
              playsinline=''
              autoplay=''
              muted=''
              loop=''
              poster='/img/videos/wp-demo.jpg'
              className='img-present'
            >
              <source src='/img/videos/wp-demo.webm' type='video/webm' />
              <source src='/img/videos/wp-demo.mp4' type='video/mp4' />
            </video>
          </div>
          <div className='column is-7 has-padding-left-lg'>
            <h2 className='is-white'>WordPress development</h2>
            <p>
              this is a big paragraph of text explaining things about WordpRess
              development. It goes on a little bit but it illustrates a pointn
              you want to make with a slightly longer paragraph you see
            </p>
            <ul>
              <li>This is point one</li>
              <li>This is a slightly longer point</li>
              <li>This is an even longer point</li>
              <li>This is a slightly longer point</li>
              <li>This is an even longer point</li>
              <li>This is point one</li>
              <li>This is an even longer point</li>
            </ul>
            <p>
              <Link href='/contact'>
                <a className='button is-default has-icon is-medium'>
                  <span>hire me</span>
                  <span className='icon fas fa-chevron-circle-right'></span>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className='section is-md'>
        <h2 className='has-text-centered'>Trusted by brands big and small</h2>
        <p className='has-text-centered'>
          I've been honoured to work with local and national brands' to build
          marketing websites powered by WordPress
        </p>
        <div className='columns'>
          <div className='column is-2 is-offset-1'>
            <img src='/img/logos/nhs-logo.png' alt='NHS logo' />
          </div>
          <div className='column is-2'>
            <img src='/img/logos/hubspot-logo.png' alt='HubSpot logo' />
          </div>
          <div className='column is-2'>
            <img
              src='/img/logos/citizens-advice-logo.png'
              alt='Citizens Advice logo'
            />
          </div>
          <div className='column is-2'>
            <img
              src='/img/logos/enterprise-partnership.png'
              alt='Yorkshire Enterprise Partnership logo'
            />
          </div>
          <div className='column is-2'>
            <img
              src='/img/logos/north-yorkshire-council.png'
              alt='North Yorkshire County Council logo'
            />
          </div>
        </div>
      </section>

      <section className='section is-md'>
        <div className='container'>
          <h2 className='has-text-centered'>Don't take my word for it</h2>
          <p className='has-text-centered'>
            I've been trusted by UK-wide and local Yorkshire businesses for
            years, <br />
            here's what they say about my work.
          </p>
          <br />
          <Testimonials />
        </div>
      </section>

      <section className='section is-primary is-lg'>
        <h2 className='has-text-centered is-white'>Latest articles</h2>
        <br />
        <div className='columns is-multiline'>
          {allPostsData
            .slice(0, 7)
            .map(({ id, date, title, featuredimage, description }) => {
              const isFeatured =
                allPostsData.map(post => post.id).indexOf(id) <= 2;
              return (
                <div
                  className={`column ${isFeatured ? 'is-4' : 'is-3'}`}
                  key={id}
                >
                  <div className='card article-item'>
                    <div className='card-image'>
                      <Link href={`/blog/${id}`}>
                        <a>
                          <img
                            src={featuredimage}
                            alt={title}
                            className='unstyled'
                          />
                        </a>
                      </Link>
                    </div>
                    <div className='card-content'>
                      <DateDisplay
                        dateString={date}
                        className='has-text-grey-light has-text-uppercase'
                      />
                      <h3 className='subtitle is-size-4'>
                        <Link href={`/blog/${id}`}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <p>
                        {isFeatured
                          ? description
                          : description.split(' ').slice(0, 15).join(' ') +
                            '...'}
                      </p>
                      <p className='has-text-right'>
                        <Link href={`/blog/${id}`}>
                          <a>read the full article</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <br />
        <p className='has-text-centered'>
          <Link href='/blog'>
            <a className='button is-default has-icon is-medium'>
              <span>read more</span>
              <span className='icon fas fa-chevron-circle-right'></span>
            </a>
          </Link>
        </p>
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
