"use client";
import Link from "next/link";
import { IDescription } from "./CarouselListItems";
import { ILink } from "./LinkEnum";

export function DescriptionItem(description: IDescription) {
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
