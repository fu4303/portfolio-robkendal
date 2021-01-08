
// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';


const AndreaHall = () => {
  return (
      <Layout
          title='Andre Hall Next JS ecommerce website | Rob Kendal, freelance WordPress developer York'
          description='Discover how I used WordPress as a headless CMS with Next.js and Snipcart to build Yorkshire artist, Andrea Hall, a new static website to replace her Etsy store'
      >

        <div className="section home-hero">
          <div className="columns is-vcentered">

            <div className="column is-6">
              <h1>Andrea Hall</h1>
              <p>
                Andrea Hall is a talented Yorkshire artist and active open water swimmer. She creates a range of art for the swimmer community such as greetings cards,
                prints, stationery and more.
              </p>
              <p>
                Check out <a href="https://www.andreahall.co.uk/" target="__blank" rel="noopener noreferrer">Andrea's website</a> here.
              </p>
              <h2>The challenge</h2>
              <p>
                Andrea had a personal portfolio website and a separate Etsy store. Tired of the hassle of maintaining two separate sites and paying expensive sales percentages
                to Etsy, she wanted to combine her online presences into a single, unified experience for both her and the customer.
              </p>
              <p>
                The customer would get a single, streamlined ecommerce site to browse and make purchases, whilst Andrea would be able to manage all her content, products
                and after sales care and admin in one place.
              </p>
            </div>
            <div className="column is-6">
              <img src="/img/case-studies/ah-cs.png" alt="Screenshot of AndreaHall website and backend" className="unstyled"/>
            </div>
          </div>
        </div>

        <div className="section is-secondary is-md">
          <div className="columns is-multiline">
            <div className="column is-6">
              <h2 className="is-white">How I helped</h2>
              <p>
                I started with Andrea's existing website which was powered by WordPress and developed a custom solution that detached it from the
                front-facing customer website. This freed up WordPress to manage content and product information whilst I developed a separate front
                end that could focus on simple, clear design that focussed on the customer.
              </p>
              <p>
                The new website uses a lot of cool technology under the hood, including GraphQL to feed product data and content to the
                detached front end via an API. The front end uses Next.js to generate a blazing-fast static site that means customers no longer
                have to wait for more than a few milliseconds to get to their
              </p>
              <p>
                The last part of the puzzle was to migrate all Andrea's existing product data from her Etsy store into the new WordPress system.
              </p>
            </div>
            <div className="column is-6">
              <br />
              <div className="box">
                <h2>Project highlights</h2>
                <ul className='unstyled'>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-window-maximize has-text-secondary has-padding-right-sm"/>
                    <span>
                      Designed and developed a new ecommerce website that simplifies the customer journey to maximise conversions
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fab fa-wordpress has-text-secondary has-padding-right-sm"/>
                    <span>
                      Deployed detached WordPress CMS with custom product and ecommerce management areas
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-tachometer-alt has-text-secondary has-padding-right-sm"/>
                    <span>
                      Deployed separate, optimised front end, hosted on a specialised CDN for lightning quick customer experience
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fab fa-stripe has-text-secondary has-padding-right-sm"/>
                    <span>
                      Integrated ecommerce solution with Snipcart and Stripe
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fab fa-etsy has-text-secondary has-padding-right-sm"/>
                    <span>
                      Custom product migration from existing Etsy catalogue to new website
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='section'>
          <div className="container">
            <h2 className="title is-size-3 has-text-centered">Tell me about your project</h2>
            <ContactForm action='/contact/thanks' pageLocation='Andrea Hall case study' />
          </div>
        </div>
      </Layout>
  );
};

export default AndreaHall;
