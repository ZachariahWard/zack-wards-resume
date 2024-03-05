"use client";

// CollapsibleRow.tsx
import React, { useState, useRef, useEffect } from "react";

interface CollapsibleRowProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleRow: React.FC<CollapsibleRowProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseOver = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(true), 1000);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    const documentClick = (event: MouseEvent) => {
      if (!isOpen || (event.target as Element)?.closest(".collapsible-row"))
        return;
      setIsOpen(false);
    };

    document.addEventListener("click", documentClick);

    return () => document.removeEventListener("click", documentClick);
  }, [isOpen]);

  return (
    <div className="collapsible-row">
      <div
        className={`cursor-pointer p-2 hover:bg-gray-600 ${
          isOpen ? "bg-gray-800" : ""
        }`}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </div>
      {isOpen && <div className="p-2">{children}</div>}
    </div>
  );
};

export default CollapsibleRow;
