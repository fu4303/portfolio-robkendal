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
            data-api-key='YjFhNDYyNGUtNTVjZS00NWNiLTkyZTQtNjBkYzAzNDIxZGI2NjM3MzI3MjYwNjczMjgyMDYw'
            hidden
          ></div>
          <script src='https://cdn.snipcart.com/themes/v3.0.20/default/snipcart.js'></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
