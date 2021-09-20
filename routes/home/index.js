"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
// 컨트롤러 부분 모듈화
router.get("/login", ctrl.login);

module.exports = router;
