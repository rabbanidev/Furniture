import React from "react";

const BillingDetails = ({ billingDetails }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    apartment,
    streetAddress,
    state,
    city,
    country,
  } = billingDetails;
  return (
    <div className="col-span-5">
      <h3 className="text-xl font-normal block break-words">BillingDetails</h3>
      <div className="rounded grid grid-cols-1 gap-1">
        <div className="flex justify-between bg-gray-100 p-2">
          <span>Name</span>
          <span>{firstName + " " + lastName}</span>
        </div>
        <div className="flex justify-between bg-gray-200 p-2">
          <span>E-mail</span>
          <span>{email}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2">
          <span>Phone Number</span>
          <span>{phone}</span>
        </div>
        <div className="flex justify-between bg-gray-200 p-2">
          <span>Company</span>
          <span>{companyName}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2">
          <span>Appartment</span>
          <span>{apartment}</span>
        </div>
        <div className="flex justify-between bg-gray-200 p-2">
          <span>Street Address</span>
          <span>{streetAddress}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2">
          <span>State</span>
          <span>{state}</span>
        </div>
        <div className="flex justify-between bg-gray-200 p-2">
          <span>City</span>
          <span>{city}</span>
        </div>
        <div className="flex justify-between bg-gray-200 p-2">
          <span>Country</span>
          <span>{country}</span>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
