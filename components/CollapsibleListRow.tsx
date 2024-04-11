// CollapsibleListRow.tsx
"use client";
import { CarouselContext } from "./SideCarousel";
import React, { useEffect, useRef, useContext } from "react";

interface CollapsibleListRowProps {
  rowIndex: number;
  parentIndex: number;
  title: string;
  children: React.ReactNode;
}

const CollapsibleListRow: React.FC<CollapsibleListRowProps> = ({
  rowIndex,
  parentIndex,
  title,
  children,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const { openTopIndex, setOpenTopIndex, openChildIndex, setOpenChildIndex } =
    useContext(CarouselContext);

  const handleClick = () => {
    if (!parentIndex && rowIndex === openTopIndex) {
      setOpenTopIndex(0);
      setOpenChildIndex(0);
      return;
    }
    if (!!parentIndex && rowIndex === openChildIndex) {
      setOpenChildIndex(0);
      return;
    }
    if (!!parentIndex && parentIndex === openTopIndex) {
      setOpenChildIndex(rowIndex);
      return;
    }
    setOpenChildIndex(0);
    setOpenTopIndex(rowIndex);
  };

  useEffect(() => {
    const documentClick = (event: MouseEvent) => {
      if (!rowRef.current || rowRef.current.contains(event.target as Element))
        return;
      if (rowIndex === openTopIndex) {
        setOpenTopIndex(0);
        setOpenChildIndex(0);
        return;
      }
    };

    document.addEventListener("click", documentClick);

    return () => document.removeEventListener("click", documentClick);
  }, [
    openChildIndex,
    openTopIndex,
    rowIndex,
    setOpenChildIndex,
    setOpenTopIndex,
  ]);

  const isOpen =
    (!parentIndex && rowIndex === openTopIndex) ||
    (!!parentIndex && rowIndex === openChildIndex);

  return (
    <div
      className={`collapsible-row transition-colors ease-in-out ${
        parentIndex === openTopIndex || isOpen
          ? ""
          : "text-slate-500 hover:text-white"
      }`}
      ref={rowRef}
    >
      <div
        className={`cursor-pointer p-2 hover:bg-gray-600 transition duration-500 ease-in-out ${
          isOpen ? "bg-gray-800" : ""
        }`}
        onClick={handleClick}
      >
        {title}
      </div>
      <div
        className={`pt-2 transition-all overflow-hidden duration-500 ease-in-out ${
          isOpen
            ? "max-h-[500px] text-white bg-slate-800 bg-opacity-60"
            : "max-h-0 color-transparent text-transparent invisible"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsibleListRow;
