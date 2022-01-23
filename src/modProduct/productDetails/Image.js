import React from "react";
import Zoom from "react-image-zooom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Image = ({ images }) => {
  return (
    <div className="px-2 lg:px-0">
      <Slider {...settings}>
        {images.map((productImage) => (
          <Zoom key={productImage.id} src={productImage.url} zoomScale={10} />
        ))}
      </Slider>
    </div>
  );
};

export default Image;
