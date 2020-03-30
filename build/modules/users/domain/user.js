"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
var Guard_1 = require("../../../core/logic/Guard");
var UserCreated_1 = require("./events/UserCreated");
console.log('User Domain');
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(props, id) {
        return _super.call(this, props, id) || this;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userId", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userName", {
        get: function () {
            return this.props.username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this.props.password;
        },
        enumerable: true,
        configurable: true
    });
    User.create = function (props, id) {
        var guardResult = Guard_1.Guard.againstNullOrUndefinedBulk([
            { argument: props.username, argumentName: 'username' },
            { argument: props.password, argumentName: 'password' },
        ]);
        if (!guardResult.succeeded) {
            return guardResult.message;
        }
        var isNewUser = !!id === false;
        var user = new User(__assign({}, props), id);
        console.log(user);
        if (isNewUser) {
            user.addDomainEvent(new UserCreated_1.UserCreated(user));
        }
        return user;
    };
    return User;
}(AggregateRoot_1.AggregateRoot));
exports.User = User;
//# sourceMappingURL=user.js.map