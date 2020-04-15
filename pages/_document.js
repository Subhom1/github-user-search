import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Github user details" />
          <meta name="keywords" content="HTML,CSS,XML,JavaScript" />
          <meta name="author" content="Subhom Kundu" />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
