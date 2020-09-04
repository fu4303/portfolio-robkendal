import Link from 'next/link';

// components
import Layout from '../components/Layout';

const RecruiterFaq = () => {
  return (
    <Layout
      title='Recruitment FAQ | Rob Kendal, freelance developer'
      description='Answers to the most frequently asked questions I get from recruiters'
    >
      <div className='container'>
        <h1>FAQ for recruiters</h1>
        <p>
          Well hello there. If you've found me via a social network or have
          simply been pointed here via my own fair hand, please take the time to
          read the information I've put together on this page.
        </p>

        <p>
          It's not a massive read, but it should cover a lot of the common
          points that I get asked about when talking to recruiters. Whilst I do
          love talking to people and I'm always happy to talk about my work, I
          have a lot of very similar conversations with a lot of recruiters and
          I simply want to save us both some time getting to know if we're a
          good fit.
        </p>

        <p>Before we start, here are a few important links:</p>

        <ul>
          <li>
            <a href=' https://www.visualcv.com/rob-kendal-dev/'>
              My up to date CV
            </a>{' '}
            – made with Visual CV.
          </li>
          <li>
            <a href='https://www.linkedin.com/in/robkendal/'>
              My LinkedIn profile
            </a>
          </li>
          <li>
            My email address,{' '}
            <a href='mailto:me@robkendal.co.uk'>me[at]robkendal.co.uk</a>
          </li>
        </ul>

        <h2>Are you looking for work at the moment?</h2>

        <p>No.</p>

        <p>
          I'm settled where I am with a mixture of a full time role as a Senior
          AWS Consultant and my work as a{' '}
          <Link href='/freelance-wordpress-consultant'>
            <a>freelance WordPress consultant</a>
          </Link>
          .
        </p>

        <h2>What does your ideal role look like?</h2>

        <p>
          I'm all about culture and the people that make up the company. It's
          hard to really define something as abstract as culture, but as a
          general rule, what I look for includes:
        </p>

        <ul>
          <li>
            Working with modern technologies and approaches to problem-solving
          </li>
          <li>Permanent roles</li>
          <li>
            Strong team unity with opportunities to learn, grow, and support
            each other
          </li>
          <li>Agile development environments</li>
          <li>Strong career and personal development</li>
          <li>
            Independence and empowerment to tackle problems with a level of
            autonomy
          </li>
          <li>High levels of trust in employees</li>
          <li>Flexible hours</li>
          <li>Home working options</li>
          <li>
            Work-life balance. 40 hours is more than enough time to devote to a
            working week.
          </li>
        </ul>

        <p>
          As a slightly more concrete example of a really ace company that's
          nailed the culture, check out{' '}
          <a href='https://www.hubspot.com/jobs'>Hubspot's careers page</a>{' '}
          where they even have their own culture code.
        </p>

        <h2>Do you have a preferred technology stack?</h2>

        <p>
          Most of my work now is in frontend technologies, largely based in
          JavaScript. My current, general tech stack looks like this:
        </p>

        <ul>
          <li>JAMstack (JavaScript, API's, Markup)</li>
          <li>React (or Vue)</li>
          <li>ES6 JavaScript</li>
          <li>Next.js</li>
          <li>Gatsby</li>
          <li>
            CSS – both vanilla and preprocessors (SASS) using modern layouts,
            such as grid or flexbox
          </li>
          <li>CSS frameworks such as Bulma, Foundation, Bootstrap</li>
          <li>Bundlers such as Webpack or Parcel</li>
          <li>Accessible, semantic HTML</li>
        </ul>

        <h2>What sort of experience do you have?</h2>

        <p>
          I've been in the IT industry for over 15 years, most of that as a
          developer. I started in full stack development using the Microsoft
          (MS) tech stack of C#, ASP.Net 2.0. In more recent years, I have been
          a senior frontend developer specialising in performant websites using
          the latest JavaScript and frameworks, such as React.
        </p>

        <p>
          You can read a little more about me and my history in the following
          places:
        </p>

        <ul>
          <li>
            <a href='https://robkendal.co.uk/about/'>About me page</a>
          </li>
          <li>
            <a href='https://www.visualcv.com/rob-kendal-dev/'>My Visual CV</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/robkendal/'>
              My LinkedIn profile
            </a>
          </li>
        </ul>

        <h2>What are your salary expectations?</h2>

        <p>Culture is a big deal and will always come above salary for me.</p>

        <p>
          That said, I'm not willing to disclose current or past salaries.
          Whilst not true in every case, disclosing salary information from my
          side can be (and has been) used to cap or limit offers.
        </p>

        <p>
          I've never seen a good argument for anyone offering a job to need to
          know the applicant's current salary. For me, it comes down to there
          being a position available at a – hopefully, at least – competitive
          market rate. If I am a fit, then that's great! Let's move forward.
        </p>

        <h2>Are you willing to relocate for the right role?</h2>

        <p>No.</p>

        <h2>What sort of locations are you able to work in?</h2>

        <p>
          Living in <strong>Selby, North Yorkshire</strong>, I'm happy to work
          in the following locations for permanent roles (about 30 mins from my
          home):
        </p>

        <p>(In preferential order)</p>

        <ul>
          <li>Selby</li>
          <li>York</li>
          <li>Leeds</li>
          <li>Beverley and Hull</li>
        </ul>

        <p>
          Of course, fully remote roles are ace and I'll always consider those
          :)
        </p>

        <h2>I've come across your CV on 'XYZ' can we have a quick call?</h2>

        <p>I'll have to politely decline, initially.</p>

        <p>
          I am more than happy to have a conversation about opportunities over
          the phone, but it has to be at a mutually agreed time. I don't answer
          cold calls during my working day as it interrupts development work.
        </p>

        <p>I prefer to avoid phone calls initially because:</p>

        <ul>
          <li>
            There is a lot of information already on this page that can be used
            to sift me in or out of a potential opportunity – thus saving
            everyone time.
          </li>
          <li>
            I prefer email as my primary mode of communication so please shoot
            me an email which includes the following information:
          </li>
          <ul>
            <li>The job spec</li>
            <li>Salary and benefits information</li>
            <li>
              <strong>A subject line of 'React is ace!'</strong> so that I know
              you've made it this far onto the page. You will always get a reply
              from me!
            </li>
          </ul>
        </ul>

        <h2>Can you send me an up to date copy of your CV?</h2>

        <p>
          I could, but you can always view the latest, most up to date version
          of my CV on{' '}
          <a href='https://www.visualcv.com/rob-kendal-dev/'>
            my Visual CV page
          </a>
          .
        </p>

        <p>You can also download it in PDF format from there.</p>

        <p>
          Alternatively,{' '}
          <a href='https://www.linkedin.com/in/robkendal/'>
            my LinkedIn profile
          </a>{' '}
          is always kept as a living experience document so that it matches my
          work history, current projects and achievements.
        </p>

        <h2>Do you have your CV in PDF/Word/XYZ format?</h2>

        <p>
          Again, you can download a PDF version of my CV from{' '}
          <a href='https://www.visualcv.com/rob-kendal-dev/'>
            my Visual CV page
          </a>
          .
        </p>

        <p>
          I'm afraid I don't keep a copy in any other formats because I don't
          have access to MS Word and I'm not comfortable providing my CV in an
          editable format.
        </p>

        <p>
          However, I'm happy to alter anything to suit, if you give me a heads
          up.
        </p>

        <h2>What is your notice period?</h2>

        <p>Currently, one month.</p>
      </div>
    </Layout>
  );
};

export default RecruiterFaq;
