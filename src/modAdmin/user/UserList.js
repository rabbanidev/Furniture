import React from "react";
import EditButton from "../../components/button/EditButton";
import Error from "../../components/Error";
import AdminLayout from "../../components/layout/AdminLayout";
import { ListCol, ListHeader } from "../../components/ListCol";
import { HashLoading } from "../../components/Loading";
import { useGetData } from "../../hooks/dataApi";

const UserList = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("users", "/user-list");

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

  return (
    <AdminLayout>
      <div className="card w-full max-w-screen-xl">
        <div className="list-wrapper">
          <div className="md:grid grid-cols-5 list-header">
            <ListHeader label="Username" />
            <ListHeader label="Email" />
            <ListHeader label="Avater" />
            <ListHeader label="Role" />
            <ListHeader label="Action" />
          </div>
          {list.data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-5 list-body"
            >
              <ListCol label="Username : " value={item.fullName} />
              <ListCol label="Email : " value={item.email} />
              <div className="">
                <span className="inline-block capitalize md:hidden font-semibold">
                  Avater :
                </span>
                <img
                  src={item.avater}
                  alt={item.fullName}
                  className="w-10 h-10 rounde-full"
                />
              </div>
              <ListCol label="Role : " value={item.role} />
              <div>
                <div className="flex justify-start space-x-2">
                  <EditButton path={`/admin/user-list/edit/${item.id}`} />
                  {/* <DeleteButton action={refetch} path={`/product/${item.id}`} /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserList;
