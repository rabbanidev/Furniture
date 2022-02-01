import React, { useState } from "react";
import Input from "../../components/Input";

const ShippingAddress = ({ register, errors, show }) => {
  const [expanded, setExpanded] = useState(show);
  const {
    shippingFirstName,
    shippingLastName,
    shippingCountry,
    shippingStreetAddress,
    shippingCity,
    shippingDistrict,
  } = errors;

  return (
    <div className="form-col relative">
      <div className="flex items-center gap-x-2 absolute -top-5">
        <input
          type="checkbox"
          id="shippingAddress"
          className="cursor-pointer"
          onChange={() => setExpanded(!expanded)}
        />
        <label
          className="font-medium text-gray-700 cursor-pointer"
          htmlFor="shippingAddress"
        >
          SHIP TO A DIFFERENT ADDRESS?
        </label>
      </div>
      {expanded && (
        <>
          <div className="mt-5 grid grid-cols-2 gap-x-8">
            <Input
              name="shippingFirstName"
              type="text"
              placeholder=""
              label="First Name"
              register={register}
              errorMessage={shippingFirstName?.message}
            />
            <Input
              name="shippingLastName"
              type="text"
              placeholder=""
              label="Last Name"
              register={register}
              errorMessage={shippingLastName?.message}
            />
          </div>
          <Input
            name="shippingCompanyName"
            type="text"
            placeholder=""
            label="Company Name(Optional)"
            register={register}
          />
          <Input
            name="shippingCountry"
            type="text"
            placeholder=""
            label="COUNTRY / REGION"
            register={register}
            errorMessage={shippingCountry?.message}
          />
          <Input
            name="shippingStreetAddress"
            type="text"
            placeholder="House number & street name"
            label="STREET ADDRESS"
            register={register}
            errorMessage={shippingStreetAddress?.message}
          />
          <Input
            name="shippingApartment"
            type="text"
            placeholder="Apartment, suite, unit, etc. (optional)"
            register={register}
          />
          <Input
            name="shippingCity"
            type="text"
            placeholder=""
            label="TOWN / CITY"
            register={register}
            errorMessage={shippingCity?.message}
          />
          <Input
            name="shippingDistrict"
            type="text"
            placeholder=""
            label="DISTRICT"
            register={register}
            errorMessage={shippingDistrict?.message}
          />
          <Input
            name="shippingPostalCode"
            type="text"
            placeholder=""
            label="POSTAL / ZIP CODE(OPTIONAL)"
            register={register}
          />
          {!show && (
            <div className="form-row">
              <label className="pb-0.5 text-gray-600 font-medium text-xs uppercase">
                ORDER NOTES (OPTIONAL)
              </label>
              <textarea
                type="text"
                className="form-control input-border-primary "
                placeholder=""
                {...register("shippingOrderNotes")}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShippingAddress;
