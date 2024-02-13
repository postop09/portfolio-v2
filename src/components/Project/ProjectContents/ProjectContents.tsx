import s from "./ProjectContents.module.css";
import { ProjectContentsRow } from "@/types/projects.type";
import React from "react";
import ContentsCard from "../ContentsCard/ContentsCard";

type Props = {
  contents: ProjectContentsRow | undefined;
};

const ProjectContents = ({ contents }: Props) => {
  const objecyKeys = Object.keys(contents || {});
  objecyKeys.sort();

  return objecyKeys.map((key, index) => {
    const row = contents?.[key];
    return (
      <div
        key={index}
        className={row?.length! >= 2 ? s.columnsWrapper : s.wrapper}
      >
        {row?.map((item, rowIndex) => {
          return (
            <ContentsCard
              key={rowIndex}
              type={item.type}
              src={item.imagePath}
              title={item.title}
              contents={item.contents}
            />
          );
        })}
      </div>
    );
  });
};

export default ProjectContents;
