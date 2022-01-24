import React from "react";
import List from "./List";
import OrderItem from "./OrderItem";

const OrderDetails = ({ orderItems, billingDetails, userInfo }) => {
  const { fullName, email } = userInfo;
  const {
    firstName,
    lastName,
    email: billingEmail,
    phone,
    companyName,
    apartment,
    streetAddress,
    state,
    city,
    country,
  } = billingDetails;
  return (
    <div>
      <h3 className="text-xl font-normal block break-words">
        Order Id: #156536589
      </h3>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-5">
          <OrderItem orderItems={orderItems} />
        </div>
        <div className="col-span-3">
          <List
            title="User Information"
            list={[
              {
                label: "User Name",
                value: fullName,
              },
              {
                label: "E-mail",
                value: email,
              },
            ]}
          />
        </div>
        <div className="col-span-5">
          <List
            title="BillingDetails"
            list={[
              {
                label: "Name",
                value: firstName + " " + lastName,
              },
              {
                label: "E-mail",
                value: billingEmail,
              },
              {
                label: "Phone Number",
                value: phone,
              },
              {
                label: "Company",
                value: companyName,
              },
              {
                label: "Appartment",
                value: apartment,
              },
              {
                label: "Street Address",
                value: streetAddress,
              },
              {
                label: "State",
                value: state,
              },
              {
                label: "City",
                value: city,
              },
              {
                label: "Country",
                value: country,
              },
            ]}
          />
        </div>

        {/* <BillingDetails billingDetails={billingDetails} />
        <div className="col-span-3">One</div> */}
      </div>
    </div>
  );
};

export default OrderDetails;
