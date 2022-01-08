import React from "react";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  return (
    <div className="my-5">
      <div className="grid grid-cols-12 grid-rows-2 gap-2 md:gap-5">
        <div className="col-span-12 lg:col-span-6 h-100 relative">
          <img
            className="w-full h-100"
            src="https://i.ibb.co/sbLZSWf/sofa.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-backdrop opacity-100"></div>
          <div className="absolute bottom-10 left-10 z-50">
            <Link
              to="/product-category/living/sofa-collection"
              className="pb-2 font-medium text-2xl uppercase block text-white hover:underline"
            >
              SOFA COLLECTION
            </Link>
            <div className="grid grid-cols-2">
              <div>
                <Link
                  to="/product-category/living/sofa-collection/sofa-sets"
                  className="pb-2 font-normal text-xs capitalize block text-white hover:underline"
                >
                  Sofa sets
                </Link>
                <Link
                  to="/product-category/living/sofa-collection/chairs"
                  className="pb-2 font-normal text-xs capitalize block text-white hover:underline"
                >
                  Chair
                </Link>
              </div>
              <div>
                <Link
                  to="/product-category/living/sofa-collection/two-seater"
                  className="pb-2 font-normal text-xs capitalize block text-white hover:underline"
                >
                  Two Seater
                </Link>
                <Link
                  to="/product-category/living/sofa-collection/three-seater"
                  className="pb-2 font-normal text-xs capitalize block text-white hover:underline"
                >
                  Three Seater
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 h-100 relative">
          <img
            className="w-full h-100"
            src="https://i.ibb.co/CMm6mH8/table.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-backdrop opacity-100"></div>
          <div className="absolute bottom-10 left-10 z-50">
            <Link
              to="/product-category/living/slide-table"
              className="pb-2 font-medium text-2xl uppercase block text-white hover:underline"
            >
              Slide Table
            </Link>
            <Link
              to="/product-category/living/slide-table"
              className="pb-2 font-normal text-xs capitalize block text-white hover:underline"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 h-100 relative">
          <img
            className="w-full h-100"
            src="https://i.ibb.co/JBCvTkG/lamp.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-backdrop opacity-100"></div>
          <div className="absolute bottom-10 left-10 z-50">
            <Link
              to="/product-category/decor"
              className="pb-2 font-medium text-2xl uppercase block text-white hover:underline"
            >
              Home Decor
            </Link>
            <Link
              to="/product-category/decor"
              className="pb-2 font-normal text-xs capitalize block text-white hover:underline"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 h-100 relative">
          <img
            className="w-full h-100"
            src="https://i.ibb.co/8cZHD89/trynow.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-backdrop opacity-100"></div>
          <div className="absolute bottom-10 left-10 z-50">
            <Link
              to="/product-category/true-view"
              className="pb-2 font-medium text-2xl uppercase block text-white hover:underline"
            >
              True View
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 h-100 relative">
          <img
            className="w-full h-100"
            src="https://i.ibb.co/hC16mBV/accessories.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-backdrop opacity-100"></div>
          <div className="absolute bottom-10 left-10 z-50">
            <Link
              to="/product-category/decor"
              className="pb-2 font-medium text-2xl uppercase block text-white hover:underline"
            >
              Accessories
            </Link>
            <Link
              to="/product-category/decor"
              className="pb-2 font-normal text-xs capitalize block text-white hover:underline"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 h-100 relative">
          <img
            className="w-full h-100"
            src="https://i.ibb.co/sCDhD2g/bed.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-backdrop opacity-100"></div>
          <div className="absolute bottom-10 left-10 z-50">
            <Link
              to="/product-category/bed-room/bed-room-furniture/beds-headboards"
              className="pb-2 font-medium text-2xl uppercase block text-white hover:underline"
            >
              Bed & Headboard
            </Link>
            <Link
              to="/product-category/bed-room/bed-room-furniture/beds-headboards"
              className="pb-2 font-normal text-xs capitalize block text-white hover:underline"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
