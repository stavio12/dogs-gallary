import Navigate from "./Nav";
import Footer from "./Footer";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = (url) => {
  console.log(`Loading:${url}`);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children }) => {
  return (
    <div id="root">
      <Head>
        <link rel="stylesheet" href="nprogress.css" />
      </Head>
      <Navigate />
      {children}
      <Footer />
    </div>
  );
};
