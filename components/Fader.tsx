"use client";
import { useState } from "react";
import { listTitles } from "./listItems";

interface FaderProps {
  onListChange: (listTitle: string) => void;
}
export const Fader: React.FC<FaderProps> = ({ onListChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % listTitles.length;
    setCurrentIndex(nextIndex);
    onListChange(listTitles[nextIndex]); // Trigger list change on click
  };

  return (
    <div className="flex justify-center items-center">
      <h2
        className="text-xl font-bold mr-4 cursor-pointer"
        onClick={handleClick}
      >
        {listTitles[currentIndex]}
      </h2>
    </div>
  );
};
