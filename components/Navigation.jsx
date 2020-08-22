import { useRouter } from 'next/router';
import Link from 'next/link';

// styles
import styles from './scss/nav.module.scss';

const Navigation = () => {
  const router = useRouter();
  const isActive = href => {
    return router.pathname === href ? styles.active : ''
  }
  return (
    <nav role='navigation' className={styles.navigation}>
      <Link href='/about'>
        <a className={() => isActive('/about')}>about</a>
      </Link>
      <Link href='/consultancy'>
        <a className={() => isActive('/consultancy')}>consultancy</a>
      </Link>
      <Link href='/mentorship'>
        <a className={() => isActive('/mentorship')}>mentorship</a>
      </Link>
      <Link href='/publications'>
        <a className={() => isActive('/publications')}>publications</a>
      </Link>
      <Link href='/blog'>
        <a className={() => isActive('/blog')}>articles</a>
      </Link>
      <Link href='/contact'>
        <a
          className={`button is-primary has-icon ${isActive('/contact')} ${
            styles.button
          }`}
        >
          <span>hire me</span>
          <span className='icon fas fa-chevron-circle-right'></span>
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;