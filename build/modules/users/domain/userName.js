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
Object.defineProperty(exports, "__esModule", { value: true });
var ValueObject_1 = require("../../../core/domain/ValueObject");
var UserName = /** @class */ (function (_super) {
    __extends(UserName, _super);
    function UserName(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(UserName.prototype, "value", {
        get: function () {
            return this.props.name;
        },
        enumerable: true,
        configurable: true
    });
    UserName.maxLength = 15;
    UserName.minLength = 2;
    return UserName;
}(ValueObject_1.ValueObject));
exports.UserName = UserName;
({
    return: new UserName(props)
});
//# sourceMappingURL=userName.js.map