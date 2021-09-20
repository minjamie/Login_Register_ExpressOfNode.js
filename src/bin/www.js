"use strict";

const app = require("../app");
const PORT = 8081;

app.listen(PORT, () => {
  console.log("express로 만든 서버");
});

//package.json파일을 사용해 보다 편하게 서버 실행
