import React from "react";
import List from "./List";
import OrderItem from "./OrderItem";

const OrderDetails = ({
  orderId,
  orderItems,
  billingDetails,
  shipiingDetails,
  userInfo,
  orderSummary,
}) => {
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
  const {
    firstName: shippingFirstName,
    lastName: shippingLastName,
    companyName: shippingCompanyName,
    country: shippingCountry,
    streetAddress: shippingStreetAddress,
    appartment: shipiingAppartment,
    city: shipiingCity,
    district: shipiingDistrict,
    postalCode: shipiingPostalCode,
    orderNotes: shipiingOrderNotes,
  } = shipiingDetails;

  return (
    <div>
      <h3 className="text-xl font-normal block break-words mb-3">
        Order Id: #{orderId}
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-8">
        <div className="md:col-span-5">
          <OrderItem orderItems={orderItems} />
        </div>
        <div className="md:col-span-3">
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
        <div className="md:col-span-5">
          <List
            title="Billing Details"
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
        <div className="md:col-span-3">
          <List
            title="Order Summary"
            list={[
              {
                label: "Order Created",
                value: orderSummary.orderDate,
              },
              {
                label: "Payment Type",
                value: orderSummary.paymentType,
              },
              {
                label: "Shipping Price",
                value: `AED ${orderSummary.shippingPrice}`,
              },
              {
                label: "Tax Price",
                value: `AED ${orderSummary.taxPrice}`,
              },
              {
                label: "Total Price",
                value: `AED ${orderSummary.totalPrice}`,
              },
            ]}
          />
        </div>
        <div className="md:col-span-5">
          <List
            title="Shipping Details"
            list={[
              {
                label: "First Name",
                value: shippingFirstName,
              },
              {
                label: "Last Name",
                value: shippingLastName,
              },
              {
                label: "Company",
                value: shippingCompanyName,
              },
              {
                label: "Street Address",
                value: shippingStreetAddress,
              },
              {
                label: "Appartment",
                value: shipiingAppartment,
              },
              {
                label: "Postal Code",
                value: shipiingPostalCode,
              },
              {
                label: "District",
                value: shipiingDistrict,
              },
              {
                label: "City",
                value: shipiingCity,
              },
              {
                label: "Country",
                value: shippingCountry,
              },
              {
                label: "Order Notes",
                value: shipiingOrderNotes,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
