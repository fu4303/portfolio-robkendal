import { getAllPostsXmlData } from '../lib/posts';

const Rss = ({ data }) => {
  return <></>;
};

export default Rss;

const blogPostsRssXml = blogPosts => {
  let latestPostDate = '';
  let rssItemsXml = '';
  blogPosts.forEach(post => {
    const postDate = Date.parse(post.date);
    const postHref = `https://robkendal.co.uk/blog/${post.id}`;
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.date;
    }
    rssItemsXml += `
      <item>
        <title><![CDATA[ ${post.title} ]]></title>
        <link>${postHref}</link>
        <pubDate>${post.date}</pubDate>
        <guid isPermaLink="false">${postHref}</guid>
        <description>
        <![CDATA[ ${post.description} ]]>
        </description>
        <content:encoded>
          <![CDATA[ ${post.contentHtml} ]]>
        </content:encoded>
    </item>`;
  });
  return {
    rssItemsXml,
    latestPostDate
  };
};

const getRssXml = blogPosts => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);
  return `<?xml version="1.0" ?>
  <rss
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    version="2.0"
  >
    <channel>
        <title><![CDATA[ Frontend development articles by Rob Kendal ]]></title>
        <link>https://robkendal.co.uk</link>
        <description>
          <![CDATA[ A friendly, reliable, remote freelance WordPress developer and website consultant with 15 years experience based in Selby, Yorkshire ]]>
        </description>
        <language>en</language>
        <lastBuildDate>${latestPostDate}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

export async function getServerSideProps({ res }) {
  const allBlogPostData = await getAllPostsXmlData();

  res.setHeader('Content-Type', 'text/xml');
  const processedXml = getRssXml(allBlogPostData);
  res.write(processedXml);
  res.end();

  return {
    props: {
      data: []
    }
  };
}
