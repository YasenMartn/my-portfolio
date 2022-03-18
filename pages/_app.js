import Layout from "../Components/Layout";
import GlobalStyle from "../styles/GlobalStyle.css";

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
