"use client";
import { useState } from "react";
import { listTitles } from "./listItems";
import next from "next";

interface FaderProps {
  onListChange: (listTitle: string) => void;
}
export const Fader: React.FC<FaderProps> = ({ onListChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let nextIndex = (currentIndex + 1) % listTitles.length;

  const handleClick = () => {
    nextIndex = (currentIndex + 1) % listTitles.length;
    setCurrentIndex(nextIndex);
    onListChange(listTitles[nextIndex]); // Trigger list change on click
  };

  return (
    <div className="flex justify-center items-center">
      <h2
        className="text-xl font-bold mr-4 cursor-pointer hover:text-slate-400 transition ease-in-out delay-150 duration-300"
        onClick={handleClick}
      >
        {listTitles[currentIndex]}
      </h2>
      <h2
        className="text-slate-600 cursor-pointer hover:text-slate-500 transition ease-in-out delay-150 duration-300"
        onClick={handleClick}
      >
        {listTitles[nextIndex] + "->"}
      </h2>
    </div>
  );
};
