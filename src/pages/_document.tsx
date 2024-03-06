import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="description"
          content="안녕하세요. 조윤식의 포트폴리오입니다."
        />
        <meta property="og:image" content="/assets/img/img_og.jpg" />
        <link rel="icon" href="/assets/favicon/favicon-32x32.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
