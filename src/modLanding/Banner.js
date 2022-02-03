import React from "react";
import Error from "../components/Error";
import { HashLoading } from "../components/Loading";
import { useGetData } from "../hooks/dataApi";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("products", "/banner-product-list");

  if (isLoading) return <HashLoading />;

  if (isError) return <Error message={error.message} />;

  return (
    <Slider className="slider-wrapper">
      {list.data.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url('${item.banner}') no-repeat center center`,
          }}
        >
          <div className="inner px-20 md:px-28 flex items-center">
            <div className="">
              <h1 className="font-medium uppercase text-white text-3xl mb-2">
                {item.name}
              </h1>
              <h1 className="font-medium uppercase text-white text-4xl">
                Discount <span className="text-red-500">{item.discount}</span>
              </h1>
              <button
                type="button"
                onClick={() => history.push(`/product/${item.id}`)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
