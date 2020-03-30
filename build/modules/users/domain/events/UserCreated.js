"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserCreated = /** @class */ (function () {
    function UserCreated(user) {
        this.dateTimeOccurred = new Date();
        this.user = user;
    }
    UserCreated.prototype.getAggregateId = function () {
        return this.user.id;
    };
    return UserCreated;
}());
exports.UserCreated = UserCreated;
//# sourceMappingURL=UserCreated.js.map