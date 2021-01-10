import Head from "next/head";
import "bootswatch/dist/slate/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
