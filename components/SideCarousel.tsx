import ListItems, { listTitles } from "./ListItems";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const sideCarouselTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    base: "relative h-full w-full rounded-r-[1000px]",
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

interface SideCarouselProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

function SideCarousel({ setIsOpen, isOpen }: SideCarouselProps) {
  return (
    <Carousel
      leftControl
      rightControl
      pauseOnHover
      className="rounded-r-[1000px]"
      theme={sideCarouselTheme}
    >
      {
        /* Side Carousel */
        listTitles.map((title) => (
          <div key={title} className="px-10">
            <div>{title}</div>
            <ListItems title={title} setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
        ))
      }
    </Carousel>
  );
}

export default SideCarousel;
