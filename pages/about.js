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
        I got into computers (and video games) from an early age. Although I
        liked maths and science, computers were always my first love.
      </p>
      <p>
        My first real job was in a school as a network technician, building
        machines for classrooms and looking after the general network
        infrastructure. From there, I found my way into the ambulance service,
        working as part of a team to manage and support the Yorkshire Ambulance
        Service IT infrastructure.
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
        more common of a starting story than you might think! I learnt asp.net –
        in it's original 2.0 flavour – using Visual Basic and moving onto C#.
      </p>
      <p>
        After building a number of internal web systems, I found myself doing
        less infrastructure support and more development.
      </p>
      <p>
        That was it for me, the defining moment where I knew I wanted to develop
        all the things! I moved into the commercial sector, moving around a few
        creative agencies and **working with some super-talented people**,
        hopefully learning as much from them along the way.
      </p>
      <p>
        More recently, I co-founded a creative marketing agency and managed
        HubSpot campaigns for some local business heroes as well as some bigger
        players, such as North Yorkshire County Council. We even won some awards
        for our work!
      </p>
      <p>
        Right now, I'm very excited to be working on a range of projects
        involving React and Node JS. I enjoy blogging, presenting at events (and
        sharing as much knowledge as I can), and learning something new every
        day.
      </p>
      I also run a web development podcast called &nbsp;
      <a
        href='https://thefrontendpodcast.site'
        target='_blank'
        rel='noopener noreferrer'
      >
        The Front End &nbsp;
      </a>
      which is available on &nbsp;
      <a
        href='https://anchor.fm/the-front-end'
        target='_blank'
        rel='noopener noreferrer'
      >
        Anchor podcasts
      </a>
      <h2>Connect with me</h2>
      <SocialLinks />
      <h2>Hire me</h2>
      <ContactForm />
    </div>
  </Layout>
);

export default About;
