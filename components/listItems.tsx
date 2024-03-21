"use client";
import CollapsibleRow from "./collapsibleRow";
import { useState } from "react";
import { Fader } from "./Fader";
import { SkillList } from "./SkillList";
import { JobList } from "./JobList";
import { ProjectList } from "./ProjectList";
import { DescriptionItem } from "./DescriptionItem";
import { EducationList } from "./EducationList";

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

export interface ILink {
  icon?: string;
  text?: string;
  url: string;
}

export interface IDescription {
  title?: string;
  type: ItemType;
  text: string;
  links?: ILink[];
}

export interface IItemData {
  name: string;
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
  Education,
  Jobs,
}
export const listTitles = ["Skills", "Projects", "Education", "Jobs"];

function getListItems(listTitle: string): Array<IItemData> {
  switch (listTitle) {
    case listTitles[ListType.Skills]:
      return SkillList();
    case listTitles[ListType.Projects]:
      return ProjectList();
    case listTitles[ListType.Education]:
      return EducationList();
    case listTitles[ListType.Jobs]:
      return JobList();
    default:
      return [];
  }
}

const ListItems = (): React.ReactNode => {
  const [currentListType, setCurrentListType] = useState(listTitles[0]);

  return (
    <div>
      <Fader
        onListChange={(value) => {
          setCurrentListType(value);
        }}
      />
      <div className="p-4">
        {getListItems(currentListType).map((item) => ListItem(item))}
      </div>
    </div>
  );
};

export default ListItems;

function ListItem(item: IItemData, level = 0) {
  return (
    <CollapsibleRow title={item.name}>
      <div
        className={`pl-2 -mr-10 ${
          level === 0 ? "border-b-4 border-dashed border-slate-800" : ""
        }`}
        key={item.name}
      >
        {item.description?.map((description) => DescriptionItem(description))}
        {item.subItems?.map((subItem) => ListItem(subItem, level + 1))}
      </div>
    </CollapsibleRow>
  );
}
