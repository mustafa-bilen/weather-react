import React from "react";

const Input = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-7">
        <input
          placeholder="Enter a city"
          className="px-3 py-2 sm:w-[25rem] bg-slate-300 text-black outline-none rounded-lg focus:bg-slate-200 placeholder:text-slate-500"
        />
      </div>
    </div>
  );
};

export default Input;
