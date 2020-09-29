import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div
            id='snipcart'
            data-api-key='ZjIwY2NhOGEtY2M2Zi00Y2JiLThiOTctMmRiMGFhOGZmNDBjNjM3MzI3MjYwNjczMjgyMDYw'
            hidden
          ></div>
          <script
            async
            src='https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
