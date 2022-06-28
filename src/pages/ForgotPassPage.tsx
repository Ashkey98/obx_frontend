import React from "react";
import SectionHeading from "../layout/Generic/SectionHeading";
import Header from "../layout/Generic/Header";
import Footer from "../layout/Generic/Footer";
import ForgotPass from "../layout/ForgotPass";

const ForgotPassPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Frogot Password" />
      <ForgotPass />
      <Footer />
    </>
  );
};

export default ForgotPassPage;
