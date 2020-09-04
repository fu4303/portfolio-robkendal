import Link from 'next/link';

// components
import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';
import ContactForm from '../components/ContactForm';

const About = () => (
  <Layout
    title='About Rob Kendal, freelance web developer'
    description="I'm Rob Kendal, a freelance web developer specialising in WordPress and headless CMS web development. I work with clients remotely from my home office in Selby, North Yorkshire"
  >
    <h1 className='has-text-centered'>About Rob Kendal</h1>
    <div className='container'>
      <p>
        I've been fortunate enough to have discovered computers during their
        golden beginnings when I was young. Although I liked maths and science,
        computers were always my first love.
      </p>
      <p>
        My first job was in a school as a network technician, building machines
        for classrooms and looking after the general network infrastructure.
        From there, I found my way into the ambulance service, working as part
        of a team to manage and support the Yorkshire Ambulance Service IT
        infrastructure.
      </p>
      <figure>
        <img
          src='/img/DwTTAP8X0AACBD9.jpg'
          alt='Young Rob Kendal sitting at a BBC computer'
        />
        <figcaption>
          Me killing it on a BBC computer with a great 80's haircut :)
        </figcaption>
      </figure>
      <p>
        It was in the ambulance service where I fell into web development – it's
        a very common origin story than you might think! I learnt asp.net – in
        it's original 2.0 flavour – using Visual Basic and moving onto C#.
      </p>
      <p>
        After building a number of internal web systems, I found myself doing
        less infrastructure support and more development.
      </p>
      <p>
        A few years later, after working alongside some world class designers
        and developers in digital agencies, I was introduced to WordPress
        through a very talented graphic designer friend of mine who runs{' '}
        <a
          href='https://www.createdfor.co.uk'
          target='_blank'
          rel='noopener noreferrer'
        >
          CreatedFor
        </a>
        .
      </p>
      <p>
        Fast forward almost two decades later and the web has changed
        dramatically from its humble beginnings. Today, I employ a range of
        technologies and different platforms to build websites that offer superb
        performance, great user expereinces and drive results for businesses.
      </p>
      <p>
        I've built marketing-led websites for the likes of North Yorkshire
        County Council (who saw a <strong>600% growth in leads</strong> over 6
        months following my work!), as well as partnering with HubSpot, a
        world-leading sales and marketing platform, to bring people the best of
        marketing automation direct to their business.
      </p>
      <p>
        As a frontend developer, I love to keep on top of new development
        strategies so I can give my clients the best websites possible, from
        using WordPress as a headless CMS, to building out websites using
        powerful JavaScript frameworks such as Gastby or Next.js. And I'll
        always have a love for React, the UI library from Facebook.
      </p>
      <p>
        I like to write and to document my knowledge right out in the open. I do
        this through publishing regular{' '}
        <Link href='/blog'>
          <a>articles on my blog</a>
        </Link>{' '}
        and being an active member of the{' '}
        <a href='https://twitter.com/kendalmintcode'>Twitter tech community</a>.
      </p>
      <p>
        I help give back to the development community by providing support,
        advice and guidance to aspiring developers through{' '}
        <Link href='/mentorship'>
          <a>my mentorship program</a>
        </Link>
        .
      </p>

      <p>
        You can listen to the web development podcast I run called &nbsp;
        <a
          href='https://thefrontendpodcast.site'
          target='_blank'
          rel='noopener noreferrer'
        >
          The Front End
        </a>
        &nbsp; which is available on &nbsp;
        <a
          href='https://anchor.fm/the-front-end'
          target='_blank'
          rel='noopener noreferrer'
        >
          Anchor podcasts
        </a>
        .
      </p>
      <p>
        When I'm not recording a podcast,{' '}
        <Link href='/wordpress-consultancy'>
          <a>offering web development consultancy services</a>
        </Link>{' '}
        or coding something exciting, then you'll find me right at home in the
        middle of Yorkshire in a small village North of the market town of Selby
        where I live with my wife and daughter.
      </p>
      <h2>Connect with me</h2>
      <SocialLinks />
      <h2>Hire me</h2>
      <ContactForm />
    </div>
  </Layout>
);

export default About;
