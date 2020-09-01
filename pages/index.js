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
          <h1 className=''>A freelance web developer who knows his stuff</h1>
          <p>
            If you've been searching for a{' '}
            <strong>
              freelance web developer who knows WordPress and front end web
              development inside and out
            </strong>
            , you've come to the right place.
          </p>
          <p>With me, you'll always get:</p>
          <ul className='unstyled'>
            <li className='flex has-padding-bottom-sm'>
              <span class='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                A fullstack developer with 15+ years development experience.
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span class='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                A reliable development professional who will always give you
                straightforward, honest advice.
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span class='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                Marketing website design and development driven by your business
                growth goals
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span class='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                Award-winning marketing and Search Engine Optimisation (SEO)
                knowledge and support
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span class='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                Expert web development services using forward-thinking
                technologies such as Gatsby.js, Next.js, WordPress REST API,
                GraphQL and the Jamstack.
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span class='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                Enterprise-level HubSpot capaign management and integrations
                (including WordPress)
              </span>
            </li>
            <li className='flex has-padding-bottom-sm'>
              <span class='fa fa-thumbs-up has-text-secondary has-padding-right-sm'></span>
              <span>
                Help and support launching super fast, accessible, static
                websites that rank well on search engines
              </span>
            </li>
          </ul>
          <p>
            Talking about your project costs nothing; choosing the right partner
            to deliver it could save you a fortune!
          </p>
          <br />
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
        <div className='column is-5 has-text-centered'>
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
              playsInline=''
              autoPlay=''
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
            <h2 className='is-white'>WordPress Consultancy</h2>
            <p>
              I specialise in delivering WordPress websites for clients ranging
              from small local businesses, through to enterprise level
              organisations.
            </p>
            <p>
              I offer WordPress consultancy services to help with a range of
              projects and needs including:
            </p>
            <ul style={{ lineHeight: '1.7' }}>
              <li>
                Building enterprise-level marketing-led business websites using
                WordPress.
              </li>
              <li>
                Creating an ecommerce platform with WordPress, WooCommerce,
                Snipcart or Stripe.
              </li>
              <li>WordPress migrations between hosts</li>
              <li>HubSpot to WordPress integrations and campaign setups</li>
              <li>
                Help and support with using WordPress as a headless CMS with
                React and Gatsby or Next
              </li>
              <li>
                Designing, developing and deploying static frontend websites
                using a WordPress-powered backend on Netlify, Vercel, or the AWS
                platform
              </li>
              <li>
                Improving WordPress performance and Search Engine Optimisation
                (SEO)
              </li>
              <li>
                UX or UI consultancy support to plan out your WordPress-powered
                website
              </li>
            </ul>
            <p>
              Let's discuss your WordPress project and find out how I can help.
            </p>
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

      <section className='section is-md'>
        <div className='container'>
          <h2 className='has-text-centered'>Need some help?</h2>
          <p className='has-text-centered'>
            Whether you need a freelance web developer for your website project,
            or you're getting into code and need some personal support and
            mentorship, it costs absolutely nothing to start the conversation.
          </p>
          <br />
          <div className='has-text-centered'>
            <Link href='/contact'>
              <a className='button is-primary has-icon is-medium'>
                <span>discuss your project</span>
                <span className='icon fas fa-chevron-circle-right'></span>
              </a>
            </Link>
            <Link href='/mentorship'>
              <a className='button is-default has-icon is-medium'>
                <span>discover mentorship</span>
                <span className='icon fas fa-chevron-circle-right'></span>
              </a>
            </Link>
          </div>
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
