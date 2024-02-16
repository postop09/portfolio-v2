# 포트폴리오_v2

## 🟣프로젝트 설명

이 프로젝트는 2022년 3월 쯤 구현된 [기존의 포트폴리오 페이지](https://postop09.github.io/Portfolio/src/pages/index.html) 프로젝트의 개선된 버전입니다.

기존 포트폴리오의 내용 수정을 위해서는 매번 HTML에 코드를 작성하고, JS 코드를 수정해야하는 상태였습니다. 이번을 기회로 포트폴리오 내용을 CRUD 할 수 있는 환경을 만들고자 했습니다. UI 는 저의 취미가 카메라인 것을 참고하여 컨셉을 기획했습니다.

## 🟣빌드 및 실행방법
실행 주소: [포트폴리오 사이트로 이동](https://portfolio-cys.vercel.app/)

## 🟣개발 환경
### 기간
2024.01.30 ~ 진행중

### 인원
개인 개발

### 기술
- Next.js
- TypeScript
- CSS module
- React-Query
- Firebase Storage
- Firebase Firestore
- Vercel
- Github
- Figma(Figjam)

## 🟣제작 과정 및 기능
### 로그인/로그아웃
- Firebase Authentication 를 이용하여 사용자 인증
- Google 인증 이용
- 보안을 고려하여 SessionPersistance 로 인증 지속성 설정

### 프로젝트 조회
- 지금까지 진행한 프로젝트 이력 목록
- Firebase 전체 읽기 보안 규칙 설정
- 프로젝트 순서 key 값을 이용하여 정렬

### 프로젝트 생성
- 관리자인 경우 생성 가능
- Firebase 인증된 사용자만 프로젝트 생성이 가능 하도록 보안 규칙 설정
- SKILLS 데이터 목록(기술, 환경, 협업)을 하나로 맵핑하여 스킬 선택
- 프로젝트의 내용을 크게 [기본, 반전, 세로] 세가지 타입으로 구성하여, 원하는 배치로 생성할 수 있도록 구현

### 프로젝트 삭제
- 관리자인 경우 삭제 가능
- Firebase 인증된 사용자만 프로젝트 삭제가 가능 하도록 보안 규칙 설정
- 삭제 시 Firestore, Storage 파일 삭제 로직 연결

### SKILLS 조회
- 사용 경험 혹은 사용중인 기술 목록
- SKILLS 를 크게 [기술, 환경도구, 협업도구] 세 분야로 분류하여 데이터 정의
- Animation Effect UI

### SOFT SKILLS 조회
- 개인적인 성향 및 강점 목록
- Animation Effect UI

### 이미지 최적화
- Next.js 의 `<Image />` 태그의 속성을 활용
- 이미지 평균 크기 100kB -> 72kB 로 개선
- 이미지 다운로드 평균 속도 1.2s -> 0.4s 로 개선

## 🟣정리

### 👾개발 전 목표/고려사항
- 웹 프로젝트, 호불호 없이 깔끔한 UI
- Firebase 를 이용한 프로젝트 CRUD 환경 구축
- 이미지 최적화
- 관심사 분리 및 추상화

### 👾배우고 느낀 점
- 아무래도 이미지를 많이 사용하게 될 프로젝트라고 생각했습니다. 그래서 평소 이미지 최적화를 강점으로 지니고있는 Next.js 를 사용하게 되었습니다.

### 👾개선할 점
- 태블릿/모바일 UI 구현
- 프로젝트 작성 예외처리 및 UI 개선
- 프로젝트 수정
- SKILLS, SOFT SKILLS CRUD


## 🟣리마인드
더 공부할 것
