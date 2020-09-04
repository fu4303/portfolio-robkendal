import styles from './scss/testimonials.module.scss';

const Testimonials = () => (
  <>
    <blockquote className={styles.testimonial}>
      <figure>
        <img src='/img/avatars/ann.jpeg' alt='Anne de Freyman' />
      </figure>
      <p>
        <span className='fas fa-quote-left'></span>I struggled for years to find
        the right person to build a website I would be proud of for my business.
        Until I met Rob. I was impressed with Rob's creative talent and his
        patience. He built exactly the website I wanted and gave me all the help
        I needed to make it work. Superlative customer service!
        <cite>Anne de Freyman</cite>
      </p>
    </blockquote>
    <blockquote className={`${styles.testimonial} ${styles.reverse}`}>
      <figure>
        <img src='/img/avatars/claire.jpeg' alt='Claire Horsfield' />
      </figure>
      <p>
        <span className='fas fa-quote-left'></span>Rob helped me setup HubSpot and integrate it with my website. 
        Rob's work is professional and to a high standard, always being completed quickly. He helped me
        learn the new software quickly.
        <cite>Claire Horsfield</cite>
      </p>
    </blockquote>
    <blockquote className={styles.testimonial}>
      <figure>
        <img src='/img/avatars/heidi.jpeg' alt='Heidi Green' />
      </figure>
      <p>
        <span className='fas fa-quote-left'></span>Rarely do you meet someone who
        gives so generously of their knowledge, sharing so much information to
        help others achieve their goals. Rob is an inspiration in his approach,
        taking the fear out of what sometimes seems an overwhelming task.
        Professional, approachable, innovative, what more can I say!
        <cite>Heidi Green</cite>
      </p>
    </blockquote>
    <blockquote className={`${styles.testimonial} ${styles.reverse}`}>
      <figure>
        <img src='/img/avatars/simeron.jpeg' alt='Simeron Taak' />
      </figure>
      <p>
        <span className='fas fa-quote-left'></span>Rob has been an excellent
        mentor for me. I would definitely recommend working with Rob to any
        developers looking for a mentor. Rob has been part of my biggest JavaScript
        progression to date.
        <cite>Simeron Taak</cite>
      </p>
    </blockquote>
    <blockquote className={styles.testimonial}>
      <figure>
        <img src='/img/avatars/asam.jpeg' alt='Asam Shan' />
      </figure>
      <p>
        <span className='fas fa-quote-left'></span>
        Rob is great! He has a real knack of instilling confidence by breaking
        down and simplifying any problem I've had. He is always available and
        genuinely happy to help.
        <cite>Asam Shan</cite>
      </p>
    </blockquote>
  </>
);

export default Testimonials;