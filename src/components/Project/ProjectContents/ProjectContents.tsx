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
    // if (row?.length! >= 2) {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          gap: "20px",
          maxWidth: "1200px",
          margin: "40px auto",
        }}
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
    // } else {
    //   return row?.map((item, rowIndex) => {
    //     return (
    //       <ContentsCard
    //         key={rowIndex}
    //         type={item.type}
    //         src={item.imagePath}
    //         title={item.title}
    //         contents={item.contents}
    //       />
    //     );
    //   });
    // }
  });
};

export default ProjectContents;
