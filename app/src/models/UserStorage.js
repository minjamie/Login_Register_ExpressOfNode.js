"use strict";

const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo() {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKey = Object.keys(users); // [id, psw, name]
    const userInfo = usersKey.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
  static getUsers(...fields) {
    // ...변수명을 파라미터로 전달하면 변수명에 파라미터로 넘긴 값이 배열 형태로 들어온다
    // const users = this.#users;
    //getUsers메소드 호출시 새로운 유저정보인 id, psw만 만들어서 전달해줘야한다
    // newUsers 안에 fields에 담겨져있는 내용들만 담기위해 reduce메서드 활용
    const newUsers = fields.reduce((newUsers, filed) => {
      if (users.hasOwnProperty(filed)) {
        newUsers[filed] = users[filed];
      }
      return newUsers;
    }, {});
    return newUsers;
    // 데이터 은닉화 후 메서드로 전달 해줘야함
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.psw.push(userInfo.psw);
    users.name.push(userInfo.name);
    return { success: true };
  }
}

module.exports = UserStorage;
