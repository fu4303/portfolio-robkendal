// import { useEffect } from 'react';
import Link from 'next/link';

// helpers
// import {CalendlyLoader} from '../../lib/utils';

// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';

const Contact = () => {

  // useEffect(() => {
  //   CalendlyLoader('rk-calendly-embed');
  // }, []);

  return (
    <Layout
      title='Contact Rob Kendal, freelance web developer'
      description="Contact Rob Kendal about your next web development project, WordPress website, or if you're a developer looking for a coding mentor"
    >
      <div className='container'>
        <h1>Let's talk!</h1>
        <p>
          Ready to talk about your WordPress project? Need help with a web
          development project? Or want to know more about my{' '}
          <Link href='/mentorship'>
            <a>coding mentorship support</a>
          </Link>
          ?
        </p>
        {/* <p>You can book a 30 min discovery slot directly on my calendar here, or fill in the form and I'll be in touch within 24 horus.</p> */}
        <p>Fill in the form and I'll be in touch within 24 horus.</p>

        {/* <!-- Calendly inline widget begin --> */}
        {/* <div
            id="rk-calendly-embed"
            className="calendly-inline-widget"
        >
        </div> */}
        {/* <!-- Calendly inline widget end --> */}

        <p>
          Send me a message below and{' '}
          <strong>I'll get back to you within 24 hours</strong>
        </p>
        <ContactForm action='/contact/thanks' />
        <br />
        <p><small>listed on <a href="https://www.citationsbooster.co.uk/" target="__blank" noreferrer noopener>Listed in Citations Booster</a> and <a href="https://www.uksmallbusinessdirectory.co.uk/" target="__blank" noreferrer noopener>Business Directory</a></small></p>
      </div>
    </Layout>
  );
};

export default Contact;
