import React from "react";

import Directory from "../../componentes/directory/directory.components";
import CarouselSlider from "../../componentes/carousel/carousel.components";

import { HomaPageContairner } from "./homepage.styles";

const HomePage = () => (
  <HomaPageContairner>
    <CarouselSlider />
    <Directory />
  </HomaPageContairner>
);

export default HomePage;
