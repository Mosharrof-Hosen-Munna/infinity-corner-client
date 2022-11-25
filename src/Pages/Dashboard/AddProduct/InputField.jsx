import React from "react";

const InputField = ({type,name,handleOnChange,placeholder,label}) => {
  return (
    <div className="mb-4">
        <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id={name}
        placeholder={placeholder}
        name={name}
        onChange={handleOnChange}
        required
      />
    </div>
  );
};

export default InputField;
