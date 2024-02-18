import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout = ({ children, title, description, keywords, author, }) => {
  return (
    <div className="layout">
      {/* helmet is used for SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      {/* SEO END */}
      <Header />
      <main style={{ minHeight: "76vh" }}>
        <Toaster />
        {children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Amulya Artistry Shop",
  description: "Vocal for Local E-Commerce Website",
  keywords: "mern project, vocal for local project, node, mongo, e commerce website",
  author: "chuneshwar karanjekar"
}

export default Layout;
