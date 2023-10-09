import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <Layout title={"go back- page not found"}>
      <section className="page-not-found">
      <div className="pnf-container">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
        </div>
        </section>
    </Layout>
  );
};

export default PageNotFound;
