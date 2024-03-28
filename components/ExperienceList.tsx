import { IItemData, ItemType, Category } from "./ListItems";
import { ProjectList, ProjectEnum } from "./ProjectList";

export enum ExperienceEnum {
  IntelliTect,
  EWU,
  SFCC,
  GED,
}

export function ExperienceList(): Array<IItemData> {
  const projectList = ProjectList();

  return [
    {
      name: "Software Engineer Intern",
      show: true,
      type: ItemType.Job,
      category: Category.WebDevelopment,
      subItems: [
        projectList[ProjectEnum.StormingTheCastle],
        projectList[ProjectEnum.EssentialCSharp],
        projectList[ProjectEnum.RandomInternTasks],
      ],
      startDate: new Date(2022, 9),
      endDate: new Date(2023, 3),
    },
    {
      name: "Bachelors of Science in Computer Science",
      show: true,
      type: ItemType.Education,
      category: Category.Other,
      description: [
        {
          type: ItemType.Description,
          text: "I graduated Magna Cum Laude from Eastern Washington University in the Summer of 2023.",
        },
      ],
      startDate: new Date(2020, 11),
      endDate: new Date(2023, 10),
    },
    {
      name: "Associate of Sciences Transfer Degree Track 2",
      show: false,
      type: ItemType.Education,
      category: Category.Other,
      description: [
        {
          type: ItemType.Description,
          text: "I graduated from Spokane Falls Community College in the Summer of 2020.",
        },
      ],
      startDate: new Date(2018, 11),
      endDate: new Date(2020, 10),
    },
    {
      name: "General Education Diploma",
      show: false,
      type: ItemType.Education,
      category: Category.Other,
      description: [
        {
          type: ItemType.Description,
          text: "I was home-schooled and got my GED.",
        },
      ],
      endDate: new Date(2008, 6),
    },
  ];
}
