import Head from 'next/head';
import { Layout } from '../src/components'
import '../styles/globals.css'
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <title>Vitrinni Carioca</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
