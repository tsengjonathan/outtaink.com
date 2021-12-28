import Document, { Html, Head, Main, NextScript } from 'next/document'
import { repoName } from "../../prismicConfiguration";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
