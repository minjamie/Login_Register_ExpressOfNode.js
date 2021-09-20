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

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
