import React, { useEffect } from 'react';

// utils
import { DisqusLoader } from '../lib/utils';

// styles
//import styles from './scss/comments.module.scss';

const CommentsLoader = ({pageUrl, pageId}) => {
  useEffect(() => {
    DisqusLoader(pageUrl, pageId);
  }, []);

    return (
      <section id='comments-area' className='comments-area'>
        <h2 className='title is-size-3'>Comments</h2>
        <div className='comments-inside'>
          <div id='disqus_thread'></div>
        </div>
        <div id='comments-overlay' className='comments-overlay'>
          <a
            href='#nogo'
            id='comments-show'
            className='comments-show button is-default'
          >
            Show comments
          </a>
        </div>
        <noscript>
          Please enable JavaScript to view the{' '}
          <a href='https://disqus.com/?ref_noscript'>
            comments powered by Disqus.
          </a>
        </noscript>
      </section>
    );
};

export default CommentsLoader;
