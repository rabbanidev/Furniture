import React from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "../../components/button/SecondaryButton";

const CheckoutPayment = ({ submitting }) => {
  return (
    <div className="py-10 bg-white text-black">
      <div className="px-10 pb-8 mb-8 border-b border-gray-100">
        <div className="flex justify-center">
          <img
            src="https://www.royalfurniture.ae/wp-content/plugins/its-migs/images/its-migs.png"
            alt=""
          />
        </div>
        <div className="py-5 px-5 text-sm ">
          Pay securely by Credit Card/Debit Card through MasterCard Internet
          Gateway Service.
        </div>
      </div>
      <div className="px-10 text-sm">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our{" "}
        <Link to="" className="text-blue-400 hover:underline">
          privacy policy
        </Link>
        <SecondaryButton
          btnText="PLACE ORDER"
          type="submit"
          disabled={submitting}
        />
      </div>
    </div>
  );
};

export default CheckoutPayment;
