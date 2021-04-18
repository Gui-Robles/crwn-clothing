import React from "react";

import Directory from "../../componentes/directory/directory.components";
import CarouselSlider from "../../componentes/carousel/carousel.components";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <CarouselSlider />
    <Directory />
  </div>
);

export default HomePage;
