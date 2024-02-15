import Image from "next/image";
import s from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={s.bannerWrapper}>
      <div className={s.txtWrapper}>
        <h2 className={s.title}>
          찰칵.
          <br />
          가장 나다운 순간
        </h2>
        <small className={s.subTxt}>조윤식-PORTFOLIO</small>
      </div>
      <div className={s.imgWrapper}>
        <Image
          src="/assets/img/img_camera.png"
          alt="배너"
          width={600}
          height={600}
          priority
          className={s.imgBanner}
        />
      </div>
    </section>
  );
};

export default Banner;
