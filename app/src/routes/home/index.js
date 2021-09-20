"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
// 컨트롤러 부분 모듈화
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;
