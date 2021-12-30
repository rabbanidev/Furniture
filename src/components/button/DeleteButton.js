import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useQueryClient } from "react-query";
import { useDeleteData } from "../../hooks/dataApi";
import Modal from "../Modal";

const DeleteButton = ({ _key, path }) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useDeleteData();
  const [open, setOpen] = useState(false);

  const deleteHandler = async () => {
    await mutateAsync({
      path: path,
    });
    queryClient.invalidateQueries(_key);
    setOpen(false);
  };

  return (
    <>
      <button
        className="btn-delete"
        onClick={() => {
          setOpen(true);
        }}
      >
        <FiTrash2 />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center">
          <h3 className="mb-5 text-light text-xl font-medium">
            Are you sure you want to delete this item?
          </h3>
          <button className="btn-edit" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button className="btn-delete" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteButton;
