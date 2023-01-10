import Layout from '../components/layout'
import getConfig from "next/config";
import '../styles/globals.css'

const { publicRuntimeConfig } = getConfig();
const environment = publicRuntimeConfig.env

function MyApp({ Component, pageProps }) {
  if (environment === 'prod') {
    return (
      <Layout>Nothing to see here</Layout>
    )
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
