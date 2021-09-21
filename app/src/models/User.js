"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { id, psw } = await UserStorage.getUserInfo(client.id);
    if (id) {
      if (id === client.id && psw === client.psw) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하는 않는 아이디입니다." };
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (error) {
      return { success: false, msg: error };
    }
  }
}

module.exports = User;
