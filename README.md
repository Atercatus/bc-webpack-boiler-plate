# bc-webpack-boiler-plate

<p>
  부스트 캠퍼 분들과 함께 만드는 보일러 플레이트 입니다.
웹팩 옵션은 현재 babel 과 scss loader 정도만 설정되어있습니다.
서로 자유롭게 의견을 나누면서 issue와 PR을 이용하여 오픈소스를 경험해볼수 있는 작은 시작이 되었으면 좋겠습니다.</p>

<p>
  현재는 제가 프론트 개발에서 사용하는 간단한 디렉토리 구조만 구성되어 있습니다. 다들 자신들이 사용하는 좋은 방법들을 제시해주세요!<br>
 추후에 프론트와 백엔드 개발 시 사용되는 디렉토리 구조를 분리하고 development 모드와 product 모드를 선택할 수 있게 script를 추가하려고 합니다. <br>
  캠퍼분들이 사용하시는 방법이나 아시는 것들을 공유해주세요! 작은 것이라도 좋으니 많이 공유 부탁드립니다.
</p>



## Structues
```

📦src
 ┣ 📂assets
 ┃ ┣ 📂javascript
 ┃ ┃ ┣ 📜main.js                            // import all javascript files. entry point
 ┃ ┃ ┗ 📜sample.js                          // dummy
 ┃ ┗ 📂scss
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┗ 📜_variables.scss                  // define css variables
 ┃ ┃ ┣ 📂pages                              // style for pages
 ┃ ┃ ┣ 📂partials                           // style for partials of page
 ┃ ┃ ┣ 📜main.scss                          // import all scss files. entry point
 ┃ ┃ ┗ 📜sample.scss                        // dummy
 ┣ 📂static                                 // output of webpacking
 ┃ ┣ 📜main.js
 ┃ ┗ 📜styles.css
 ┣ 📂views
 ┃ ┗ 📜index.html
 ┗ 📜app.js
 📜.babelrc                                 // babel config file
 📜.env                                     // help to use process variables
 📜.gitignore
 📜package-lock.json
 📜package.json
 📜README.md
 📜webpack.config.js                        // webpack config file
 ```
 
## How to use
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev:assets": "cross-env WEBPACK_ENV=development webpack -w",
    "dev:server": "nodemon src/app.js"
  }
```
우선 모듈을 설치합니다.
```
$ npm install
```
웹팩을통한 빌드를 합니다. 
```
$ npm run dev:assets
```
src/app.js 를 실행합니다.
```
$ npm run dev:server
```

[참조-1](https://poiemaweb.com/es6-babel-webpack-1) <br>

[참조-2](https://poiemaweb.com/es6-babel-webpack-2) <br>

