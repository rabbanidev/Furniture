import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SaveButton from "../../components/button/SaveButton";
import Input from "../../components/Input";
import { usePostData } from "../../hooks/dataApi";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required("Product Name is required"),
    type: yup.string().required("Product Type is required"),
    newPrice: yup
      .number()
      .min(0, "Must be greater than or equal to 0")
      .typeError("Product new price is required"),
    oldPrice: yup
      .number()
      .min(0, "Must be greater than or equal to 0")
      .typeError("Product old price is required"),
    title: yup.string().required("Product Title is required"),
    shipping: yup.string().required("Product shipping is required"),
  })
  .shape({
    files: yup
      .mixed()
      .test("fileSize", "Product images is required.", (value) => {
        return value && value[0];
      }),
    banner: yup
      .mixed()
      .test("fileSize", "Product banner is required.", (value) => {
        return value && value[0];
      }),
  });

const ProductForm = ({ defaultValues, action, btnText, path, returnPath }) => {
  const history = useHistory();
  const [submitting, setSubmitting] = useState(false);
  const { mutateAsync } = usePostData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const { name, type, newPrice, oldPrice, title, shipping, files, banner } =
    errors;

  const onSubmit = async (data) => {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("type", data.type);
    formData.append("newPrice", data.newPrice);
    formData.append("oldPrice", data.oldPrice);
    formData.append("inStock", Boolean(data.inStock));
    formData.append("title", data.title);
    formData.append("setincludes", data.setincludes);
    formData.append("shortDes", [data.shortDes]);
    formData.append("description", data.description);
    const information = {
      shipping: data.shipping,
      sizeing: data.sizeing,
      assistance: data.assistance,
      storeMail: data.storeMail,
    };
    Object.keys(information).forEach((key) =>
      formData.append(key, information[key])
    );
    if (data.files.length > 0) {
      for (let i = 0; i < data.files.length; i++) {
        formData.append("images", data.files[i]);
      }
    }
    formData.append("banner", data.banner[0]);

    setSubmitting(true);
    try {
      const { status, data } = await mutateAsync({
        path: path,
        formData: formData,
      });
      if (status === 201) {
        toast.success(data.message);
        reset();
      }
      if (status === 204) {
        toast.success("Update successful!");
        history.push(returnPath);
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
      action();
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-col">
        <Input
          name="name"
          type="text"
          label="Name"
          register={register}
          errorMessage={name?.message}
        />
        <Input
          name="type"
          type="text"
          label="Type"
          register={register}
          errorMessage={type?.message}
        />
        <Input
          name="oldPrice"
          type="text"
          label="Old Price"
          register={register}
          errorMessage={oldPrice?.message}
        />
        <Input
          name="newPrice"
          type="text"
          label="New Price"
          register={register}
          errorMessage={newPrice?.message}
        />
        <div className="flex items-center gap-x-3">
          <label htmlFor="inStock">In Stock</label>
          <input
            id="inStock"
            name="inStock"
            type="checkbox"
            {...register("inStock")}
          />
        </div>
        <Input
          name="title"
          type="text"
          label="Title"
          register={register}
          errorMessage={title?.message}
        />
        <Input
          name="setincludes"
          type="text"
          label="Set Includes"
          register={register}
        />
        <Input
          name="shipping"
          type="text"
          label="Shipping"
          register={register}
          errorMessage={shipping?.message}
        />
        <Input name="sizeing" type="text" label="Sizeing" register={register} />
        <Input
          name="assistance"
          type="text"
          label="Assistance"
          register={register}
        />
        <Input
          name="storeMail"
          type="text"
          label="Store Mail"
          register={register}
        />
        <Input
          name="description"
          type="text"
          label="Description"
          register={register}
        />
        <Input
          name="shortDes"
          type="text"
          label="Short Description"
          register={register}
        />
        {/* <Input
          name="shortDesTwo"
          type="text"
          label="Short Description"
          register={register}
        />
        <Input
          name="shortDesThree"
          type="text"
          label="Short Description"
          register={register}
        /> */}
        <div>
          <label className="block uppercase">Product images</label>
          <input {...register("files")} type="file" name="files" multiple />
          <p className="text-red-400 text-sm">{files?.message}</p>
        </div>
        <div>
          <label className="block uppercase">Product Banner</label>
          <input {...register("banner")} type="file" name="banner" />
          <p className="text-red-400 text-sm">{banner?.message}</p>
        </div>
        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default ProductForm;
