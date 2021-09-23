"use strict";
const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
  home: (req, res) => {
    logger.info(`GET / 304 홈화면으로 이동`);
    res.render("home/index");
  },

  login: (req, res) => {
    logger.info(`GET / login 304 로그인 화면으로 이동`);
    res.render("home/login");
  },

  register: (req, res) => {
    logger.info(`GET / register 304 회원가입 화면으로 이동`);
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: "POST",
      path: "/login",
      status: response.error ? 400 : 200,
    };
    log(response, url);

    return res.status(url.status).json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    log(response, url);
    const url = {
      method: "POST",
      path: "/register",
      status: response.error ? 400 : 201,
    };
    return res.status(url.status).json(response);
  },
};

module.exports = {
  output,
  process,
};
// 컨트롤러 안에 있는 home과 login 객체에 접근 후
// module.export로 내보내기

// key:value, key를 하나만 입력하면 {key:key}와 같이 저장된 형태
const log = (response, url) => {
  if (response.error) {
    logger.error(
      `${url.method} / ${url.path} ${url.status} Response: ${response.success} ${response.msg}`
    );
  } else {
    logger.info(
      `${url.method} / ${url.path} ${url.status} Response: ${
        response.success
      } ${response.msg || ""}`
    );
  }
};
