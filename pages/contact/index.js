import Link from 'next/Link';

// components
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
    <Layout>
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
        <p>
          Send me a message below and{' '}
          <strong>I'll get back to you within 24 hours</strong>
        </p>
        <ContactForm action='/contact/thanks' />
      </div>
    </Layout>
  );
};

export default Contact;
