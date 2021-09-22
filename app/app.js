"use strict";
// 모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

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
// 바디파서 모듈을 사용할 때 미들웨어로 등록해야 사용 가능하다.
// 바디파서가 json 데이터를 파싱해도록 명시
app.use(bodyParser.urlencoded({ extended: true }));
// 바디 파서의 url 인코딩 설정하여 extended, true값
// => URL을 통해 전달되는 데이터에 한글, 공백등과 같은 문자가 포함되는 경우 제대로 인식되지 않는 문제 해결
app.use("/", home);
//use=>미들웨어를 등록해주는 메소드

module.exports = app;
