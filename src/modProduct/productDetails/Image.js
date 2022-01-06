import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
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

const Image = ({ productImages }) => {
  const [selectedBigImg, setSelectedBigImg] = useState(productImages[0].url);

  console.log("selectedBigImg", selectedBigImg);

  return (
    <Slider {...settings}>
      {productImages.map((productImage) => (
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: productImage.url,
            },
            largeImage: {
              src: productImage.url,
              width: 1200,
              height: 1800,
            },
          }}
        />
        // <img src={productImage.url} alt="" />
      ))}
    </Slider>
    // <div className="">
    //   <img src={selectedBigImg} alt="" />
    //   <div className="flex gap-x-2 justify-center mt-10">
    //     {productImages.map((productImage) => (
    //       <img
    //         className="w-24 h-24 cursor-pointer"
    //         src={productImage.url}
    //         alt=""
    //         onClick={() => setSelectedBigImg(productImage.url)}
    //       />
    //     ))}
    //   </div>
    // </div>
  );
};

export default Image;
