// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   // 브라우저에게 한글설정으로 응답하라는 문, 정상 응답코드 200과 캐릭터 셋 설정
//   if (req.url === "/") {
//     res.end("여기는 루트입니다");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인 창입니다.");
//   }
// });

// app.listen(8081, () => {
//   console.log("http로 가동된 서버");
// });

"use strict";
// 모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 8081;
// 라우팅
const home = require("./src/routes/home");

// 앱 세팅 - 화면 뷰단을 처리할 수 있는 뷰 엔진 세팅
app.set("views", "./src/views");
// 생성될 엔진을 ejs로 해석하도록
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
// 디렉토리 네임은 app.js가 있는 현 위치 반환하고 그 안에 있는 src폴더 안에 있는 public폴더를 정적 경로 추가하는 명령어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home);
//use=>미들웨어를 등록해주는 메소드

module.exports = app;
