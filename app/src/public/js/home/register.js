"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psw = document.querySelector("#psw"),
  confirmPsw = document.querySelector("#confirm-psw"),
  registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  const req = {
    id: id.value,
    psw: psw.value,
    name: name.value,
    confirmPsw: confirmPsw.value,
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
      console.error(new Error("회원가입 중 에러 발생"));
    });
}
