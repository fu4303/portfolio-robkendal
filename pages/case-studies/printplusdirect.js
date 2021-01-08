
// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';


const PrintPlusDirect = () => {
  return (
      <Layout
          title='Print Plus Direct Woocommerce WordPress ecommerce website | Rob Kendal, freelance WordPress developer York'
          description='I helped Print Plus Direct to build an ecommerce website that serves businesses '
      >

        <div className="section home-hero">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h1>Print Plus Direct</h1>
              <p>
                Print Plus Direct is an online provider of NCR printing solutions and customised stationery for businesses.
                Their simple online order process allows customers to follow 4 simple steps to order bespoke forms and documents for their company.
              </p>
              <p>
                You can visit the <a href="http://www.printplusdirect.co.uk/" target="__blank" rel="noopener noreferrer">Print Plus Direct website</a> here.
              </p>
              <h2>The challenge</h2>
              <p>
                Print Plus Direct have been supplying businesses throughout Yorkshire for decades, but wanted to take their products and services online, direct to
                their customers, wherever they are across the UK.
              </p>
              <p>
                They needed a performant, responsive website that could handle complex customer requirements and product additions, as well as providing a robust admin system
                for product and content management.
              </p>
            </div>
            <div className="column is-6">
              <img src="/img/case-studies/ppd-cs.png" alt="Screenshot of PrintPlusDirect website and backend" className="unstyled"/>
            </div>
          </div>
        </div>

        <div className="section is-secondary is-md">
          <div className="columns is-multiline">
            <div className="column is-6">
              <h2 className="is-white">How I helped</h2>
              <p>
                The best solution for Print Plus Direct was a custom WordPress build using Woocommerce to power their online shop.
              </p>
              <p>
                I helped them to design and build a robust, secure ecommerce site that features customisable product options for greater choice for their customers,
                a free artwork template section, blog, full SEO treatment for high rankings, all built upon a proven and robust ecommerce solution.
              </p>
              <p>
                What's more, all customer payments are safe and secure via integrations with PayPal and SagePay.
              </p>
            </div>
            <div className="column is-6">
              <br />
              <div className="box">
                <h2>Project highlights</h2>
                <ul className='unstyled'>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-paint-roller has-text-secondary has-padding-right-sm"/>
                    <span>
                      Custom designed and built responsive ecommerce site
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fab fa-wordpress has-text-secondary has-padding-right-sm"/>
                    <span>
                      WordPress and Woocommerce development
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-pound-sign has-text-secondary has-padding-right-sm"/>
                    <span>
                      SagePay payments integration
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-filter has-text-secondary has-padding-right-sm"/>
                    <span>
                      Complex product customisation options
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-brush has-text-secondary has-padding-right-sm"/>
                    <span>
                      Free artwork templates section
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-server has-text-secondary has-padding-right-sm"/>
                    <span>
                      High-powered hosting for secure, responsive customer experiences
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
            <ContactForm action='/contact/thanks' pageLocation='PrintPlusDirect case study' />
          </div>
        </div>
      </Layout>
  );
};

export default PrintPlusDirect;
