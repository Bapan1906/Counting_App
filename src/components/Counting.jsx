import React, { useState } from "react";

const Counting = () => {

    const [count,setCount] = useState(0);

    function decrementHandeling()
    {
        setCount(count-1);
    }

    function incrementHandeling(){
        setCount(count + 1);
    }

    function resetCount(){
        setCount(0);
    }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#344151] gap-10">
      <h1 className="font-bold font-5xl text-[#0398d4]">
        Increment & Decrement
      </h1>
      <div className="flex gap-10 bg-white justify-center py-1  rounded-sm text-[25px] text-[#344151] ">
        <button className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        onClick={decrementHandeling}>
          {" "}
          -{" "}
        </button>
        <div className="text-center w-6 text-2xl flex justify-center items-center font-bold">
          {count}
        </div>
        <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-3xl"
        onClick={incrementHandeling}>
          {" "}
          +{" "}
        </button>
      </div>
      <button className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"
      onClick={resetCount}>
        Reset{" "}
      </button>
    </div>
  );
};

export default Counting;
