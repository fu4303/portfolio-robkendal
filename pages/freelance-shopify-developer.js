import Link from 'next/link';

// components
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import ServiceBlock from '../components/ServiceBlock';

const FreelanceShopifyDeveloper = () => {
  return (
    <Layout
      title='Freelance Shopify developer | Shopify consultant Yorkshire | Rob Kendal, freelance Shopify partner'
      description='As a freelance Shopify developer based in Selby and York, I can build custom Shopify themes and develop your Shopify ecommerce website'
    >
      <section className='section home-hero'>
        <div className='hero-left'>
          <h1>A freelance Shopify developer you can rely on</h1>
          <p>
            If you're looking for the support of a <strong>freelance Shopify developer</strong> based in York, to help with Shopify migrations,
            custom Shopify theme development, or full, end to end ecommerce website builds, then look no further!
          </p>
          <p>
            My Shopify consultancy services can help in several ways:
          </p>
          <ul style={{ lineHeight: '1.9' }}>
            <li>
              You're looking to launch a new Shopify ecommerce websitet and need planning
              and development advice to get started.
            </li>
            <li>
              You're existing Shopify website is not performing or converting sales well as it could.
            </li>
            <li>
              You want to use Shopify as a core part of your ecommerce strategy and need support to develop a solution.
            </li>
            <li>
              You want to migrate your current ecommerce solution to Shopify but aren't sure where to start.
            </li>
            <li>
              You want to maximise your site's performance by using Shopify as a headless ecommerce platform that powers a static site 
              generator such as Gatsby or Next.js.
            </li>
            <li>
              You want conversion optimisation or SEO advice to improve your existing Shopify ecommerce website.
            </li>
            <li>
              You want to design and develop a custom Shopify theme.
            </li>
          </ul>
          <p>
            Let's take a look at your Shopify project and see how we can work together.
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
            src='/img/shopify_glyph_small.png'
            alt='Rob Kendal freelance Shopify developer'
            className='fancy-img is-lg'
          />
        </div>
      </section>

      <section className='section has-border-top has-text-centered'>
        <h2 className='has-text-centered'>
          Proud to be a Shopify Partner
        </h2>
        <p className='has-text-centered'>
          I wear my Shopify Partner badge with pride. It means peace of mind that you're in the hands of a trusted Shopify professional.
        </p>        
        <img src="/img/shopify-partner.png" alt="Shopify Partners logo" className="unstyled" />
      </section>

      <section className='section is-md'>
        <h2 className='has-text-centered'>
          How I can support your Shopify website
        </h2>
        <p className='has-text-centered'>
          As a Shopify partner, I'm expertly positioned to help you with a range of different ecommerce projects.
        </p>
        <br />
        <div className="columns is-centered is-multiline serviceblock-columns">
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="far fa-hand-pointer"
              title="Shopify website"
              blurb="Shopify is an ideal choice for a winning ecommerce website. From full, end to end builds, design and development, I've got you covered."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-suitcase-rolling"
              title="Migrations &amp; moves"
              blurb="Moving an ecommerce wesite to Shopify is no mean feat! Let me take the headache out of it and take over the heavy lifting for you."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-cash-register"
              title="Ecommerce strategy"
              blurb="As well as full ecommerce development builds, I can help with initial planning and strategy to get your site started on the right foot."
            />         
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-rocket"
              title="Conversion Rate Optimisation &amp; SEO"
              blurb="Current Shopify site not converting customers as well as it did? Need help climbing those search rankings? Let me take a look for you."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fas fa-server"
              title="Headless Shopify"
              blurb="For ultimate ecommerce website performance, I can deliver Shopify as a headless ecommerce solution, wiring it up with a static front end."
            />
          </div>
          <div className="column is-4-desktop is-12-tablet">
            <ServiceBlock
              icon="fab fa-shopify"
              title="Theme development"
              blurb="I can help build custom Shopify themes, add to existing themes or advise on your current Shopify site setup."
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
              alt='Shopify example website'
              className='unstyled'
            />
            <img
              src='/img/shopify_logo_white.png'
              alt='Shopify logo'
              className='unstyled'
            />
          </figure>
          <div className='media-content'>
            <h2 className='is-white'>Shopify development services</h2>
            <p>
              I specialise in delivering Shopify websites and Shopify
              consultancy services to a range of clients of all sizes.
            </p>
            <p>
              With me, as well as a reliable Shopify Partner, you'll always
              get:
            </p>
            <ul className='unstyled'>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Advice from a professional freelance developer with over 15 years in the business.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  A source of straightforward, honest advice that always has you and your business' interests in mind.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  An approach that leans on strong marketing goals, conversion-optimised ecommerce websites and seeing a return on your investment.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Superb support and guidance from the get go, all the through development, site launch and beyond!
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Marketing and Search Engine Optimisation (SEO) services that have been recognised by national business awards.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Expert Shopify services and modern development practices 
                  including, Next.js, GraphQL and the Jamstack with Shopify as a headless ecommerce platform.
                </span>
              </li>
              <li className='flex has-padding-bottom-sm'>
                <span className='fa fa-thumbs-up has-padding-right-sm'></span>
                <span>
                  Help and support launching super fast, accessible, static
                  websites that rank well on search engines
                </span>
              </li>
            </ul>
            <p>Let's talk about your Shopify project and how we can work together to hit your goals.</p>
            <br />
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
          I've worked with some great brands
        </h2>
        <p className='has-text-centered'>
          As a freelance Shopify developer, I've worked with some amazing
          local and national brands, as well as a host of local Yorkshire
          businesses
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
          <h2 className='has-text-centered'>Successful projects equal happy clients</h2>
          <p className='has-text-centered'>
            From Shopify ecommerce website development services to marketing and custom theme development here's what some of my clients have to say.
          </p>
          <br />
          <Testimonials />
        </div>
      </section>

      <section className='section is-md'>
        <div className='container has-text-centered'>
          <h2>How I can help your business</h2>
          <p>
            If you're in need of a freelance Shopify developer, want a full Shopify ecommerce website, custom theme development
            or just need to hear some straightforward
            advice on how to start your next Shopify project, I'm all
            ears: let's have a chat!
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

export default FreelanceShopifyDeveloper;
