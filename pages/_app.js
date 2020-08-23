import { useEffect } from 'react';

import Prism from 'prismjs';

// app styles
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/utils.css';
import '../styles/columns.sass';
import '../styles/layout.css';
import '../styles/buttons.css';

// prism themes
//import '../styles/prism.tomorrow-night.css';
//import '../styles/prism.material.css';
import '../styles/prism.shades.css';
//import '../styles/prism.nord.css';

// utils
import { CommentsLoader } from '../lib/utils';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    CommentsLoader();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
