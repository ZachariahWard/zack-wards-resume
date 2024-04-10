"use client";
import ListItems, { listTitles } from "./ListItems";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import { Dispatch, SetStateAction, createContext, useState } from "react";

const sideCarouselTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    base: "relative h-full w-full",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-slate-800/50 dark:hover:bg-slate-800",
      on: "bg-white dark:bg-slate-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-20 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "block absolute top-20 left-1/2 w-full h-full -translate-x-1/2 pt-12 rounded-r-[1000px]",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

interface CarouselContextType {
  openSlideIndex: number;
  setOpenSlideIndex: Dispatch<SetStateAction<number>>;
  openTopIndex: number;
  setOpenTopIndex: Dispatch<SetStateAction<number>>;
  openChildIndex: number;
  setOpenChildIndex: Dispatch<SetStateAction<number>>;
}

export const CarouselContext = createContext<CarouselContextType>({
  openSlideIndex: 0,
  setOpenSlideIndex: () => {
    throw new Error("CarouselContext missing");
  },
  openTopIndex: 0,
  setOpenTopIndex: () => {
    throw new Error("CarouselContext missing");
  },
  openChildIndex: 0,
  setOpenChildIndex: () => {
    throw new Error("CarouselContext missing");
  },
});

function SideCarousel() {
  const [openTopIndex, setOpenTopIndex] = useState(0);
  const [openChildIndex, setOpenChildIndex] = useState(0);
  const [openSlideIndex, setOpenSlideIndex] = useState(0);

  return (
    <div className="overflow-hidden order-2 lg:order-1 col-start-1 lg:col-end-4 col-end-12 p-0 min-h-fit bg-slate-900 lg:rounded-r-[1000px] rounded-[300px] border-x-4 border-slate-700">
      <CarouselContext.Provider
        value={{
          openSlideIndex: openSlideIndex,
          setOpenSlideIndex: setOpenSlideIndex,
          openTopIndex: openTopIndex,
          setOpenTopIndex: setOpenTopIndex,
          openChildIndex: openChildIndex,
          setOpenChildIndex: setOpenChildIndex,
        }}
      >
        <Carousel
          slide={!openTopIndex}
          slideInterval={4000}
          leftControl
          rightControl
          pauseOnHover
          className="lg:rounded-r-[1000px] rounded-[300px] lg:p-4 p-10 h-screen min-h-[1000px]"
          theme={sideCarouselTheme}
        >
          {
            /* Side Carousel */
            listTitles.map((title, index) => (
              <div key={title} className="px-10">
                <div>{title}</div>
                <ListItems title={title} slideIndex={index} />
              </div>
            ))
          }
        </Carousel>
      </CarouselContext.Provider>
    </div>
  );
}

export default SideCarousel;
