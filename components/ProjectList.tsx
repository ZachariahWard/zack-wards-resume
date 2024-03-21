"use client";
import { IItemData, ItemType, Category } from "./listItems";
import { LinkList, LinkEnum } from "./LinkEnum";

export enum ProjectEnum {
  SudoSort,
  ResumeWebsite,
  StormingTheCastle,
  EssentialCSharp,
  RandomInternTasks,
  RecipeManager,
}

export function ProjectList(): Array<IItemData> {
  const links = LinkList();

  return [
    {
      name: "SudoSort",
      type: ItemType.Project,
      category: Category.GeneralPurpose,
      description: [
        {
          type: ItemType.Description,
          text: "I am continuing to learn more about C# and its features by working on a fun non-comparative sudo-sorted algorithm and array LINK[0].",
          links: [links[LinkEnum.SudoSort]],
        },
      ],
      startDate: new Date(2021, 11),
    },
    {
      name: "Resume Website",
      type: ItemType.Project,
      category: Category.WebDevelopment,
      description: [
        {
          type: ItemType.Description,
          text: "I am learning about Next.js and its features by working on this website! Here is the Github LINK[0].",
          links: [links[LinkEnum.ResumeWebsite]],
        },
      ],
      startDate: new Date(2023, 10),
    },
    {
      name: "Storming the Castle",
      type: ItemType.Project,
      category: Category.WebDevelopment,
      description: [
        {
          type: ItemType.Description,
          text: "I worked on Storming the Castle with a SCRUM team of interns at LINK[1]. This project is on a private repository, so I can not show my work.",
          links: [links[LinkEnum.IntelliTect]],
        },
      ],
      startDate: new Date(2022, 11),
      endDate: new Date(2023, 3),
    },
    {
      name: "Essential C#",
      type: ItemType.Project,
      category: Category.WebDevelopment,
      description: [
        {
          type: ItemType.Description,
          text: "I worked on LINK[0] with a SCRUM team at LINK[1]. This project is on a private repository.",
          links: [links[LinkEnum.EssentialCSharp], links[LinkEnum.IntelliTect]],
        },
      ],
      startDate: new Date(2022, 11),
      endDate: new Date(2023, 3),
    },
    {
      name: "Random Intern Tasks",
      type: ItemType.Project,
      category: Category.Other,
      description: [
        {
          type: ItemType.Description,
          text: "I worked on a few other tasks during my internship at LINK[0]. Including a Powershell script to hit a devOps server to compile a CSV of all the deployed servers.\n",
          links: [links[LinkEnum.IntelliTect]],
        },
      ],
      startDate: new Date(2022, 11),
      endDate: new Date(2023, 3),
    },
    {
      name: "Recipe Manager",
      type: ItemType.Project,
      category: Category.WebDevelopment,
      description: [
        {
          type: ItemType.Description,
          text: "I am working on a recipe manager to help me organize my recipes, and manage allergies. I am using this project to learn about Next.js. Here is the Github LINK[0].",
          links: [links[LinkEnum.RecipeManager]],
        },
      ],
      startDate: new Date(2023, 10),
    },
  ];
}
