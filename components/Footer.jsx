import Link from 'next/link';

// components
import SocialLinks from './SocialLinks';

// styles
import styles from './scss/footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <h4 className='is-sr-only'>Site links</h4>
    <ul>
      <li>
        <Link href='/'>
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
      <SocialLinks overrideStyles={'none'} />
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