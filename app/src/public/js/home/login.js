"use strict";

const id = document.querySelector("#id"),
  psw = document.querySelector("#psw"),
  btn = document.querySelector("button");

btn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psw: psw.value,
  };
  console.log(req);
}
