import React from "react";
import Input from "../../components/Input";

const BillingDetails = ({ register, errors }) => {
  const { firstName, lastName, country, streetAddress, city, phone, email } =
    errors;

  return (
    <div className="form-col">
      <p className="font-medium text-gray-700">BILLING DETAILS</p>
      <div className="grid grid-cols-2 gap-x-8">
        <Input
          name="firstName"
          type="text"
          placeholder=""
          label="First Name"
          register={register}
          errorMessage={firstName?.message}
        />
        <Input
          name="lastName"
          type="text"
          placeholder=""
          label="Last Name"
          register={register}
          errorMessage={lastName?.message}
        />
      </div>
      <Input
        name="companyName"
        type="text"
        placeholder=""
        label="Company Name(Optional)"
        register={register}
      />
      <Input
        name="country"
        type="text"
        placeholder=""
        label="COUNTRY / REGION"
        register={register}
        errorMessage={country?.message}
      />
      <Input
        name="streetAddress"
        type="text"
        placeholder="House number & street name"
        label="STREET ADDRESS"
        register={register}
        errorMessage={streetAddress?.message}
      />
      <Input
        name="apartment"
        type="text"
        placeholder="Apartment, suite, unit, etc. (optional)"
        register={register}
      />
      <Input
        name="city"
        type="text"
        placeholder=""
        label="TOWN / CITY"
        register={register}
        errorMessage={city?.message}
      />
      <Input
        name="state"
        type="text"
        placeholder=""
        label="STATE / COUNTRY(OPTIONAL)"
        register={register}
      />
      <Input
        name="phone"
        type="text"
        placeholder=""
        label="PHONE"
        register={register}
        errorMessage={phone?.message}
      />
      <Input
        name="email"
        type="email"
        placeholder=""
        label="EMAIL ADDRESS"
        register={register}
        errorMessage={email?.message}
      />
    </div>
  );
};

export default BillingDetails;
