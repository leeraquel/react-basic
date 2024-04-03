# react-basic

리액트 기초설계부터 develop하면서 react 학습하기

# npx create-react-app 프로젝트명 을 통해 생성한 React 애플리케이션의 자동 생성 폴더 구조 설명

- node_modules/

  npm을 내장한 node를 사용해 프로젝트를 생성했기 때문에 만들어지는 폴더

  `npm install` 명령어를 사용해 설치한 패키지들이 저장될 폴더로, 용량이 큰 경우가 많음

  .gitognore 파일에 포함되어있음 -> 원격 저장소(github)에는 해당 폴더 올라가지 않음

  만약 만들어진 프로젝트를 `git clone [github 레포 주소]`를 통해 해당 프로젝트를 clone한 경우 해당 폴더가 없음

  -> `npm install` or `npm i`를 통해 package.json에 작성된 설치 패키지들을 모두 해당 버전으로 설치할 수 있으며, 설치된 패키지들은 node_modules 폴더가 자동으로 생생되며 해당 폴더 내부에 저장됨

- public/

  - favicon.ico : 브라우저 주소창에 표시되는 웹 페이지 대표 아이콘

  - index.html : https://localhost:3000 이 가장 먼저 리턴하는 파일

    다른 페이지들은 React.js를 통해 생성되어 `<div id="root"></div>` 요소 아래에 동적으로 렌더링 됨

  - manifest.json : 해당 React 애플리케이션의 메타 데이터 저장

  - robots.txt : 웹 크롤러를 위한 정보 저장

- /src

  실제 React 코드(컴포넌트)를 작성하는 디렉토리

  - App.js : 기본으로 생성되는 리액트 컴포넌트

  - App.test.js, setupTest.js : 애플리케이션 테스트를 위한 파일

  - index.js : index.html과 함께 가장 처음으로 실행되는 JS 코드

  이 파일의 코드가 리액트 컴포넌트를 div#root 요소 하위에 추가해 줌

  - reportWedVitals.js : 애플리케이션의 퍼포먼스 시간을 분석해 객체 형태로 보여주는 코드

- .gitignore : 원격 레포지토리에 올리지 않을 파일/폴더 작성

- package.json : 해당 프로젝트의 메타 데이터 및 의존성 정의

  - 프로젝트 이름, 버전, 설명, 작성자 등의 정보를 포함

  - 프로젝트가 의존하는 외부 라이브러리나 패키지들의 목록과 해당 버전을 포함

  - 스크립트(명령어)를 정의해 프로젝트를 실행시키거나 빌드하는데 사용

  - 프로젝트의 의존성 추가 or 업데이트 시 자동으로 수정됨

  - `npm init` 명령어로 생성 가능

- package-lock.json : 프로젝트의 의존성을 더욱 상세하게 정의

  - package.json 파일에 명시된 패키지들의 정확한 버전 및 해당 의존성의 하위 의존성 버전 포함

  - 이 파일을 통해 프로젝트의 의존성을 재현하고, 동일한 환경에서 일관된 빌드를 보장할 수 있음

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
