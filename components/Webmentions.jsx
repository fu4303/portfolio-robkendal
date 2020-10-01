import { useEffect, useState } from 'react';

// helpers
import { loadWebmentions } from '../lib/utils';

// styles
import styles from './scss/mentions.module.scss';

const Webmentions = ({url}) => {
  const [mentions, setMentions] = useState([]);
  
  useEffect(() => {
    async function getMentions() {
      const fetchedMentions = await loadWebmentions(`https://robkendal.co.uk/${url}`);
      if(fetchedMentions && fetchedMentions.children.length > 0) {
        setMentions(fetchedMentions.children);
      }
    }

    getMentions();
  }, []);

  return (
    <>
      <h2 className='title is-size-3'>Webmentions for this article</h2>
      <div className={styles.mentions}>
        {mentions.map(mention => (
          <figure className={styles.avatar}>
            <a
              href={mention.author.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={mention.author.photo} alt={mention.author.name} />
            </a>
          </figure>
        ))}
        {mentions.length <= 0 && (
          <p>
            Be one of the first to <a
              href={`https://twitter.com/share?text=check this front end article by Rob Kendal -> &url=https://robkendal.co.uk/${url}`}
            >
              mention this article on twitter
            </a>
            .
          </p>
        )}
      </div>
    </>
  );
};

export default Webmentions;
