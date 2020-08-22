import { useRouter } from 'next/router';
import Link from 'next/link';

// components
import Layout from '../components/Layout';

const Custom404 = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>404; NO PAGE HERE</h1>
      <section className='section'>
        <img
          src='https://media.giphy.com/media/65EzQXyjjn5jW/giphy.gif'
          alt='tumbleweed blowing across the plane'
        />
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>But don't worry, you still have options:</p>
        <ul>
          <li>
            Go{' '}
            <a href='#previous-page' onClick={() => router.back()}>
              back to the previous page
            </a>
          </li>
          <li>
            <Link href='/'>
              <a>Visit the home page</a>
            </Link>
            &nbsp; or,
          </li>
          <li>
            Read some more &nbsp;
            <Link href='/blog'>
              <a>lovely articles</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Custom404;
