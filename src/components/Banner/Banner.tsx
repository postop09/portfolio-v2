import Image from "next/image";
import s from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={s.bannerWrapper}>
      <div className={s.txtWrapper}>
        <strong className={s.title}>
          찰칵.
          <br />
          가장 나다운 순간
        </strong>
        <small className={s.subTxt}>조윤식-PORTFOLIO</small>
      </div>
      <div className={s.imgWrapper}>
        <Image
          src="/assets/img/img_camera.png"
          alt="배너"
          width={550}
          height={400}
          priority
          className={s.imgBanner}
        />
      </div>
    </div>
  );
};

export default Banner;
