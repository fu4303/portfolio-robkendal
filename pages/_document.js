import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script id="frase-script" data-hash="5da52150885f46fb950540edd57be061" src="https://app.frase.io/js/libraries/bot.js"/>
          <script id="frase-schema" data-hash="728d7a1a-5a91-4b83-8d9e-9e761260d559" src="https://app.frase.io/js/libraries/schema.js"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://media.ethicalads.io/media/client/ethicalads.min.js"/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
