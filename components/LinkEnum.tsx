export enum LinkEnum {
  EssentialCSharp,
  IntelliTect,
  SudoSort,
  ResumeWebsite,
  RecipeManager,
}

export interface ILink {
  icon?: string;
  text?: string;
  url: string;
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
