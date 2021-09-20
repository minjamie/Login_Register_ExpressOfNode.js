"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["minjae2246", "김민재", "김태규 "],
  psw: ["2246", "2294", "1234"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psw = req.body.psw;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psw[idx] === psw) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
// 컨트롤러 안에 있는 home과 login 객체에 접근 후
// module.export로 내보내기

// key:value, key를 하나만 입력하면 {key:key}와 같이 저장된 형태
