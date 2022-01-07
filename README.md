# Karaoke Search

노래방 곡 검색 서비스 '노래찾기'의 개발 repository입니다.

View: [karaoke-search.herokuapp.com](https://karaoke-search.herokuapp.com/)

## Introduction

GraphQL 및 Apollo Client를 직접 사용해보면서 익히기 위해 이전에 프론트엔드 개발만 맡아 진행했던 [프로젝트](https://github.com/bluewood-truth/karaoke-search-frontend)를 리뉴얼하여 풀스택으로 진행한 토이 프로젝트입니다.

이 서비스가 제공하는 기능은 다음과 같습니다.

- **노래방 곡 검색**: TJ/KY 노래방에서 곡 제목/가수/곡 번호를 통해 원하는 곡을 검색할 수 있습니다.
- **마이리스트**: 마음에 드는 노래를 찾아 `♡` 아이콘을 클릭하여 마이리스트에 등록하면 마이리스트 페이지에서 빠르게 찾을 수 있습니다.

<br>

## Installation

1. repository를 클론하여 코드를 다운로드합니다.

   ```shell
   git clone https://github.com/bluewood-truth/karaoke-search
   ```

2. node module들을 설치합니다.

   ```shell
   npm install
   ```

   또는

   ```shell
   yarn
   ```

3. 프로젝트를 빌드하고 실행합니다.

   ```shell
   npm run build
   npm start
   ```

   또는

   ```shell
   yarn build
   yarn start
   ```

<br>

## Built With

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Server & Apollo Client](https://www.apollographql.com/)
- [Storybook](https://storybook.js.org/)

<br>

## Design (Figma)

![design](https://user-images.githubusercontent.com/55024033/148494649-593fcbb6-3252-4f6b-86a8-8b07e6e50f0b.png)

<br>

## Project Structure

```
root
├components: 각각이 특별한 로직을 갖지 않는, view의 하위요소로 쓰이는 재사용 가능한 컴포넌트
├views: 화면의 각 독립된 파트를 담당하는 컴포넌트
├pages: Next.js의 페이지 라우팅을 위한 컴포넌트
├hooks: 글로벌하게 사용되거나, 재사용 가능하거나, page 컴포넌트에서 쓰이는 커스텀 훅
├utils: hook 이외의 일반적인 로직의 모음
├server: 서버 사이드에 필요한 로직의 모음
├styles: 글로벌 스타일 및 사이트에 전반적으로 사용되는 테마, 스타일 값 등의 모음
├types: 여러 곳에서 사용되는 타입들의 모음
├stories: storybook으로 확인 가능한 component story의 모음
└public: favicon, asset 등 정적 파일(주로 이미지)의 모음
```

<br>

## License

Apache License 2.0.

