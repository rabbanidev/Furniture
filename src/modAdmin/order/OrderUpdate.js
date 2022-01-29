import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Steps from "../../components/Steps";
import { usePostData } from "../../hooks/dataApi";

const OrderUpdate = ({ orderId, orderStatus, action }) => {
  const { mutateAsync } = usePostData();
  const [type, setType] = useState(null);
  const [submitting, setSubmitting] = useState(null);

  const updateOrder = async () => {
    const formData = { type };
    setSubmitting(true);
    try {
      const { status } = await mutateAsync({
        path: `/order/update/${orderId}`,
        formData: formData,
      });
      if (status === 202) {
        action();
      }
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data.message);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <select
        className="w-24 h-10 px-3 mb-2 mr-2 bg-gray-200 capitalize sm:w-72 md:w-96"
        onChange={(e) => setType(e.target.value)}
        disabled={submitting}
      >
        <option className="capitalize">--Select--</option>
        {orderStatus.map((item) => (
          <option
            key={item._id}
            value={item.type}
            disabled={item.complete}
            className="capitalize"
          >
            {item.type}
          </option>
        ))}
      </select>
      <button
        className="btn-primary"
        type="button"
        disabled={submitting}
        onClick={updateOrder}
      >
        Order Update
      </button>
      <Steps orderStatus={orderStatus} />
    </div>
  );
};

export default OrderUpdate;
