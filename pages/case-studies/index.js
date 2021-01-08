import Link from 'next/link';

// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';

const caseStudyItems = [
  {
    title: 'Stones4Homes',
    subTitle: 'Ecommerce WordPress build',
    img: 'stones4homes-screenshot.png',
    blurb: 'I helped deliver a brand new website design for this Yorkshire aggregate powerhouse. The new site lifted transaction rates by 100% and conversions by 200%',
    link: 'stones4homes',
  },
  {
    title: 'CreateTVT',
    subTitle: 'Multisite theming',
    img: 'createtvt-screenshot.png',
    blurb: 'CreateTVT needed a multisite solution that combined a reusable branding theme with powerful hosting to support their multiple high-trafficked websites',
    link: 'createtvt',
  },
  {
    title: 'Sneyds Wonderdog',
    subTitle: 'Ecommerce WordPress build',
    img: 'sneyds-screenshot.png',
    blurb: 'Sneyds supply premium dog and animal feeds. I helped them build a new ecommerce website that attracted 65% more traffic, growing monthly sales by 17%',
    link: 'wonderdog',
  },
  {
    title: 'Andrea Hall',
    subTitle: 'Headless WordPress & Snipcart',
    img: 'andreahall-screenshot.png',
    blurb: 'Andrea is an incredible local artist who creates art for open water swimmers. I built her a super speedy static ecommerce website powered by a headless WordPress backend and Snipcart',
    link: 'andrea-hall',
  },
  {
    title: 'Print Plus Direct',
    subTitle: 'Ecommerce WordPress build',
    img: 'printplusdirect-screenshot.png',
    blurb: 'Supplying NCR forms and stationery to businesses nationwide, I worked with Print Plus Direct on an ecommerce site that simplifies their complex product options and drives new leads to their business',
    link: 'printplusdirect',
  }
]

const CaseStudies = () => {
  return (
      <Layout
          title='WordPress and Shopify website case studies | Rob Kendal, freelance web developer York'
          description='Discover how I used WordPress and Shopify to help local businesses to increase conversions by 200% and boost sales and lead generation through their websites'
      >
        <div className='container'>
          <h1>Case Studies</h1>
          <p>
            I've worked with some great clients over the years on a diverse range of projects, both ecommerce and non-ecommerce business websites.
          </p>
          <p>
            You can explore a few of the more recent and challenging ones here. Investigate, view the sites, ask me any questions, and please get in touch if you'd like
            to know how I can achieve the same results for you and your business.
          </p>
        </div>

          <div className="columns is-multiline section is-md">
            {
              caseStudyItems.map(item => (
                  <div className="column is-6">
                    <article className='card article-item'>
                      <div className='card-image'>
                        <Link href={`/case-studies/${item.link}`}>
                          <a>
                            <img
                                src={`/img/case-studies/${item.img}`}
                                alt={`Screenshot of the ${item.title} website`}
                                className='unstyled'
                            />
                          </a>
                        </Link>
                      </div>
                      <div className='card-content'>
                        <p className='subtitle is-size-4 has-text-uppercase has-text-grey-light no-margin'>
                          {item.subTitle}
                        </p>
                        <h2 className='title is-size-2'>
                          <Link href={`/case-studies/${item.link}`}>
                            <a className='has-text-brand-alt'>
                              {item.title}
                            </a>
                          </Link>
                        </h2>
                        <p>
                          {item.blurb}
                        </p>
                        <p>
                          <Link href={`/case-studies/${item.link}`}>
                            <a className='button is-primary'>
                              Read the full story
                            </a>
                          </Link>
                        </p>
                      </div>
                    </article>
                  </div>
              ))
            }
          </div>

        <div className='container'>
          <h2 className="title is-size-3 has-text-centered">Tell me how I can help</h2>
          <ContactForm action='/contact/thanks' pageLocation='case studies list' />
        </div>
      </Layout>
  );
};

export default CaseStudies;
