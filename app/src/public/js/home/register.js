"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psw = document.querySelector("#psw"),
  confirmPsw = document.querySelector("#confirm-psw"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);
console.log("hello ");

function register() {
  if (!id.value) return alert("아이디를 입력해주세요.");
  if (psw.value !== confirmPsw.value)
    return alert("비밀번호가 일치하지 않습니다");

  const req = {
    id: id.value,
    name: name.value,
    psw: psw.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
}
