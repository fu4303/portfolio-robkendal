import Layout from '../components/Layout';

const Publications = () => {
  return (
    <Layout>
      <h1>Publications</h1>
      <script src='https://gumroad.com/js/gumroad.js'></script>
      <a
        className='gumroad-button button is-primary'
        href='https://gum.co/WssIGB'
        target='_blank'
      >
        Get the ebook
      </a>
    </Layout>
  );
};

export default Publications;
