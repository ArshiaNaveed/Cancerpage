import React, { Fragment } from "react";
import Header from "../HEADER/header";
import Footer from "../FOOTER/footer";
import Router from "../../allRoutes/allroutes"
import SocialMediaSection from "../../components/SocialMediaSection/SocialMediaSection"
import AboutSection from "../../components/AboutSection/AboutSection";

const layout = () => {
  return (
    <Fragment>
      <Header />
      <div className="mt-1000 !important"> 
      <Router />
      </div>
      <AboutSection />
        <SocialMediaSection />
      <Footer />
    </Fragment>
  );
};

export default layout;