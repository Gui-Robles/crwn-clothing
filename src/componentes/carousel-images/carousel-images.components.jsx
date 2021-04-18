import React from "react";

import "./carousel-images.styles.scss";

const ImgComponent = ({ src }) => {
  return (
    <div className="container">
      <img src={src} alt="banner" />
    </div>
  );
};

export default ImgComponent;
