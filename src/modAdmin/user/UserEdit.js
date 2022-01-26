import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import AdminLayout from "../../components/layout/AdminLayout";
import { HashLoading } from "../../components/Loading";
import TopHeader from "../../components/TopHeader";
import { useGetData } from "../../hooks/dataApi";
import UserForm from "./UserForm";

const UserEdit = () => {
  const { id } = useParams();
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("users", `/user/${id}`);

  if (isLoading)
    return (
      <AdminLayout>
        <HashLoading />
      </AdminLayout>
    );

  if (isError)
    return (
      <AdminLayout>
        <Error message={error.message} />
      </AdminLayout>
    );

  const defaultValues = {
    fullName: list.data.fullName,
    avater: list.data.avater,
    email: list.data.email,
    role: list.data.role,
  };

  return (
    <AdminLayout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="User Edit" btnSave={false} path="/admin/user-list" />
        <UserForm
          defaultValues={defaultValues}
          action={refetch}
          btnText="Edit"
          path={`/user/edit/${id}`}
          returnPath="/admin/user-list"
        />
      </div>
    </AdminLayout>
  );
};

export default UserEdit;
