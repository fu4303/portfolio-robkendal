
// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';


const Wonderdog = () => {
  return (
      <Layout
          title='Sneyds Wonderdog WordPress ecommerce website | Rob Kendal, freelance WordPress developer York'
          description='Discover how I used WordPress and Woocommerce to help Sneyds Wonderdog to boost website traffic by 65% and monthly sales by 17% through sales-driven website development'
      >

        <div className="section home-hero">
          <div className="columns is-vcentered">

            <div className="column is-6">
              <h1>Sneyd's Wonderdog</h1>
              <p>
                Sneyd’s is a family owned and operated company incorporating three generations of the same family and over 40 years experience in producing pet food products.
                They produce high quality pet food products priced well under the national average for equivalent feeds.
              </p>
              <h2>The challenge</h2>
              <p>
                Sneyd's previous website had served them well, but they were struggling to gain ground against competitors across search rankings and were looking for a way to boost website sales.
              </p>
            </div>
            <div className="column is-6">
              <img src="/img/case-studies/wd-cs.png" alt="Screenshot of Sneyds Wonderdog website and backend" className="unstyled"/>
            </div>
          </div>
        </div>

        <div className="section is-secondary is-md">
          <div className="columns is-multiline">
            <div className="column is-6">
              <h2 className="is-white">How I helped</h2>
              <p>
                I worked with Sneyd's to produce a brand new ecommerce website designed and built from the ground up on the robust combination of WordPress and Woocommerce.
              </p>
              <p>
                To address Sneyd's desire to rank higher across search engines, I helped with a range of SEO services, such as copy and content optimisation, landing pages, and SEO best-practices.
                This work delivered a <strong>65% boost in organic traffic</strong>, which helped power further sales.
              </p>
              <p>
                The website is very customer-centric, making it easy for visitors to find exactly what they're looking for via clear signaling, strong calls to action, and defined purchase pathways.
              </p>
            </div>
            <div className="column is-6">
              <br />
              <div className="box">
                <h2>Project highlights</h2>
                <ul className='unstyled'>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-paint-brush has-text-secondary has-padding-right-sm"/>
                    <span>
                    Ground up redesign of website with conversions and search performance in mind
                  </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fab fa-wordpress has-text-secondary has-padding-right-sm"/>
                    <span>
                    Sales and conversion focussed website built on WordPress and Woocommerce
                  </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-map-marker has-text-secondary has-padding-right-sm"/>
                    <span>
                    Developed custom Google Maps integration powering a local stockists finder
                  </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-pound-sign has-text-secondary has-padding-right-sm"/>
                    <span>
                    Conversion Rate Optimisation work boosted monthly website sales by 17%
                  </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-chart-line has-text-secondary has-padding-right-sm"/>
                    <span>
                    SEO and site optimisation work boosted organic website traffic 65%
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
            <ContactForm action='/contact/thanks' pageLocation='Wonderdog case study' />
          </div>
        </div>
      </Layout>
  );
};

export default Wonderdog;
