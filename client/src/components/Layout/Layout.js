import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <div>
          <meta name="description" content={props.description} />
          <meta name="keywords" content={props.keywords} />
          <meta name="author" content="samanvaya" />
        </div>

        <title>{props.title}</title>
      </Helmet>
      <Header />

      <main style={{ minHeight: "82vh" }}>
        <Toaster />
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "E Commerce App",
  description: "You can buy any type of products from this website",
};

export default Layout;
