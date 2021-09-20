const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

module.exports = {
  home,
  login,
};
// 컨트롤러 안에 있는 home과 login 객체에 접근 후
// module.export로 내보내기

// key:value, key를 하나만 입력하면 {key:key}와 같이 저장된 형태
