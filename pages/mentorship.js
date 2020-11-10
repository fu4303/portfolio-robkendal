import Link from 'next/link';

// components
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';

const Mentorship = () => {
  return (
    <Layout
      title='Frontend mentorship programmes | Rob Kendal, freelance developer'
      description='Learn to code for free with a frontend mentorship with Rob Kendal. I offer a range of free code mentorship programmes and paid mentorship options to help people learn to code.'
    >
      <h1 className='has-text-centered'>Mentorship</h1>
      <div className='container'>
        <p>
          As well as a range of helpful{' '}
          <Link href='/blog'>
            <a>web development articles</a>
          </Link>{' '}
          and{' '}
          <Link href='/publications'>
            <a>publications and resources</a>
          </Link>
          , I'm proud to be a coding mentor, offering learn to code mentor
          support to those looking to start their frontend development journey.
        </p>
        <p>
          My coding mentorship starts for <strong>free</strong>, but I have paid
          options if you need more support.
        </p>
        <section className='section is-md'>
          <h2>Mentorship base level</h2>
          <p>
            I want to help as many people as I can learn to code and get into
            frontend development. That's why my mentorship support starts at{' '}
            <strong>free</strong>. With that you'll get access to over 15 years
            of experience and knowledge in the tech industry as a self-taught
            developer, a manager, and a marketer.
          </p>
          <p>My free mentorship option includes:</p>
          <ul>
            <li>
              unlimited email support (guaranteed answers within 24 hours)
            </li>
            <li>code reviews</li>
            <li>limited video replies</li>
          </ul>
        </section>
        <section className='section'>
          <div className='columns is-desktop'>
            <div className='column '>
              <div className='card is-fullheight'>
                <div className='card-image'>
                  <img
                    src='/img/mentorship/level1.png'
                    alt='Mentorship level 1 option'
                    className='unstyled'
                  />
                </div>
                <div className='card-content'>
                  <h2 className='subtitle is-size-3 has-text-centered'>
                    <span className='is-sr-only'>Mentorship Level 1</span>
                    &pound;49 <br />
                    <small>(per month)</small>
                  </h2>
                  <p>
                    For those seeking more structure and proactive regular
                    support, Level 1 is the right choice for you. It offers a
                    perfect blend of additional support and value, with regular
                    updates, access to an exclusive Discord community and
                    monthly video calls.
                  </p>
                  <p>Level 1 includes:</p>
                  <ul>
                    <li>
                      Exclusive access to Discord community packed with fellow
                      aspiring devs
                    </li>
                    <li>1 virtual meeting per month via Zoom (45 mins)</li>
                    <li>Regular progress check-ins</li>
                    <li>Career coaching service, including CV reviews</li>
                    <li>Access to coding challenges</li>
                  </ul>
                  <p className='has-text-centered'>
                    <a href="https://pay.gocardless.com/AL000374P14DRK" className="button is-primary is-md">
                      Sign me up!
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card is-fullheight'>
                <div className='card-image'>
                  <img
                    src='/img/mentorship/level2.png'
                    alt='Mentorship level 2 option'
                    className='unstyled'
                  />
                </div>
                <div className='card-content'>
                  <h2 className='subtitle is-size-3 has-text-centered'>
                    <span className='is-sr-only'>Mentorship Level 2</span>
                    &pound;99 <br />
                    <small>(per month)</small>
                  </h2>
                  <p>
                    For the most demanding of students, Level 2 ups the ante
                    with more regular video support, access to personalised
                    video lessons and help with larger projects. To really
                    accelerate your learning journey, this is the best option
                    for you.
                  </p>
                  <p>Level 2 includes:</p>
                  <ul>
                    <li>Everything in Level 1, plus</li>
                    <li>
                      2 virtual meetings per month via Zoom (45 mins each)
                    </li>
                    <li>Access to personalised video lessons</li>
                    <li>Collaborative work on larger coding projects</li>
                  </ul>
                  <p className='has-text-centered'>
                    <a href="https://pay.gocardless.com/AL00039PXAH73Q" className="button is-primary is-md">
                      Sign me up!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <p className='has-text-grey-light'>
            Subscriptions are rolling month to month, but you're free to cancel
            any time. Check the{' '}
            <Link href='/terms'>
              <a>terms and conditions</a>
            </Link>{' '}
            for more information
          </p>
        </section>
        <br />
        <h2 className='has-text-centered'>Don't take my word for it</h2>
        <br />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default Mentorship;
