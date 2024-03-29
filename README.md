# 포트폴리오_v2

## ⚫️프로젝트 설명

이 프로젝트는 2022년 3월 쯤 구현된 [기존의 포트폴리오 페이지](https://postop09.github.io/Portfolio/src/pages/index.html) 프로젝트의 개선된 버전입니다.

기존 포트폴리오의 내용 수정을 위해서는 매번 HTML에 코드를 작성하고, JS 코드를 수정해야하는 상태였습니다. 이번을 기회로 포트폴리오 내용을 CRUD 할 수 있는 환경을 만들고자 했습니다. UI 는 저의 취미가 카메라인 것을 참고하여 컨셉을 기획했습니다.

## ⚫️빌드 및 실행방법
실행 주소: [포트폴리오 사이트로 이동](https://portfolio-cys.vercel.app/)

## ⚫️개발 환경
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

## ⚫️제작 과정 및 기능
### 로그인/로그아웃
![video_login](https://github.com/postop09/portfolio-v2/assets/93017923/f550102a-64ec-4fcd-bc43-9346d46e388d)
- Firebase Authentication 를 이용하여 사용자 인증
- Google 인증 이용
- 보안을 고려하여 SessionPersistance 로 인증 지속성 설정

### 프로젝트 조회
![video_projectlist](https://github.com/postop09/portfolio-v2/assets/93017923/1587bab4-4fbe-4585-af20-1e88bbe16610)
- 지금까지 진행한 프로젝트 이력 목록
- Firebase 전체 읽기 보안 규칙 설정
- 프로젝트 순서 key 값을 이용하여 정렬

### 프로젝트 상세조회
![video_project_detail](https://github.com/postop09/portfolio-v2/assets/93017923/80f1e900-d763-44b2-96cc-d512f7e6bba8)
- 프로젝트에 관련된 내용 전체를 확인 (개발 내용, 깃헙, 페이지 제공)
- 프로젝트 내용 설명 UI 배치 커스텀 설정

### 프로젝트 생성
![video_project_create](https://github.com/postop09/portfolio-v2/assets/93017923/f2bf813a-1694-4e7c-98cc-234ccb19d609)
- 관리자인 경우 생성 가능
- Firebase 인증된 사용자만 프로젝트 생성이 가능 하도록 보안 규칙 설정
- SKILLS 데이터 목록(기술, 환경, 협업)을 하나로 맵핑하여 스킬 선택
- 프로젝트의 내용을 크게 [기본, 반전, 세로] 세가지 타입으로 구성하여, 원하는 배치로 생성할 수 있도록 구현

### 프로젝트 삭제
![video_project_delete](https://github.com/postop09/portfolio-v2/assets/93017923/5057cc3d-2199-4fe9-8e49-c8b8d1b4e8de)
- 관리자인 경우 삭제 가능
- Firebase 인증된 사용자만 프로젝트 삭제가 가능 하도록 보안 규칙 설정
- 삭제 시 Firestore, Storage 파일 삭제 로직 연결

### SKILLS 조회
![video_skills](https://github.com/postop09/portfolio-v2/assets/93017923/655a6f55-8281-4cf4-b0bf-f2d9758c0c53)
- 사용 경험 혹은 사용중인 기술 목록
- SKILLS 를 크게 [기술, 환경도구, 협업도구] 세 분야로 분류하여 데이터 정의
- Animation Effect UI

### SOFT SKILLS 조회
![video_softskills](https://github.com/postop09/portfolio-v2/assets/93017923/6e2b765a-1995-434d-aa1e-e11cd36ad603)
- 개인적인 성향 및 강점 목록
- Animation Effect UI

### 이미지 최적화
<img src="https://firebasestorage.googleapis.com/v0/b/thanos-ba3dc.appspot.com/o/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%2Fimg_portfolio4.png?alt=media&token=598b7963-a7fe-4a92-84be-771fc36d9e72" width="480" />

- Next.js 의 `<Image />` 태그의 속성을 활용
- 이미지 평균 크기 100kB -> 72kB 로 개선
- 이미지 다운로드 평균 속도 1.2s -> 0.4s 로 개선

## ⚫️정리

### 🐾개발 전 목표/고려사항
- 웹 프로젝트, 호불호 없이 깔끔한 UI
- Firebase 를 이용한 프로젝트 CRUD 환경 구축
- 이미지 최적화
- 관심사 분리 및 추상화

### 🐾배우고 느낀 점
- 이번 프로젝트를 진행하는 것의 핵심은 앞으로 새롭게 추가될 프로젝트, 혹은 내용들을 더 편리하게 관리할 수 있도록 만드는 것이 목적이었습니다. 그래서 Firebase 를 이용하기로 결정했습니다. Firestore 와 Storage 의 요금 정책에 대해 확인하고, 진행할 프로젝트 수준에서는 무료요금제로 충분하겠다는 결론을 내렸습니다. Firebase 의 문서가 잘 정리되어 있어서 생각보다 어렵지 않게 CRUD 를 구현할 수 있었습니다. 한가지 당황스러웠던 점은 Storage 의 폴더를 삭제하는 API 가 없었습니다. 폴더를 삭제하기 위해서는 모든 파일 목록을 호출하고, 그 목록을 하나씩 삭제해야 합니다.

- 이번 프로젝트는 이미지를 많이 사용하게 될 것이라고 생각했습니다. 그래서 평소 이미지 최적화를 강점으로 지니고있는 Next.js 를 사용하기로 결정했습니다. 먼저, 구현할 웹의 사이즈를 정의했습니다. 1차 목표로는 웹 UI 만 구현할 계획이었기 때문에 그에 맞추어 `width, height` 값을 설정해주었습니다. 만약 `width, height` 값을 제공하지 않는다면, Next.js 는 비율에 맞는 이미지를 모두 로드하는 현상이 있습니다. 그래서 되도록 이미지의 크기를 정의해서 사용하고, 필요한 이미지 소수만 반응형을 고려하여 사용했습니다. Next.js 의 이미지 최적화 공식 문서를 참고하여 유의미한 성능의 변화를 실감할 수 있었습니다.

- 개발을 완료하고 마지막으로 Vercel 을 통해 배포를 설정하는 과정에 `Type error: module not found` 에러를 마주했습니다. Vercel 의 빌드 에러 로그는 `import ... "@/Layout/Layout"` 의 `@` 를 가리키고 있었습니다. 이상했던 것은 로컬환경에서는 정상적으로 빌드가 잘 된다는 것입니다. 우선 저는 빌드 에러 로그의 안내처럼 절대경로 설정 (@) 관련으로 생각하고 문제를 찾아나갔습니다. tsConfig, webpack, vercel.json 관련 설정들을 찾아보며 다양한 시도를 했지만 문제는 해결되지 않았습니다. 그렇게 삽질을 한참하고 난 후, 개발을 하면서 `Layout 폴더`와 `Layout 파일`을 인식하는데 코드에디터가 오류를 냈던 일이 생각났습니다. 그래서 이름이 겹치지 않도록 폴더 이름을 `Layouts` 로 변경해주니 성공적으로 Vercel 빌드&배포를 완료할 수 있었습니다! 이번일을 계기로... 역시 환경 설정이 마지막 관문으로서의 역할을 톡톡히 하는구나를 느꼈습니다. 신중히 그리고 천천히 코드를 되짚어보다보면 해결할 수 없는 문제는 없는 것같습니다. :)

### 🐾개선할 점
- 프로젝트 작성 예외처리 및 UI 개선
- 프로젝트 수정
- SKILLS, SOFT SKILLS CRUD
- 
### 🐾2024.03.08 업데이트
- 반응형 UI 구현
