import s from "./ContentsCard.module.css";
import Image from "next/image";

type Props = {
  type?: "default" | "reverse" | "column" | string;
  src: string;
  title: string;
  contents: string;
};

const ContentsCard = ({ type = "default" }: Props) => {
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
      <div className={s.test}>
        <Image
          src="/assets/img/img_banner.jpg"
          alt=""
          fill
          className={s.imgMain}
        />
      </div>
      <div className={layoutType.isColumn() ? "" : s.txtWrapper}>
        <h6 className={s.title}>뛰어난 촬영 감가쿠</h6>
        <p className={s.contents}>
          나는 속도와 정확도로 정의되며 결정적인 순간을 쉽게 포착할 수 있습니다.
          뷰파인더 블랙아웃 없이 풀 AF/AE 트래킹4으로 최대 120fps의 연속 촬영이
          가능하며, 고도의 AI 처리 유닛이 매우 높은 정밀도와 안정성으로 피사체를
          인식합니다.
        </p>
      </div>
    </article>
  );
};

export default ContentsCard;
