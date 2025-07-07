## 실행 방법

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 프로젝트 폴더 구조

```
src/
├── app/                         # Next.js app 라우팅
│   └── [feature]/               # 기능별 페이지 연결
│       ├── page.tsx
│       └── layout.tsx
│
├── features/                    # 기능별 모듈 디렉토리
│   └── [feature]/               # 각 기능별 폴더
│       ├── components/          # 해당 기능 전용 컴포넌트
│       ├── hooks/               # 해당 기능 전용 커스텀 훅
│       ├── api/                 # 해당 기능 전용 API 모듈
│       ├── pages/               # 해당 기능 전용 페이지
│       ├── types/               # 해당 기능 전용 타입
│       ├── constants/           # 해당 기능 전용 상수
│       └── utils/               # 해당 기능 전용 유틸리티
│
├── components/                  # 전역에서 사용되는 재사용 가능한 컴포넌트
│
├── hooks/                       # 전역에서 사용되는 커스텀 훅
│
├── api/                         # 전역에서 사용되는 API 모듈
│
├── utils/                       # 전역 유틸리티 함수
│
├── types/                       # 전역에서 사용되는 타입
│
├── constants/                   # 전역에서 사용되는 상수 값
│
├── store/                       # 전역 상태 관리
│
└── styles/                      # 전역 스타일
```

### ⚠️ commit 컨벤션

```
[commit type]: [commit message]
```

- commit type

  | 구분자   | 작업 유형                 | 예                                              |
  | -------- | ------------------------- | ----------------------------------------------- | --- |
  | feat     | 새 기능 구현              | feat: 예치금 대량 충전 검색 기능 추가           |
  | fix      | 버그 수정                 | fix: 상점 목록의 에러처리 예외케이스 대응       |
  | release  | 버전 변경                 | release: v10.0.0 → v10.1.1                      |     |
  | docs     | 문서(또는 주석) 관련 작업 | docs: 데코레이터 옵션에 대한 문서 추가          |
  | refactor | 리팩터링                  | refactor: createStore의 함수를 작은 함수로 분리 |
  | test     | 테스트 관련 작업          | test: 상점 생성 테스트 추가                     |
  | chore    | 기타 작업                 | chore: 프로덕션 빌드시 소스맵 생성하도록 변경   |

- commit message

  이번 커밋에서 작업한 내용을 간결하게 설명합니다.
