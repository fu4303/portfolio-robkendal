import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import Favicon from './Favicon';
import Navigation from './Navigation';
import Footer from './Footer';

// styles
import styles from './scss/layout.module.scss';

const shortTitle = 'Freelance WordPress Developer and Jamstack developer';
const baseUrl = "https://robkendal.co.uk";

const generateUrl = url => `${baseUrl}${url}`;

const Layout = ({
  children,
  url,
  title = 'Freelance WordPress Developer | Jamstack developer | Rob Kendal',
  description = 'A friendly, reliable, remote freelance WordPress developer and website consultant with 15 years experience based in Selby, Yorkshire',
  image = '/img/alt-logo.png'
}) => {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        // site layout meta
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        // site SEO
        <title>{title}</title>
        <meta name='description' content={description} />
        // sitemap and RSS feeds
        <link rel='sitemap' type='application/xml' href='/sitemap.xml' />
        <link
          rel='alternative'
          type='application/rss+xml'
          title='RSS for blog articles'
          href='https://robkendal.co.uk/rss.xml'
        />
        // favicon
        <Favicon />
        // social media
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={generateUrl(image)} />
        <meta property='og:image:alt' content={title || shortTitle} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={generateUrl(url || router.pathname)} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='Rob Kendal' />
        <meta name='twitter:site' content={baseUrl} />
        <meta name='twitter:title' content={title} />
        <meta property='twitter:image' content={generateUrl(image)} />
        <meta property='twitter:image:alt' content={title || shortTitle} />
        <meta name='twitter:description' content={description} />
        // monitisation
        <meta name='monetization' content='$ilp.uphold.com/9kqwwEykU4B6'></meta>
        // fonts
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://app.snipcart.com' />
        <link rel='preconnect' href='https://cdn.snipcart.com' />
        <link
          rel='stylesheet'
          href='https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css'
        />
        // indie auth meta
        <link href='https://twitter.com/kendalmintcode' rel='me' />
        <link href='https://github.com/bpk68/' rel='me' />
      </Head>
      <header className={styles.header}>
        <Link href='/'>
          <a className={styles.logo}>
            <img
              src='/img/alt-logo.png'
              alt='Rob Kendal Freelance WordPress Developer'
              className='unstyled'
            />
          </a>
        </Link>
        <Navigation />
      </header>

      <div className={styles.main}>
        <section className={styles.chrome}>
          <div aria-hidden className={styles.chromebar}>
            <span></span>
          </div>
          <main className={`main-content ${styles['content-container']}`}>
            {children}
          </main>
          <Footer className={styles.footer} />
        </section>
      </div>
    </div>
  );
  };

export default Layout;
