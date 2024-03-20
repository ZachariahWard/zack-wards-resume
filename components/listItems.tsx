import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { IconBase } from "react-icons";
import CollapsibleRow from "./collapsibleRow";

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

interface ListItemsProps {
  listType: ListType;
}

const ListItems: React.FC<ListItemsProps> = ({ listType }): React.ReactNode => {
  const skillList = SkillList();
  const projectList = ProjectList();
  const educationList = EducationList();
  const jobList = JobList();
  switch (listType) {
    case ListType.Skills:
      return (
        <div>
          <h1 className="text-center text-3xl p-2">Skills</h1>
          {skillList.map((item) => ListItem(item))}
        </div>
      );
    case ListType.Education:
      return (
        <div>
          <h1 className="text-center text-3xl p-2">Education</h1>
          {educationList.map((item) => ListItem(item))}
        </div>
      );
    case ListType.Jobs:
      return (
        <div>
          <h1 className="text-center text-3xl p-2">Jobs</h1>
          {jobList.map((item) => ListItem(item))}
        </div>
      );
    default:
      return (
        <div>
          <h1 className="text-center text-3xl p-2">Projects</h1>
          {projectList.map((item) => ListItem(item))}
        </div>
      );
  }
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

function DescriptionItem(description: IDescription) {
  const generateLinks = (text: string) => {
    // Regular expression to find the pattern "LINK[index]"
    const linkRegex = /LINK\[(\d+)\]/g;

    // Split the text into parts based on the linkRegex
    const parts = text.split(linkRegex);

    // Map the parts, alternating between regular text and link components
    return parts.map((part, index) => {
      if (index % 2 === 0) {
        // Regular text
        return <span key={index}>{part}</span>;
      } else {
        // Extract the index from the pattern
        const linkIndex = parseInt(parts[index], 10);

        // Find the corresponding link in the description.links array
        const link = description.links?.[linkIndex];

        // Return the LinkItem component if the link is found
        return link ? <LinkItem key={index} {...link} /> : null;
      }
    });
  };

  return (
    <div className="pb-2" key={description.text}>
      <h1>{description.title}</h1>
      <p>{generateLinks(description.text)}</p>
    </div>
  );
}

function LinkItem(link: ILink) {
  return (
    <Link className="text-cyan-400" href={link.url} key={link.url}>
      {link.text}
    </Link>
  );
}

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

export enum LinkEnum {
  EssentialCSharp,
  IntelliTect,
  SudoSort,
  ResumeWebsite,
  RecipeManager,
}

export function LinkList(): Array<ILink> {
  return [
    {
      text: "Essential C#",
      url: "https://essentialcsharp.com",
    },
    {
      text: "IntelliTect",
      url: "https://intellitect.com/",
    },
    {
      text: "SudoSort",
      icon: "<FaGithub />",
      url: "https://github.com/ZachariahWard/SudoSortedArray",
    },
    {
      text: "Resume Website",
      icon: "<FaGithub />",
      url: "https://github.com/ZachariahWard/zack-wards-resume",
    },
    {
      text: "Recipe Manager",
      icon: "<FaGithub />",
      url: "https://github.com/ZachariahWard/Recipe-Manager",
    },
  ];
}

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
