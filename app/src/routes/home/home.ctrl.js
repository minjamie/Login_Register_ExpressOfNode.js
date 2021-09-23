"use strict";
const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
  home: (req, res) => {
    logger.info(`GET / 200 홈화면으로 이동`);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(`GET / login 로그인 화면으로 이동`);
    res.render("home/login");
  },
  register: (req, res) => {
    logger.info(`GET / register 회원가입 화면으로 이동`);
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (response.error)
      logger.error(
        `POST / login 200 Response: "success: ${response.success}, msg: ${response.error}`
      );
    else
      logger.info(
        `POST / login 200 Response: "success: ${response.success}, msg: ${response.msg}`
      );

    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (response.error)
      logger.error(
        `POST / register 200 Response: "success: ${response.success}, msg: ${response.error}`
      );
    else
      logger.info(
        `POST / register 200 Response: "success: ${response.success}, msg: ${response.msg}`
      );
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
// 컨트롤러 안에 있는 home과 login 객체에 접근 후
// module.export로 내보내기

// key:value, key를 하나만 입력하면 {key:key}와 같이 저장된 형태
