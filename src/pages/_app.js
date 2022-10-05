import "/styles/globals.css";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />;
    </ParallaxProvider>
  );
}

export default MyApp;
