### 프로디지털 아카데미 프론트 리액트 강의 (5/22)

### Router란?

- Router: URL에 따른 페이지 이동!
- React-Router: React에서 URL에 따른 페이지 이동
- 기본적으로 React는 Client UI Library
  -> React-Router는 Client-Side-Routing 라이브러리!

### Client-Side VS Server-Side

1. Client Side

- 주체가 Client 쪽 (device 기기 - 브라우저 or 모바일 등)
- Client Side Routing: Client 쪽에서 URL 이동에 따라 다른 페이지 -> 실제 서버에 해당 URL 요청이 가지 않는다.
- CSR

2. Server Side

- 주체가 Server 쪽 (response를 받는 쪽)
- Server Side Routing: Server 쪽에서 URL에 따라 다른 페이지 -> 실제 서버에 해당 URL에 따른 요청이 간다.
- SSR

### CSR과 SSR

1. 렌더링 위치

- CSR: 모든 렌더링 작업이 클라이엍느 (브라우저)에서 수행. 서버는 주로 정적파일 (HTML, Javascript, CSS)을 제공하고, 브라우저는 이 파일들을 받아서 실행하여 동적으로 콘텐츠를 렌더링합니다.
- SSR: 서버에서 HTML을 렌더링하여 완성된 HTML 문서를 클라이언트에 전달합니다. 브라우저는 이 HTML을 그래도 받아서 표시합니다. 초기 페이지 로드시 서버가 필요한 데이터를 가져와서 페이지를 구성합니다.

2. 초기 로딩 시간

- CSR: 초기 로딩이 느릴 수 있습니다. 빈 HTML 페이지를 먼저 받아오고, 필요한 JavaScript를 다운로드 및 실행한 후에야 콘텐츠가 표시되기 때문입니다.
- SSR: 초기 로딩이 빠릅니다. 서버에서 이미 완성된 HTML을 전달하므로 브라우저는 즉시 콘텐츠를 렌더링할 수 있습니다.

3. SEO (검색 엔진 최적화)

- CSR: 검색 엔진 봇이 JavaScript를 실행하지 못하면 빈 페이지를 인덱싱할 수 있어 SEO에 불리할 수 있습니다. 그러나 구글 등 최신 검색 엔진은 JavaScript를 실행할 수 있어 문제를 완화하고 있습니다.
- SSR: 완성된 HTML이 즉시 제공되므로 검색 엔진이 페이지 콘텐츠를 바로 인덱싱할 수 있어 SEO에 유리합니다.

4. 인터랙티브성 및 사용자 경험

- CSR: 초기 로딩 후 페이지 간 이동이 매우 빠르고 부드러우며, 완전히 동적인 사용자 경험을 제공합니다. 모든 페이지 전환이 클라이언트에서 처리되므로 추가 서버 요청이 필요 없습니다.
- SSR: 초기 로딩은 빠르지만, 페이지 간 이동 시 서버 요청이 필요할 수 있어 사용자 경험이 CSR만큼 부드럽지는 않을 수 있습니다. 이를 보완하기 위해서 많은 SSR 프레임워크는 클라이언트 측 내비게이션을 지원하여 CSR과 유사한 경험을 제공하려 합니다.

### 잠깐 생각하기

- 기본적으로 React는 Client-Side에서 그림을 그리는 UI 라이브러리
- Client에서 페이지를 구성하여 URL에 따른 다른 페이지 구성 -> client-side-routing
- 만약 React로 구성하되 ServerSide에서 그림을 그리고 싶으면? **SSR**
- 브라우저에서 하는 것처럼 React실행을 서버에서 한 번 해주면 됨
- 이를 지원하는 라이브러리 혹은 함수 존재! 장단점을 생각하자!!

### Vite로 시작하기

- React를 시작할때 전통적으로 Webpack이 강자였고, webpack 기반으로 하는 create-react-app이 대세였다.
- 최근에 vite가 나와서 vite를 자주 사용하기도 한다!
  `npm create vite@latest my-react-router -- --template react`
- 폴더 들어가서 `npm install` 까지 해준다!
- 패키지 설치하기: `npm install react-router-dom localforage match-sorter sort-by`
- 진입 지점: `/src/main.jsx`


### 참고로..
- anchor 태그로 이동하는 건 Server-Side routing이다.
