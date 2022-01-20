import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SaveButton from "../../components/button/SaveButton";
import Input from "../../components/Input";

const ProductForm = ({ defaultValues, action, btnText, path, returnPath }) => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    // resolver: yupResolver(TenantSchema),
  });

  const {
    name,
    type,
    oldPrice,
    newPrice,
    inStock,
    outStock,
    title,
    setincludes,
    informationShipping,
    informationSizeing,
    informationAssistance,
    informationStoreMail,
    description,
    shortDesOne,
    shortDesTwo,
    shortDesThree,
    image,
  } = errors;

  const onSubmit = async (formData) => {
    console.log("formData", formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("tenantId")} />
      <div className="form-col">
        <Input
          name="name"
          type="text"
          label="Name"
          register={register}
          // errorMessage={name?.message}
        />
        <Input
          name="type"
          type="text"
          label="Type"
          register={register}
          //   errorMessage={type?.message}
        />
        <Input
          name="oldPrice"
          type="text"
          label="Old Price"
          register={register}
          //   errorMessage={oldPrice?.message}
        />
        <Input
          name="newPrice"
          type="text"
          label="New Price"
          register={register}
          //   errorMessage={newPrice?.message}
        />
        <div className="flex items-center gap-x-3">
          <label htmlFor="inStock">In Stock</label>
          <input
            id="inStock"
            name="inStock"
            type="checkbox"
            register={"register"}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <label htmlFor="outStock">Out Stock</label>
          <input
            id="outStock"
            name="outStock"
            type="checkbox"
            register={"register"}
          />
        </div>
        <Input
          name="title"
          type="text"
          label="Title"
          register={register}
          //   errorMessage={title?.message}
        />
        <Input
          name="setincludes"
          type="text"
          label="Set Includes"
          register={register}
          //   errorMessage={setincludes?.message}
        />
        <Input
          name="informationShipping"
          type="text"
          label="Information Shipping"
          register={register}
          //   errorMessage={informationShipping]?.message}
        />

        <Input
          name="informationSizeing"
          type="text"
          label="Information Sizeing"
          register={register}
          //   errorMessage={informationSizeing?.message}
        />
        <Input
          name="informationAssistance"
          type="text"
          label="information Assistance"
          register={register}
          //   errorMessage={informationAssistance?.message}
        />
        <Input
          name="informationStoreMail"
          type="text"
          label="Information Store Mail"
          register={register}
          //   errorMessage={informationStoreMail?.message}
        />
        <Input
          name="description"
          type="text"
          label="Description"
          register={register}
          //   errorMessage={description?.message}
        />
        <Input
          name="shortDesOne"
          type="text"
          label="Short Description"
          register={register}
          //   errorMessage={shortDes1?.message}
        />
        <Input
          name="shortDesTwo"
          type="text"
          label="Short Description"
          register={register}
          //   errorMessage={shortDesTwo?.message}
        />
        <Input
          name="shortDesThree"
          type="text"
          label="Short Description"
          register={register}
          //   errorMessage={shortDesThree?.message}
        />
        <input
          name="images"
          type="file"
          label="Images"
          register={register}
          //   errorMessage={images?.message}
        />

        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default ProductForm;
