"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello world!');
require("./modules/users/domain/user");
require("./modules/notification/subscribers");
var user_1 = require("./modules/users/domain/user");
var user = user_1.User.create({
    username: 'rajan',
    password: '123456',
});
console.log(user);
//# sourceMappingURL=index.js.map