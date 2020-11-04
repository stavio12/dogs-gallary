import "../src/styles/styles.css";
import "../src/styles/progress.css";
import "../src/styles/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../src/component/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
