import Head from "next/head";
import Router from "next/router";
import Nprogress from "nprogress";
Router.onRouteChangeStart = (url) => {
  Nprogress.start();
};
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();
export default ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>Github users</title>
    </Head>
    <header></header>
    <h1 className="mt-5 pt-2">{title}</h1>
    {children}
    <footer>
      <p className="footer-text">
        Copyright &copy; Github{new Date().getFullYear()}
      </p>
    </footer>
  </React.Fragment>
);
