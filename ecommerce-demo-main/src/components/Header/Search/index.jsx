import React from "react";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2 ">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-[35px] outline-none foucs:outline-none bg-inherit py-2 text-[15px] "
      />
      <Button
        className="!absolute top-2 right-2 z-50 !w-[35px] !min-w-[45px] 
      !rounded-full"
      >
        <IoSearch className="text-[#777575] text-[20px]" />
      </Button>
    </div>
  );
};

export default Search;
