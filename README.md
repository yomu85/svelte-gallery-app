# svelte-gallery-app
Svelte.js와 Lorem Picsum API를 사용하는 [이미지 갤러리 애플리케이션](https://compassionate-khorana-f823ff.netlify.app/) 입니다.

## Specs
+ [Svelte.js](https://svelte.dev/)
+ [Snowpack](https://www.snowpack.dev/)
+ [Svelte SPA Router](https://github.com/ItalyPaleAle/svelte-spa-router)
+ [Lorem Picsum API](https://picsum.photos/)

## Packages
+ snowpack: 프로젝트를 빌드하기 위한 핵심 패키지입니다.
+ @snowpack/plugin-svelte: Snowpack에서 Svelte를 해석할 수 있습니다. svelte-preprocess가 같이 설치됩니다.
+ @snowpack/plugin-sass: SCSS를 사용합니다. sass가 같이 설치됩니다.
+ @snowpack/plugin-optimize: 결과를 압축하고 번들링하는 등 최종 결과를 최적화합니다.
+ @snowpack/plugin-babel: 프로젝트의 JavaScript 파일을 변환합니다. 콘솔 제거 패키지를 사용하기 위해 구성합니다.
+ babel-plugin-transform-remove-console: 배포할 제품에서는 불필요한 콘솔 명령을 제거하는 것이 좋습니다.
+ svelte: Svelte API를 사용하기 위한 핵심 패키지입니다.
+ svelte-spa-router: SPA에 최적화된 Hash 기반 라우팅을 활용할 수 있습니다.
+ autoprefixer: CSS에 자동으로 공급 업체 접두사(Vendor prefix)를 적용합니다.
+ postcss: CSS 후처리 패키지로 autoprefixer를 사용하기 위해 설치합니다.
+ axios: HTTP 클라이언트 라이브러리로, API를 통해 이미지 정보를 요청하기 위해 사용합니다.
+ qs: 쿼리스트링(Query String)을 분석하는 라이브러리입니다.

## Build Setup
> 프로젝트 시작 전 패키지 설치
```
npm i
```
> 개발 서버 시작
```
npm run dev
```
> snowpack build 실행
```
npm run build
```
