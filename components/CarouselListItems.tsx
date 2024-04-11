"use client";
import { SkillList } from "./SkillList";
import { ProjectList } from "./ProjectList";
import { DescriptionItem } from "./DescriptionItem";
import { ExperienceList } from "./ExperienceList";
import { ILink } from "./LinkEnum";
import CollapsibleListRow from "./CollapsibleListRow";

export enum ItemType {
  Language,
  Framework,
  Project,
  Job,
  Education,
  Certification,
  Tools,
  Description,
}

export enum Category {
  WebDevelopment,
  GeneralPurpose,
  Database,
  VersionControl,
  ASPNETCore,
  HardwareDescription,
  Other,
}

export interface IDescription {
  title?: string;
  type: ItemType;
  text: string;
  links?: ILink[];
}

export interface IItemData {
  name: string;
  show: boolean;
  type: ItemType;
  category: Category;
  description?: IDescription[];
  subItems?: IItemData[];
  documentation?: string;
  level?: number;
  startDate?: Date;
  endDate?: Date;
  frequency?: number;
}

export enum ListType {
  Skills,
  Projects,
  Experience,
}
export const carouselListTitles = ["Skills", "Projects", "Experience"];

function getCarouselListItems(listTitle: string): Array<IItemData> {
  switch (listTitle) {
    case carouselListTitles[ListType.Skills]:
      return SkillList().filter((item) => item.show);
    case carouselListTitles[ListType.Projects]:
      return ProjectList().filter((item) => item.show);
    case carouselListTitles[ListType.Experience]:
      return ExperienceList().filter((item) => item.show);
    default:
      return [];
  }
}

interface CarouselListItemsProps {
  title: string;
}

const CarouselListItems: React.FC<CarouselListItemsProps> = ({ title }) => {
  return (
    <div className="min-h-fit">
      {getCarouselListItems(title).map((item, index) => (
        <ListItem key={item.name} item={item} level={0} index={index + 1} />
      ))}
    </div>
  );
};

export default CarouselListItems;

const calculateTime = (startDate: Date, endDate = new Date()): string => {
  const timeDiffInMs = endDate.getTime() - startDate.getTime();

  const years = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (timeDiffInMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const days = Math.floor(
    (timeDiffInMs % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );

  // Choose the most appropriate unit based on the calculated values
  if (years > 1) return `${years} years`;
  if (months > 1) return `${months} months`;
  return `${days} days`;
};

interface ListItemProps {
  item: IItemData;
  isParentOpen?: boolean;
  level: number;
  index: number;
  parentIndex?: number;
}

const ListItem: React.FC<ListItemProps> = ({
  item,
  level,
  index,
  parentIndex = 0,
}) => {
  return (
    <CollapsibleListRow
      rowIndex={index}
      parentIndex={parentIndex}
      title={item.name}
      key={item.name + index}
    >
      <div
        className={`pl-4 ${
          level === 0 ? "border-b-4 border-dashed border-slate-800" : ""
        }`}
      >
        {item.description?.map((description) => DescriptionItem(description))}
        {!!item.startDate && (
          <span>{calculateTime(item.startDate, item.endDate)}</span>
        )}
        {item.subItems?.map((subItem, subIndex) => (
          <ListItem
            key={subItem.name + subIndex + 1}
            item={subItem}
            level={level + 1}
            parentIndex={index}
            index={subIndex + 1}
          />
        ))}
      </div>
    </CollapsibleListRow>
  );
};
