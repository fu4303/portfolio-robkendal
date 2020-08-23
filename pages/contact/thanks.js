import Link from 'next/link';

// components
import Layout from '../../components/Layout';

const ContactThanks = () => {
  return (
    <Layout
      title='Contact Rob Kendal, freelance web developer'
      description="Contact Rob Kendal about your next web development project, WordPress website, or if you're a developer looking for a coding mentor"
    >
      <div className='container'>
        <h1>Thank you for your message</h1>
        <img
          src='https://media.giphy.com/media/111ebonMs90YLu/giphy.gif'
          alt='Thumbs up'
        />
        <p>
          Thanks for getting in touch. I'll respond to your message within 24
          hours and I look forward to working together.
        </p>
        <p>
          In true 'choose your own adventure' style, you can choose where to go
          next:
        </p>
        <ul>
          <li>
            <Link href='/'>
              <a>Visit the home page</a>
            </Link>{' '}
            or,
          </li>
          <li>
            Read some{' '}
            <Link href='/blog'>
              <a>blog articles</a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default ContactThanks;
