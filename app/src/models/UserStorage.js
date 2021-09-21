"use strict";

class UserStorage {
  static #users = {
    // 해당 변수를 퍼블릭에서 프리베이트로 은닉화 하여 외부에서 접근 불가능ㄴ하게
    // 정적 변수로 만들어주면 클래스 자체에서 변수에 접근 가능하다
    id: ["minjae2246", "minjae2294", "taegyu"],
    psw: ["2246", "2294", "1234"],
    names: ["김민재", "김재민", "김태규"],
  };

  static getUsers(...fields) {
    // ...변수명을 파라미터로 전달하면 변수명에 파라미터로 넘긴 값이 배열 형태로 들어온다
    const users = this.#users;
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
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKey = Object.keys(users); // [id, psw, name]
    const userInfo = usersKey.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorage;
