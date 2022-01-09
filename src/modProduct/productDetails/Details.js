import React from "react";
import { useForm } from "react-hook-form";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { useGlobalContext } from "../../hooks/context";

const Details = ({
  productId,
  name,
  oldPrice,
  newPrice,
  discount,
  title,
  setincludes,
  shortDes,
  inStock,
  outStock,
  image,
}) => {
  const value = useGlobalContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const currentProduct = {
      productId,
      name,
      oldPrice,
      newPrice,
      image,
      quantity: +data.quantity,
    };
    value.addToCart(currentProduct);
  };

  return (
    <div className="lg:px-5 mt-10">
      <h2 className="font-medium text-3xl uppercase">{name}</h2>
      <div className="py-5 flex gap-x-5">
        <span className="line-through text-2xl">AED {oldPrice}</span>
        <span className="text-2xl text-red-500">AED {newPrice}</span>
        <div className="px-5 text-md bg-red-500 text-white flex justify-center items-center">
          {discount}
        </div>
      </div>
      <div className="mb-4 text-md">
        <p className="font-medium">{title}</p>
        <p className="mt-4">{setincludes}</p>
        {shortDes.length > 0 &&
          shortDes.map((des, index) => (
            <p key={index} className="mt-4 font-normal">
              {des}
            </p>
          ))}
      </div>
      <div>
        {inStock && (
          <div className="flex gap-x-2 items-center">
            <FaRegCheckCircle />
            IN STOCK
          </div>
        )}
        {outStock && (
          <div className="flex gap-x-2 items-center">
            <FaRegCircle />
            OUT STOCK
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-56 px-2 py-2 mt-4 bg-gray-900 flex gap-x-2">
          <input
            type="number"
            name="quantity"
            min={1}
            defaultValue={1}
            className="px-2 py-1 w-12 outline-none border-0"
            required={true}
            {...register("quantity")}
          />
          <button type="submit" className="text-white w-40 text-sm">
            ADD TO CART
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
