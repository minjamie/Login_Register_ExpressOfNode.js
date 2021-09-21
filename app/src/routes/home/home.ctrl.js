"use strict";
const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
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
