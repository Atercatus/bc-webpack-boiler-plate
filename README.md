# bc-webpack-boiler-plate

부스트 캠퍼 분들과 함께 만드는 보일러 플레이트 입니다.
웹팩 옵션은 현재 babel 과 scss loader 정도만 설정되어있습니다.
서로 자유롭게 의견을 나누면서 issue와 PR을 이용하여 오픈소스를 경험해볼수 있는 작은 시작이 되었으면 좋겠습니다.

## 규칙
<ol>
  <li> 모두가 주인이며 모두가 자유롭게 의견을 낼 수 있고 이는 모두 존중되어야 합니다.
  <li> 발생하는 모든 오류와 개선사항은 issues 에 개시를 하여 모두가 볼 수 있게 합니다. slack 을 통한 자세한 대화는 지양합니다.
  <li> 완벽하지 않아도 좋습니다. 모두가 함께 하는 프로젝트의 한발자국이 되었으면 좋겠습니다.
</ol>

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


[참조-1](https://poiemaweb.com/es6-babel-webpack-1) <br>

[참조-2](https://poiemaweb.com/es6-babel-webpack-2) <br>

