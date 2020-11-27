import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// components
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
  title = 'Freelance Shopify Develer | WordPress Consultant | Rob Kendal',
  description = 'Freelance Shopify developer and WordPress consultant who builds lead-generating websites with 15 years experience based in Selby, Yorkshire',
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
        <title>{title} | Jamstack developer | Rob Kendal</title>
        <meta name='description' content={description} />
        
        // sitemap and RSS feeds
        <link rel='sitemap' type='application/xml' href='/sitemap.xml' />
        <link
          rel='alternative'
          type='application/rss+xml'
          title='RSS for blog articles'
          href='https://robkendal.co.uk/rss.xml'
        />
        
        // favicons
        <link
          rel='alternate'
          type='application/rss+xml'
          title='Rob Kendal Articles RSS Feed'
          href='/rss.xml'
        />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/img/icons/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/img/icons/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/img/icons/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/img/icons/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/img/icons/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/img/icons/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/img/icons/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/img/icons/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/img/icons/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/img/icons/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/img/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/img/icons/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/img/icons/favicon-16x16.png'
        /> 
        <link rel='icon' href='/img/icons/favicon.ico' />
        <link rel='manifest' href='/img/icons/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/img/icons/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
        
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

        // indie auth meta
        <link href='https://twitter.com/kendalmintcode' rel='me' />
        <link href='https://github.com/bpk68/' rel='me' />
        
        // web mentions
        <link
          rel='webmention'
          href='https://webmention.io/robkendal.co.uk/webmention'
        />
        <link
          rel='pingback'
          href='https://webmention.io/robkendal.co.uk/xmlrpc'
        />
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
