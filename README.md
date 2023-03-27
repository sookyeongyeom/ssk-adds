# 🦋 Yonsei SSK ADDS Homepage

#### 개발 기간 및 팀원 구성

- 개발 기간 : 2022.12
- 팀원 구성 : 디자이너 1명, FE 1명, BE 1명

🚀 [Production 서버 바로가기](https://addsyonsei.co.kr)

## Index

1. [프로젝트 개요](#1-프로젝트-개요)
2. [화면별 Preview](#2-화면별-Preview)
3. [시작하기](#3-시작하기)
4. [기술 스택](#4-기술-스택)
5. [디렉토리 구조](#5-디렉토리-구조)
6. [커밋 컨벤션](#6-커밋-컨벤션)

## 1. 프로젝트 개요

연세대학교 연구실 SSK ADDS의 홈페이지입니다.  
방문자에게 보여지는 페이지와, 어드민을 위한 페이지를 포함하고 있습니다.

이전에 Svelte로 작업하여 납품까지 완료했던 프로젝트였으나,  
클라이언트와의 협의를 통한 디자인 변경 및 로직 추가 과정에서 기존 코드의 심각한 문제를 느껴 처음부터 새로 개발했습니다.  
이 저장소는 새로 개발한 프로젝트를 위한 곳이며, 현재 실서버에 배포되어 운용되고 있습니다.

### 1. 기존 코드의 한계

1. 공용 컴포넌트 설계가 미숙하여 반복되는 로직이나 스타일을 적절히 캡슐화하지 못했습니다.
2. 프로젝트 구조를 명시적으로 잡고 들어가지 않았습니다.
3. 코드에 아무 규칙을 부여하지 않았습니다.
4. API 요청 과정을 완전히 복붙하여 하드코딩했습니다.
5. 반복되는 스타일을 그때그때 하드코딩했습니다.
6. 공통 타이포그래피 및 컬러 등을 한 곳에서 관리하지 않았습니다.

### 2. 그로 인한 문제

1. 수정 사항이 생기면 어느 부분의 코드인지 한참을 찾아야 했습니다.
2. 컴포넌트 분리가 되어있지 않아, 타 페이지 간 공통 부분에 대한 변경사항을 일일이 반영해야 했습니다.
3. 파일 간 결합도가 높아 A 파일을 수정하면 B 파일에 예상치 못한 문제가 발생하곤 했습니다.
4. 디자인 색상을 변경하기 위해 모든 곳에 하드코딩된 색상코드를 일일이 바꿔주어야 했습니다.
5. 공통 레이아웃이 잡혀있지 않아 반응형을 잡기 위해 모든 페이지의 레이아웃을 손수 조정해주어야 했습니다.

이외에도 많은 문제가 존재해 수정할 생각만 해도 스트레스를 받는 수준에 이르렀습니다.

### 3. 반성

그동안 세부적인 구현에만 집착하여 코드 설계의 본질인 `신뢰성, 확장성, 유지보수성`을 간과하고 있었다는 것을 알았습니다.

1. 스스로 짠 코드인데도 믿을 수 없어 수정 시점마다 다시 읽어보아야 했습니다.
2. 베이스가 동일한 유형인데도 확장이 불가하여 유사한 컴포넌트를 몇개씩 추가하여야 했습니다.
3. 문제가 생기면 근원을 해결하지 못하고 반창고를 덕지덕지 붙이듯 대처해야 했습니다.

사실 이 시점에서,  
3개월 넘게 열심히 했던 것이 모두 무용지물이 된 듯한 기분이 들었습니다.  
잘못된 방향으로 열과 성을 다하고 있었다는 생각이 떠나지 않았습니다.

### 4. 실행 (22.12)

속상했지만 한편으로는 다행이라는 마음이 들었습니다.  
이 문제의 해답과 가까워지면 이전보다 성장할 수 있을 것이라고 믿었기 때문입니다.

Next.js와 TypeScript로 스택을 변경하여 처음부터 다시 작업했습니다.  
구현에 급급해하지 않고, 앞으로도 계속 사용할 나만의 규칙을 만들기 위해 고민했습니다.

1. 공통 타이포그래피 및 컬러를 따로 정의했습니다.
2. 두 곳 이상에서 쓰이는 공통된 UI 요소는 반드시 재사용 가능한 컴포넌트로 만들었습니다.
3. 반복되는 스타일 등은 바깥에 상수로 정의하여 Import하여 사용했습니다.
4. 중첩 레이아웃을 사용하여 페이지가 따로 놀지 않게 했습니다.
5. 데스크탑 레이아웃을 잡는 시점에 모바일 디자인을 고려하여 추후 반응형 작업을 용이하게 했습니다.
6. API 요청용 함수를 만들어 컴포넌트 단에서 호출을 위해 작성하는 코드가 최대한 심플해지도록 했습니다.
7. Axios Promise에 API 스키마 타입을 지정하여 매번 필드명을 확인해야하는 수고 및 휴먼에러의 가능성을 없앴습니다.
8. 타입은 한눈에 위계 관계를 확인할 수 있게 아예 하나의 디렉토리에 카테고리별로 모아서 관리했습니다.
9. 커스텀훅과 유틸함수를 적극적으로 추가하여 재사용이 예상되는 로직을 분리했습니다.

### 5. 결과

물론 동일한 프로젝트에 대한 두번째 개발이라는 점은 있지만,  
첫번째 작업때는 꼬박 3개월 이상이 걸렸던 것이 이번에는 고작 2주밖에 걸리지 않았습니다.

처음에는 숲을 디자인하기 위해 고민하는 시간이 늘어나 진도가 더딘 듯 했지만,  
숲의 형태를 잡고 나니 이후의 작업이 이전과 비교할 수 없을 정도로 빨라지는 것을 체감했습니다.

추후 수정 과정에서도 스트레스 받는 일이 없었습니다.

1. 이곳에 이것이 있고, 저곳에 저것이 있다는 것을 확신할 수 있었습니다.
2. 파일 간 결합도가 낮아져, 어느 파일을 수정하는 것이 다른 파일에 영향을 주지 않았습니다.
3. 컴포넌트간 결합이 발생하는 부분은 TS에 의해 보호되므로, 영문모를 에러에서 헤매는 일이 사라졌습니다.
4. 공통 UI 요소의 변경사항이 생기면 스타일 상수 혹은 공용 컴포넌트 코드만 수정할 수 있게 되었습니다.
5. API 연결 과정에서 휴먼에러가 사라졌습니다.

## 2. 화면별 Preview

### 1. 홈페이지

<table>
  <tr>
    <td><img src='https://user-images.githubusercontent.com/98504939/227927866-42cabfaf-5fe0-4600-afa5-6f620aa19ed1.gif' /></td>
    <td><img src='https://user-images.githubusercontent.com/98504939/227931068-06f1110e-d19e-40b0-acb4-dabc8d8ceeb0.gif' /></td>
  </tr>
</table>

### 2. 어드민

![admin](https://user-images.githubusercontent.com/98504939/227930598-3b6db29f-7af2-4c82-a8d1-2effa89f5085.gif)

## 3. 시작하기

### 1. Clone & Install

```shell
$ git clone https://github.com/sookyeongyeom/ssk-adds
$ cd ssk-adds
$ yarn install
```

### 2. Run

```javascript
$ yarn dev
```

## 4. 기술 스택

<a><img src="https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/TS-3178C6?style=flat-square&logo=typescript&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=reduxsaga&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Redux Saga-999999?style=flat-square&logo=redux&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Immer-00E7C3?style=flat-square&logo=immer&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/EsLint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon aws&logoColor=white"/></a>

## 5. 디렉토리 구조

```
├── .github/workflows   // 배포자동화를 위한 yml
├── @types              // 모든 타입
├── api
├── components
│   ├── Home            // home (홈페이지-메인)
│   ├── Adds            // adds (홈페이지-세부)
│   ├── Admin           // admin (어드민)
│   ├── ...
│   └── Layout          // 레이아웃
├── constants
├── hooks
├── models
├── modules             // Redux Store
├── pages
├── public
├── s3                  // S3 관련 유틸
├── styles
├── utils
├── tsconfig.json
├── next-env.d.ts
├── next.config.js
├── package.json
├── yarn-error.log
├── yarn.lock
├── Dockerfile          // 배포자동화를 위한 도커파일
└── README.md
```

## 6. 커밋 컨벤션

### 1. 브랜치 이름 컨벤션

```
Feature/[기능요약]

- 맨 첫글자 F만 대문자로, 기능요약은 소문자로 작성합니다.
- 띄어쓰기는 하이픈으로 구분합니다.

ex) Feature/modal-publishing
```

### 2. 커밋 메세지 컨벤션

```
<태그>: <제목>

- 태그의 첫글자는 대문자로 작성합니다.
- 태그는 아래에 적힌 것들만 사용합니다.

Feat: 새로운 기능 추가, 기능 로직 변경
Fix: 버그 수정
Refactor: 코드 리팩토링 (기능 변화 X)
Style: 코드 포맷팅, 코드 변경이 없는 경우
Chore: 빌드 업무 수정, 패키지 매니저 수정
Docs: 문서 수정, 주석
```

### 3. 머지 전략

모든 Feature 브랜치는 Squash Merge 합니다.
