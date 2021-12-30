import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
      <div className="min-h-full px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
        <div className="xl:max-w-xl">
          <img className="h-10" src="/images/logo.png" alt="logo" />
          <img
            className="mt-6 rounded-lg sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
            src="/images/404.png"
            alt=""
          />
          <h1 className="mt-6 text-2xl font-bold text-primary italic sm:mt-8 sm:text-4xl lg:text-3xl xl:text-3xl">
            We couldn't Find the page at the moment.
            <br className="inline" />
          </h1>
          <h1 className="text-red-800 text-bold text-4xl">404 Error</h1>
          <h2 className="text-gray-800 text-bold text-2xl">
            Don't worry you are safe now. Try to ...
          </h2>

          <div className="mt-4 sm:mt-6 space-x-1">
            <Link
              to="/"
              className="inline-block px-5 py-3 rounded-lg border text-primary border-primary hover:bg-primary hover:text-white uppercase tracking-wider cursor-pointer font-semibold text-sm shadow-lg sm:text-base"
            >
              Back &#10148;
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden relative lg:block 2xl:col-span-3">
        {/* <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/images/404.png"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default NotFound;
