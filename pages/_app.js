import Layout from "../Components/Layout";
import GlobalStyle from "../styles/GlobalStyle.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
