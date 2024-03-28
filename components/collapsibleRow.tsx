// CollapsibleRow.tsx
"use client";
import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";

interface CollapsibleRowProps {
  title: string;
  children: React.ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const CollapsibleRow: React.FC<CollapsibleRowProps> = ({
  title,
  children,
  setIsOpen,
  isOpen,
}) => {
  const [isRowOpen, setRowIsOpen] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    // Close the current row if it's already open
    if (isRowOpen) {
      setRowIsOpen(false);
      return;
    }
    setIsOpen(false);
    setRowIsOpen(true);
  };

  useEffect(() => {
    const documentClick = (event: MouseEvent) => {
      if (!rowRef.current || rowRef.current.contains(event.target as Element))
        return;
      setRowIsOpen(false); // Close if clicked outside the row or its ancestors
    };

    document.addEventListener("click", documentClick);

    return () => document.removeEventListener("click", documentClick);
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="collapsible-row" ref={rowRef}>
      <div
        className={`cursor-pointer p-2 hover:bg-gray-600 transition duration-1000 ease-in-out ${
          isRowOpen ? "bg-gray-800" : ""
        }`}
        onClick={handleClick}
      >
        {title}
      </div>
      <div
        className={`pt-2 transition-all overflow-hidden duration-1000 ease-in-out ${
          isRowOpen
            ? "max-h-[500px] bg-slate-800 bg-opacity-60"
            : "max-h-0 color-transparent text-transparent invisible"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsibleRow;
