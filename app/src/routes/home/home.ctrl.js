"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psw = req.body.psw;
    const users = UserStorage.getUsers("id", "psw");
    // model단에서 설정한 데이터를 getUsers 메소드에서 정하고싶을 때
    // id , psw 필드만 반환하고싶을때
    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psw[idx] === psw) {
        response.success = true;
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  },

  register: (req, res) => {
    res.render(home / register);
  },
};

module.exports = {
  output,
  process,
};
// 컨트롤러 안에 있는 home과 login 객체에 접근 후
// module.export로 내보내기

// key:value, key를 하나만 입력하면 {key:key}와 같이 저장된 형태
