import s from "./ContentsCard.module.css";
import Image from "next/image";

type Props = {
  type?: "default" | "reverse" | "column" | string;
  src: string;
  title: string;
  contents: string;
};

const ContentsCard = ({ type = "default", src, title, contents }: Props) => {
  const layoutType = {
    isDefault: () => {
      return type === "default";
    },
    isReverse: () => {
      return type === "reverse";
    },
    isColumn: () => {
      return type === "column";
    },
  };

  return (
    <article
      className={
        layoutType.isReverse()
          ? s.wrapperSwitch
          : layoutType.isColumn()
            ? s.wrapperColumn
            : s.wrapper
      }
    >
      <div className={s.imgWrapper}>
        <Image
          src={src}
          alt=""
          width={560}
          height={380}
          priority
          className={s.imgMain}
        />
      </div>
      <div className={layoutType.isColumn() ? "" : s.txtWrapper}>
        <h6 className={s.title}>{title}</h6>
        <p className={s.contents}>{contents}</p>
      </div>
    </article>
  );
};

export default ContentsCard;
