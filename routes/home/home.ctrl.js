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

// key:value, key를 하나만 입력하면 {key:key}와 같이 저장된 형태
