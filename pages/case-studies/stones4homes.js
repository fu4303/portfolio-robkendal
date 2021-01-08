
// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';


const Stones4Homes = () => {
  return (
      <Layout
          title='Stones4Homes WordPress ecommerce website | Rob Kendal, freelance WordPress developer York'
          description='Discover how I used WordPress and Woocommerce to help a local aggregate supplier, Stones4Homes, boost sales and increaase conversions'
      >

      <div className="section home-hero">
        <div className="columns is-vcentered">

          <div className="column is-6">
            <h1>Stones4Homes</h1>
            <p>
              Stones4Homes is the online shop for all your decorative aggregates, bark products and rock salt requirements. They've been supplying aggregates to
              professional landscapers, contractors and homeowners for over 10 years and have over 25 years experience of working in the sector. They supply to countless
              local Yorkshire residential and commercial customers, as well providing delivery nationwide.
            </p>
            <p>
              You can visit the <a href="https://www.stones4homes.co.uk/" target="__blank" rel="noopener noreferrer">Stones4Homes website</a> here.
            </p>
            <h2>The challenge</h2>
            <p>
              Stones4Homes came to me with a outdated site that wasn't performing for them. With declining sales and an unresponsive website that wasn't working well
              for their customers, they needed a breath of fresh air to reinvigorate their online shop and improve sales.
            </p>
          </div>
          <div className="column is-6">
            <img src="/img/case-studies/s4h-cs.png" alt="Screenshot of Stones4Homes website and backend" className="unstyled"/>
          </div>
        </div>
        </div>

        <div className="section is-secondary is-md">
          <div className="columns is-multiline">
          <div className="column is-6">
            <h2 className="is-white">How I helped</h2>
            <p>
              As well as creating a clean, responsive design powered by a WordPress ecommerce solution, I worked closely with Stones4Homes to migrate a wealth of content
              from their existing web presence, preserving SEO value and search rankings for their landing pages and well-ranked products.
            </p>
            <p>
              I added a raft of features for their admin team too, such as a 'buy as a customer', custom product shipping label generator, and order date picker.
            </p>
            <p>
              Finally, the real challenge (and fun part of the project) was developing a highly-customised product pricing model that factored in customers' postcodes
              and delivery. The whole solution is a well-crafted website that's designed to make it easy for their visitors to find what they need and make a purchase.
            </p>
          </div>
          <div className="column is-6">
            <br />
            <div className="box">
              <h2>Project highlights</h2>
              <ul className='unstyled'>
                <li className='flex has-padding-bottom-sm'>
                  <span className="fab fa-wordpress has-text-secondary has-padding-right-sm"/>
                  <span>
                    Brand new, bespoke, mobile-friendly design focussing on strong calls to action and user journeys
                  </span>
                </li>
                <li className='flex has-padding-bottom-sm'>
                  <span className="fab fa-safari has-text-secondary has-padding-right-sm"/>
                  <span>
                    Fully hosted, WordPress-powered ecommerce website
                  </span>
                </li>
                <li className='flex has-padding-bottom-sm'>
                  <span className="fa fa-chart-line has-text-secondary has-padding-right-sm"/>
                  <span>
                    SEO work to help retain existing ranking
                  </span>
                </li>
                <li className='flex has-padding-bottom-sm'>
                  <span className="fa fa-suitcase-rolling has-text-secondary has-padding-right-sm"/>
                  <span>
                    Large-scale content and product migration from previous website CMS
                  </span>
                </li>
                <li className='flex has-padding-bottom-sm'>
                  <span className="fa fa-pound-sign has-text-secondary has-padding-right-sm"/>
                  <span>
                    Improved transaction rates by 100% and conversion rates by 200%
                  </span>
                </li>
                <li className='flex has-padding-bottom-sm'>
                  <span className="fa fa-cart-plus has-text-secondary has-padding-right-sm"/>
                  <span>
                    Post-launch sales figures through the website increased revenue by 270%
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
          <ContactForm action='/contact/thanks' pageLocation='Stones4Homes case study' />
          </div>
        </div>
      </Layout>
  );
};

export default Stones4Homes;
