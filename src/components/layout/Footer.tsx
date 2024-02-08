import Link from "next/link";
import s from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.followWrapper}>
        <p className={s.followTitle}>FOLLOW ME</p>
        <ul className={s.followListWrapper}>
          <li>
            <Link
              href="https://github.com/postop09"
              className={s.gitBtn}
              target="_blank"
            >
              <Image
                src="/assets/icon/icon_github.png"
                alt=""
                width={40}
                height={40}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://watchwebs.tistory.com/"
              className={s.blogBtn}
              target="_blank"
            >
              B
            </Link>
          </li>
        </ul>
      </div>
      <hr className={s.divLine} />
      <small className={s.warnningTxt}>
        * 본 사이트의 컨텐츠는 저작권법의 보호를 받고 싶은 바, 상업적 목적의
        무단전재, 복사, 배포 등을 금하고 싶습니다.
      </small>
      <small className={s.warnningTxt}>
        * 고객님은 개발에 관련된 안전한 대화를 위해 메일 전송 시 내용과 연락
        수단을 다시 한 번 확인 후 이용해주세요.
      </small>
      <div className={s.emptySpace} />
      <small className={s.warnningTxt}>
        주소 : 수원특례시 팔달구 어디동 12 가짜주소 9F 등록번호 : 000-없지-00001
        통신판매번호 : 000-없는디-0001
      </small>
      <small className={s.warnningTxt}>
        한국은영어로코리아㈜대표이사 : 조윤식 개인정보관리책임자 : 조윤식 TEL :
        010-안알랴줌-1209 E-mail : postop09@naver.com
      </small>
      <small className={s.warnningTxt}>
        Copyright © 한국은영어로Korea Corporation. I want All rights reserved.
      </small>
    </div>
  );
};

export default Footer;
