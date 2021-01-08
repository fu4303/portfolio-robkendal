
// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';


const CreateTVT = () => {
  return (
      <Layout
          title='CreateTVT WordPress multisite development | Rob Kendal, freelance WordPress developer York'
          description='Find out more about how I helped CreateTVT in Selby to build a WordPress multisite presence for their news outlet websites that handle high-traffic volumes'
      >

        <div className="section home-hero">
          <div className="columns is-vcentered">

            <div className="column is-6">
              <h1>CreateTVT</h1>
              <p>
                CreateTVT are a family-run business specialising in community based publications as well as competitive design, printing and distribution services for businesses.
                The company has grown steadily over the years and now produces six advertising publications which are all local to the Yorkshire area and focus on advertising
                and community news.
              </p>
              <p>
                You can find out more about <a href="https://www.createtvt.co.uk/" target="__blank" rel="noopener noreferrer">CreateTVT from their website</a> or some of their publication
                websites including  <a href="https://www.ourgoole.co.uk/" target="__blank" rel="noopener noreferrer">Our Goole</a> or&nbsp;
                <a href="https://www.tadcasterecho.co.uk/" target="__blank" rel="noopener noreferrer">Tadcaster Echo</a>.
              </p>
              <h2>The challenge</h2>
              <p>
                CreateTVT needed several website designs creating, including one for their own main website, and a white-labelled solution for each of their six sister publication sites.
              </p>
              <p>
                The difficulty was finding a web design and development partner to produce a platform that could handle high-traffic volumes, multiple theme variations for several
                publications and some sort of management platform to handle them all, plus multiple, daily content updates.
              </p>
            </div>
            <div className="column is-6">
              <img src="/img/case-studies/ctvt-cs.png" alt="Screenshot of CreateTVT website and backend" className="unstyled"/>
            </div>
          </div>
        </div>

        <div className="section is-secondary is-md">
          <div className="columns is-multiline">
            <div className="column is-6">
              <h2 className="is-white">How I helped</h2>
              <p>
                The development started by mapping out all the sites that needed to be created over a rolling release schedule. Once the first design and content were produced,
                the build began with a hosted multisite WordPress instance.
              </p>
              <p>
                Over a period of 2-3 months I worked with CreateTVT to gather content for each new site, supplying a newly designed child theme variation with some unique features to
                each site, such as advertising search, or publication map.
              </p>
              <p>
                Each site was built as part of an over-arching WordPress multi-site instance to allow for ease of regular, frequent content updates, site management and security.
              </p>
            </div>
            <div className="column is-6">
              <br />
              <div className="box">
                <h2>Project highlights</h2>
                <ul className='unstyled'>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fab fa-wordpress-simple has-text-secondary has-padding-right-sm"/>
                    <span>
                      WordPress multi-site development
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-tachometer-alt has-text-secondary has-padding-right-sm"/>
                    <span>
                      High-traffic website hosting
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-paint-roller has-text-secondary has-padding-right-sm"/>
                    <span>
                      Bespoke child theme design and development for multiple sites
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-calendar-alt has-text-secondary has-padding-right-sm"/>
                    <span>
                      Long-term engagement with multi-phase delivery points
                    </span>
                  </li>
                  <li className='flex has-padding-bottom-sm'>
                    <span className="fa fa-cubes has-text-secondary has-padding-right-sm"/>
                    <span>
                      Custom child site feature development
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
            <ContactForm action='/contact/thanks' pageLocation='CreateTVT case study' />
          </div>
        </div>
      </Layout>
  );
};

export default CreateTVT;
