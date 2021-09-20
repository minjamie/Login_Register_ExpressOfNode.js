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
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, filed) => {
      if (users.hasOwnProperty(filed)) {
        newUsers[filed] = users[filed];
      }
      return newUsers;
    }, {});
    return newUsers;
    // 데이터 은닉화 후 메서드로 전달 해줘야함
  }
}

module.exports = UserStorage;
