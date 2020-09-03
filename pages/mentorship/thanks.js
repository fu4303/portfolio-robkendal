import Link from 'next/link';

// components
import Layout from '../../components/Layout';

const MentorshipThanks = () => {
  return (
    <Layout
      title='Thanks for signing up for mentorship with Rob Kendal, freelance web developer'
      description='Learn to code for free with a frontend mentorship with Rob Kendal. I offer a range of free code mentorship programmes and paid mentorship options to help people learn to code'
    >
      <div className='container'>
        <h1>Thank you for joining up</h1>
        <img
          src='https://media.giphy.com/media/111ebonMs90YLu/giphy.gif'
          alt='Thumbs up'
        />
        <p>
          Thank you for signing up to my mentorship program. You've made a brave
          first step on your way to becoming a front end developer.
        </p>
        <p>
          I'll be in touch over the next 24 hours to arrange our first kick-off
          meeting to get you started on the path to dev greatness.
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

export default MentorshipThanks;
