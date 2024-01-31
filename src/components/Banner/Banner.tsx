import Image from "next/image";
import s from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={s.bannerWrapper}>
      <div className={s.txtWrapper}>
        <strong className={s.title}>
          최신형 카메라 니콘 ZF
          <br />
          파괴.혼돈.망가
        </strong>
        <small className={s.subTxt}>ANG-GIMODDI</small>
      </div>
      <div className={s.imgWrapper}>
        <Image
          src="/assets/img/img_camera.png"
          alt="배너"
          fill
          priority
          className={s.imgBanner}
        />
      </div>
    </div>
  );
};

export default Banner;
