import Link from 'next/link';

// styles
import styles from './scss/footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <h4 className='is-sr-only'>Site links</h4>
    <ul>
      <li>
        <Link href='/freelance-wordpress-developer'>
          <a>freelance wordpress developer</a>
        </Link>
      </li>
      <li>
        <Link href='/the-front-end-podcast'>
          <a>podcast</a>
        </Link>
      </li>
      <li>
        <Link href='/publications'>
          <a>publications</a>
        </Link>
      </li>
      <li>
        <Link href='/projects'>
          <a>projects</a>
        </Link>
      </li>
      <li>
        <Link href='/contact'>
          <a>contact</a>
        </Link>
      </li>
      <li>
        <Link href='/faq-for-recruiters'>
          <a>recruitment FAQ</a>
        </Link>
      </li>
    </ul>

    <div className={styles['social-links']}>
      <h4 className='is-sr-only'>Connect on social media</h4>
      <a
        href='https://twitter.com/kendalmintcode'
        target='_blank'
        rel='noreferrer noopener'
      >
        <span className='fab fa-twitter' aria-hidden='true'></span>
        <span className='screen-reader-text'>Follow me on Twitter</span>
      </a>
      <a
        href='https://github.com/bpk68/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <span className='fab fa-github' aria-hidden='true'></span>
        <span className='screen-reader-text'>Check out my code on GitHub</span>
      </a>
      <a
        href='https://codepen.io/robkendal/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <span className='fab fa-codepen' aria-hidden='true'></span>
        <span className='screen-reader-text'>Have a peek at my Codepen</span>
      </a>
      <a
        href='https://dev.to/kendalmintcode'
        target='_blank'
        rel='noreferrer noopener'
      >
        <span className='fab fa-dev' aria-hidden='true'></span>
        <span className='screen-reader-text'>Connect with me on Dev.to</span>
      </a>
      <a
        href='https://anchor.fm/the-front-end'
        target='_blank'
        rel='noreferrer noopener'
      >
        <span className='fas fa-podcast' aria-hidden='true'></span>
        <span className='screen-reader-text'>
          Listen to The Front End Podcast on Anchor
        </span>
      </a>
      <a
        href='https://robkendal.co.uk/rss.xml'
        target='_blank'
        rel='noreferrer noopener'
      >
        <span className='fas fa-rss' aria-hidden='true'></span>
        <span className='screen-reader-text'>Subscribe to my RSS feed</span>
      </a>
    </div>
    <div className={styles.copyright}>
      copyright &copy; {new Date().getFullYear()} Rob Kendal. view the{' '}
      <Link href='/privacy'>
        <a>privacy policy</a>
      </Link>{' '}
      and{' '}
      <Link href='/terms'>
        <a>terms</a>
      </Link>
    </div>
  </footer>
);

export default Footer;