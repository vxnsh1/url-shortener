import React, { useState } from "react";
import GradientText from "./GradientText";
import ThemeToggle from "./ThemeToggle";
import Result from "./Result";

const InputShortener = ({inputValue, setInputValue,}) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue(""); 
  }
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[#f5f5f5] dark:bg-[#121212] text-black transition-colors duration-500 overflow-hidden relative">
      <div className="flex flex-col gap-15 items-center justify-center w-full h-full">
        <h1 className="text-7xl font-bold">
          <GradientText animationSpeed={6}>Url Shortener</GradientText>
        </h1>
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <input
            type="text"
            placeholder="Paste your link"
            className="outline-2 outline-gray-500/20 rounded text-center w-96 dark:text-white py-1"
            autoComplete="off"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="cursor-pointer bg-violet-700 text-white py-2 w-38 rounded active:bg-violet-900 hover:scale-110 transition-all duration-200 ease-in-out"
          onClick={handleClick}
          >
            Shorten the link!
          </button>
          <Result value={inputValue}/>
        </div>
        
        <div className="absolute top-0 right-0 m-5">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default InputShortener;
