import React from "react";
import Select from "react-select";
import { useGetData } from "../hooks/dataApi";

const CustomSelect = ({ onChange, _key, path }) => {
  const { data: list } = useGetData(_key, path);
  return (
    <Select
      options={list?.data}
      onChange={(val) => onChange(val?.value)}
      placeholder="-- Select --"
    />
  );
};

export default CustomSelect;
