import Layout from '../components/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className='container'>
        <h1>Projects</h1>
        <p>
          I have a few open source projects and repositories that I'm working on
          or have available on{' '}
          <a href='https://github.com/bpk68/'>my GitHub account</a>.
          <br />
          I've broken down a few of the more popular ones here. Check them out
          and feel free to fork, feedback, leave pull requests, or request
          features :D.
        </p>

        <article className='project-item media section'>
          <figure className='media-left'>
            <a href='https://github.com/bpk68/g-sheets-api'>
              <img src='/img/g-sheets-logo.png' alt='Google Sheets icon' />
            </a>
          </figure>
          <div className='media-content'>
            <p className='subtitle is-size-6 has-text-uppercase has-text-grey-light no-margin'>
              g-sheets-api
            </p>
            <h2 className='title is-size-4'>
              <a href='https://github.com/bpk68/g-sheets-api'>
                Google Sheets Reader
              </a>
            </h2>
            <p>
              This tiny (but hopefully mighty) utility package helps fetch, read
              and process data from a Google Sheet without the faff of having to
              deal with the full-blown Google Sheets API
            </p>
            <p>
              <a href='https://github.com/bpk68/g-sheets-api'>Find out more</a>
            </p>
          </div>
        </article>

        <article className='project-item media section'>
          <figure className='media-left'>
            <a href='https://github.com/bpk68/api-server-starter'>
              <img src='/img/nodejs-new-pantone-black.png' alt='Node JS logo' />
            </a>
          </figure>
          <div className='media-content'>
            <p className='subtitle is-size-6 has-text-uppercase has-text-grey-light no-margin'>
              api-server-starter
            </p>
            <h2 className='title is-size-4'>
              <a href='https://github.com/bpk68/api-server-starter'>
                Node API Server Starter Kit
              </a>
            </h2>
            <p>
              This popular starter kit (currently being used as part of the
              curriculum in a university course) contains everything you'll need
              to create your very own Node-based API server. It uses Express JS
              and is configured to serve JSON files for data.
            </p>
            <p>
              <a href='https://github.com/bpk68/api-server-starter'>
                Find out more
              </a>
            </p>
          </div>
        </article>

        <article className='project-item media section'>
          <figure className='media-left'>
            <a href='https://github.com/bpk68/react-visual-query-builder'>
              <img src='/img/react-logo.png' alt='React logo' />
            </a>
          </figure>
          <div className='media-content'>
            <p className='subtitle is-size-6 has-text-uppercase has-text-grey-light no-margin'>
              react-visual-query-builder
            </p>
            <h2 className='title is-size-4'>
              <a href='https://github.com/bpk68/react-visual-query-builder'>
                React Visual Query Builder
              </a>
            </h2>
            <p>
              Driven by a need for a more customised query builder tool built in
              React, I developed an open source query builder that will output a
              structured JSON query object comprised of rules, rule-groups and a
              number of field components depending on desired input type.
            </p>
            <p>
              <a href='https://github.com/bpk68/react-visual-query-builder'>
                Find out more
              </a>
            </p>
          </div>
        </article>

        <article className='project-item media section'>
          <figure className='media-left'>
            <a href='https://github.com/bpk68/Family-Dog-Finder'>
              <img src='/img/ruff-guides-logo.png' alt='Ruff Guides logo' />
            </a>
          </figure>
          <div className='media-content'>
            <p className='subtitle is-size-6 has-text-uppercase has-text-grey-light no-margin'>
              Family-Dog-Finder (in progress)
            </p>
            <h2 className='post-title title is-size-4'>
              <a href='https://github.com/bpk68/Family-Dog-Finder'>
                Ruff Guides: a family dog matcher
              </a>
            </h2>
            <p>
              This one is a light-hearted attempt to match families with their
              perfect breed of dog. Simply answer a few questions and the
              matching engine will return a list of possible breeds that could
              work for your family.
            </p>
            <p>
              <a href='https://github.com/bpk68/Family-Dog-Finder'>
                Find out more
              </a>
            </p>
          </div>
        </article>

        <br />
        <iframe
          src='https://github.com/sponsors/bpk68/card'
          title='Sponsor me'
          height='225'
          style={{ border: '0', width: '100%' }}
        ></iframe>
      </div>
    </Layout>
  );
};

export default Projects;
