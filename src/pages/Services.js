import React from "react";

import Nav from "../components/Header/Nav";
import Header from "../components/Grid (Home)/homeHeader";
import Grid from "../components/Grid (Home)/homeGrid";
import Credits from "../components/Credits Link/Credits";
import { Helmet } from "react-helmet";
import Brandi from '../components/Branding (Home)/BrandServices';
import Pricing from '../components/Pricing/Pricing';

const Services = () => {
  return (
    <div className="overflow-x-hidden home-div-box">
      <>
        <Helmet>
          <title>Services</title>
        </Helmet>
      </>
      <Nav />
      <Header />
      <Pricing />
      <Grid />
      <Brandi />
      <Credits />
    </div>
  );
};

export default Services;
