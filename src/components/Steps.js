import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiX, FiCheck } from "react-icons/fi";
import { usePostData } from "../hooks/dataApi";

const Steps = ({ orderId, orderStatus, action }) => {
  const { mutateAsync } = usePostData();
  const [type, setType] = useState(null);
  const [submitting, setSubmitting] = useState(null);

  const updateOrder = async () => {
    const formData = { type };
    setSubmitting(true);
    try {
      const { status, data } = await mutateAsync({
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

      <div className="w-full my-5 flex gap-x-3 md:gap-x-24">
        {orderStatus.map((step, index, arr) => (
          <div key={step._id}>
            <div
              className={`w-8 h-8 relative flex items-center justify-center rounded-full md:w-16 md:h-16 ${
                step.complete ? "bg-success text-white" : "bg-gray-300"
              }`}
            >
              <span className="font-bold text-3xl">
                {step.complete ? <FiCheck /> : <FiX />}
              </span>
              {arr.length - 1 !== index && (
                <div
                  className={`w-10 border-t-4 absolute top-2/4 -right-8 md:w-32 md:-right-28 ${
                    step.complete ? "border-success" : "border-gray-300"
                  }`}
                ></div>
              )}
            </div>
            <span className="font-medium text-sm capitalize">{step.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
