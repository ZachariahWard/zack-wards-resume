"use client";
import { IItemData, ItemType, Category } from "./listItems";
import { EducationList, EducationEnum } from "./EducationList";
import { ProjectList, ProjectEnum } from "./ProjectList";

export function SkillList(): Array<IItemData> {
  const projectList = ProjectList();
  const educationList = EducationList();

  return [
    {
      name: "C#",
      type: ItemType.Language,
      category: Category.ASPNETCore,
      description: [
        {
          type: ItemType.Description,
          text: "I have used it to build web applications, and RESTful APIs.",
        },
      ],
      subItems: [
        projectList[ProjectEnum.EssentialCSharp],
        projectList[ProjectEnum.StormingTheCastle],
        projectList[ProjectEnum.SudoSort],
      ],
      level: 5,
      startDate: new Date(2021, 11),
      frequency: 3,
    },
    {
      name: "ASP.NET Core",
      type: ItemType.Language,
      category: Category.ASPNETCore,
      description: [
        {
          type: ItemType.Description,
          text: "I am familiar with using .NET migrations to manage databases.",
        },
      ],
      subItems: [projectList[ProjectEnum.StormingTheCastle]],
      level: 3,
      startDate: new Date(2021, 11),
      frequency: 2,
    },
    {
      name: "JavaScript",
      type: ItemType.Language,
      category: Category.WebDevelopment,
      description: [
        {
          type: ItemType.Description,
          text: "I prefer TypeScript for most applications. I have JavaScript in Web Design.",
        },
      ],
      subItems: [projectList[ProjectEnum.EssentialCSharp]],
      level: 3,
    },
    {
      name: "TypeScript",
      type: ItemType.Language,
      category: Category.WebDevelopment,
      description: [
        {
          type: ItemType.Description,
          text: "I have used TypeScript in Web Design.",
        },
      ],
      subItems: [
        projectList[ProjectEnum.ResumeWebsite],
        projectList[ProjectEnum.RecipeManager],
        projectList[ProjectEnum.StormingTheCastle],
      ],
      level: 4,
    },
    {
      name: "Next.js",
      type: ItemType.Framework,
      category: Category.WebDevelopment,
      subItems: [
        projectList[ProjectEnum.ResumeWebsite],
        projectList[ProjectEnum.RecipeManager],
      ],
      level: 3,
      startDate: new Date(2023, 8),
      frequency: 4,
    },
    {
      name: "Vue2.js",
      type: ItemType.Framework,
      category: Category.WebDevelopment,
      description: [
        {
          type: ItemType.Description,
          text: "I have used Vue2.js in Web Design.",
        },
      ],
      subItems: [projectList[ProjectEnum.StormingTheCastle]],
    },
    {
      name: "HTML",
      type: ItemType.Language,
      category: Category.WebDevelopment,
      description: [
        {
          type: ItemType.Description,
          text: "I generally use a framework as well for quicker development.",
        },
      ],
      subItems: [
        projectList[ProjectEnum.ResumeWebsite],
        projectList[ProjectEnum.RecipeManager],
        projectList[ProjectEnum.StormingTheCastle],
        projectList[ProjectEnum.EssentialCSharp],
      ],
      level: 4,
    },
    {
      name: "CSS",
      type: ItemType.Language,
      category: Category.WebDevelopment,
      description: [
        {
          type: ItemType.Description,
          text: "I tend to use Tailwind, but I have used native CSS.",
        },
      ],
      subItems: [
        projectList[ProjectEnum.EssentialCSharp],
        projectList[ProjectEnum.ResumeWebsite],
        projectList[ProjectEnum.RecipeManager],
      ],
      level: 2,
    },
    {
      name: "Tailwind",
      type: ItemType.Framework,
      category: Category.WebDevelopment,
      description: [
        {
          type: ItemType.Description,
          text: "I have used Tailwind for styling.",
        },
      ],
      subItems: [
        projectList[ProjectEnum.ResumeWebsite],
        projectList[ProjectEnum.RecipeManager],
      ],
      level: 3,
    },
    {
      name: "Git",
      type: ItemType.Tools,
      category: Category.VersionControl,
      description: [
        {
          type: ItemType.Description,
          text: "I use Git to manage my projects. I tend to use GitKraken as a GUI.",
        },
      ],
      subItems: [
        projectList[ProjectEnum.EssentialCSharp],
        projectList[ProjectEnum.ResumeWebsite],
        projectList[ProjectEnum.RecipeManager],
        projectList[ProjectEnum.StormingTheCastle],
      ],
      level: 3,
    },
    {
      name: "SQL",
      type: ItemType.Language,
      category: Category.Database,
      description: [
        {
          type: ItemType.Description,
          text: "I have used SQL to manage databases, Though I prefer to use an ORM.",
        },
      ],
      subItems: [projectList[ProjectEnum.StormingTheCastle]],
      level: 2,
    },
    {
      name: "Java",
      type: ItemType.Language,
      category: Category.GeneralPurpose,
      description: [
        {
          type: ItemType.Description,
          text: "I used Java in most of my programming classes at EWU.",
        },
      ],
      subItems: [educationList[EducationEnum.EWU]],
      level: 3,
    },
  ];
}
