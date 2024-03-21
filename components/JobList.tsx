"use client";
import { IItemData, ItemType, Category } from "./listItems";
import { ProjectList, ProjectEnum } from "./ProjectList";

export function JobList(): Array<IItemData> {
  const projectList = ProjectList();

  return [
    {
      name: "Software Engineer Intern",
      type: ItemType.Job,
      category: Category.WebDevelopment,
      subItems: [
        projectList[ProjectEnum.StormingTheCastle],
        projectList[ProjectEnum.EssentialCSharp],
        projectList[ProjectEnum.RandomInternTasks],
      ],
      startDate: new Date(2022, 11),
      endDate: new Date(2023, 3),
    },
  ];
}
