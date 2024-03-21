"use client";
import { IItemData, ItemType, Category } from "./listItems";

export enum EducationEnum {
  EWU,
  SFCC,
  GED,
}

export function EducationList(): Array<IItemData> {
  return [
    {
      name: "Bachelors of Science in Computer Science",
      type: ItemType.Education,
      category: Category.Other,
      description: [
        {
          type: ItemType.Description,
          text: "I graduated from Eastern Washington University in the Summer of 2023.",
        },
      ],
      startDate: new Date(2020, 11),
      endDate: new Date(2023, 10),
    },
    {
      name: "Associate of Sciences Transfer Degree Track 2",
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
