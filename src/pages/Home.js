import React from "react";

import Nav from "../components/Header/Nav";
import Header from "../components/Header/Header";
import About from "../components/About (Home)/About";
import Gallery from "../components/Gallery (Home)/GalleryHome";
import Award from "../components/Award (Home)/Award";
import Grid from "../components/Grid (Home)/homeServices";
import hHeader from "../components/Grid (Home)/homeHeader";
import Testimonials from "../components/Testimonials (Home)/Testimonials";
import Credits from "../components/Credits Link/Credits";
import Footer from "../components/Footer/Footer";
import Box from "../components/box (Home)/boxHome";
import Headergrid from '../components/Grid (Home)/HomeGridHeader';
import Brand from '../components/Branding (Home)/BrandingHome';
import Brandi from '../components/Branding (Home)/BrandServices';

import { Helmet } from "react-helmet";
import './styles.css';

const Home = () => {
  return (
    <div className="overflow-x-hidden home-div-box">
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </>
      <Nav />
      <Header />
      <About />
      <Headergrid />
      <Grid />
      <Box />
      <Gallery />
      <Brand />
      <Award />
      <Brandi />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
