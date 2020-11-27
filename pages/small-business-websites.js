import Link from 'next/link';

// components
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import ServiceBlock from '../components/ServiceBlock';

const SmallBusinessWebsites = () => {
  return (
    <Layout
      title='Freelance web designer | Freelance web developer Selby | Rob Kendal, small business websites'
      description='As a freelance web designer based in Selby, south of York, I build marketing websites for small businesses that generate leads'
    >
      <section className='section home-hero'>
        <div className='hero-left'>
          <h1>A freelance web developer for small business websites</h1>
          <p>
            If you've been searching for a <strong>freelance web developer</strong> based in York, that builds small business websites to generate 
            more leads for your business, then hello 👋🏻, I'm Rob.
          </p>
          <p>
            My small business wesite design services help in lots of ways:
          </p>
          <ul style={{ lineHeight: '1.9' }}>
            <li>
              You want to launch a new website for your business and need planning
              and development advice to get started.
            </li>
            <li>
              You're current website is not generating leads or performing as well as could be.
            </li>
            <li>
              You want to take your sales online with a conversion-focussed ecommerce website.
            </li>
            <li>
              You want to skyrocket your site's performance by developing a headless CMS solution that powers a static site 
              generator such as Gatsby or Next.js.
            </li>
            <li>
              You want simple, straightforward SEO advice to improve your search rankings.
            </li>
          </ul>
          <p>
            Tell me about your project and let's see how we can work together.
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
        <div className='hero-right'>
          <img
            src='/img/rob-kendal.jpg'
            alt='Rob Kendal freelance website developer'
            className='fancy-img is-lg filter'
          />
        </div>
      </section>

      <section className='section is-md has-border-top'>
        <h2 className='has-text-centered'>
          How I can help with your business website
        </h2>
        <p className='has-text-centered'>
          As an experienced freelance web designer, I have the expertise to assist with a range of small business website projects.
        </p>
        <br />
        <div className="columns is-centered is-multiline serviceblock-columns">
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="far fa-hand-pointer"
              title="Bespoke websites"
              blurb="A well-planned and well-designed custom website will work best for you business to generate more leads and delight customers."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-suitcase-rolling"
              title="Migrations &amp; moves"
              blurb="Don't be stuck with a sub-par website provider. Let me tackle the hard work and migrate you to a better hosting environment."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-cash-register"
              title="Ecommerce sites"
              blurb="If you want to sell online, you need an ecommerce website that's designed to convert customers and drive sales."
            />         
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-rocket"
              title="SEO &amp; marketing"
              blurb="Whether it's strategy, planning, or optimising an existing presence, my straightforward advice will help you climb those rankings."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-users"
              title="UX/UI consultancy"
              blurb="Simple advice on how to convert more leads from your website and how to improve your website for better customers experiences."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-clipboard-check"
              title="Website audits"
              blurb="If you want to know where you stand before you start, a thorough audit of your existing website helps power more informed decisions."
            />
          </div>
        </div>
        <br />
        <div className="has-text-centered">
          <Link href='/contact'>
            <a className='button is-primary has-icon is-large'>
              <span>book a free discovery call</span>
              <span className='icon fas fa-chevron-circle-right'></span>
            </a>
          </Link>
        </div>
      </section>

      <section className='section is-secondary'>
        <article className='home-section-wordpress media'>
          <figure className='media-left'>
            <img
              src='/img/example-shopify.png'
              alt='Example small business website displayed on a laptop'
              className='unstyled'
            />
            <img
              src='/img/react-logo-white.png'
              alt='React JS logo'
              className='unstyled'
            />
          </figure>
          <div className='media-content'>
            <h2 className='is-white'>Website development services</h2>
            <p>
              I specialise in delivering small business websites and website 
              consultancy services to a range of clients of all sizes.
            </p>
            <p>
              With me, as well as a reliable freelance web developer, you'll always
              get:
            </p>
            <ul className='unstyled'>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Straightforward knowledge and advice from a professional freelance developer more than 15 years in the business.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Honest, reliable suggestions that always keep your business in mind.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  An approach that is built upon marketing-led websites and driving leads for your business.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  First-class support from day 1: from planning, development, delivery and beyond!
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Simple marketing and Search Engine Optimisation (SEO) services set for growth.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Expert website design services and modern website development practices 
                  including, Next.js, GraphQL and the Jamstack for superb customer experiences.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Help and support launching super fast, accessible, static
                  websites that rank well on search engines.
                </span>
              </li>
            </ul>
            <p>Let's talk about your sall business website project and how we can hit your goals.</p>
            <p>
              <Link href='/contact'>
                <a className='button is-default has-icon is-medium'>
                  <span>discuss your project</span>
                  <span className='icon fas fa-chevron-circle-right'></span>
                </a>
              </Link>
            </p>
          </div>
        </article>
      </section>

      <section className='section is-md'>
        <h2 className='has-text-centered'>
          Brands of all sizes
        </h2>
        <p className='has-text-centered'>
          As a freelance web developer, I've loved working with some superb
          brands, nationally and local to York.
        </p>
        <div className='columns is-multiline'>
          <div className='column is-12-tablet is-4-desktop is-2-widescreen is-offset-1-widescreen has-text-centered'>
            <img src='/img/logos/nhs-logo.png' alt='NHS logo' />
          </div>
          <div className='column is-12-tablet is-4-desktop is-2-widescreen has-text-centered'>
            <img src='/img/logos/hubspot-logo.png' alt='HubSpot logo' />
          </div>
          <div className='column is-12-tablet is-4-desktop is-2-widescreen has-text-centered'>
            <img
              src='/img/logos/citizens-advice-logo.png'
              alt='Citizens Advice logo'
            />
          </div>
          <div className='column is-12-tablet is-4-desktop is-2-widescreen has-text-centered'>
            <img
              src='/img/logos/enterprise-partnership.png'
              alt='Yorkshire Enterprise Partnership logo'
            />
          </div>
          <div className='column is-12-tablet is-4-desktop is-2-widescreen has-text-centered'>
            <img
              src='/img/logos/north-yorkshire-council.png'
              alt='North Yorkshire County Council logo'
            />
          </div>
        </div>
      </section>

      <section className='section is-md'>
        <div className='container'>
          <h2 className='has-text-centered'>What my clients say</h2>
          <p className='has-text-centered'>
            From small business web design services to digital marketing and support, here's what some of my clients have to say.
          </p>
          <br />
          <Testimonials />
        </div>
      </section>

      <section className='section is-md'>
        <div className='container has-text-centered'>
          <h2>How I can help your business</h2>
          <p>
            If you're in need of a freelance web developer, looking for advice on your existing website 
            or in need of a complete custom website build for your business, it costs nothing to start a conversation. 
          </p>
          <br />
          <Link href='/contact'>
            <a className='button is-primary has-icon is-medium'>
              <span>discuss your project</span>
              <span className='icon fas fa-chevron-circle-right'></span>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SmallBusinessWebsites;
