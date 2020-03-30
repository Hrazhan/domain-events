"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shallo_equal_object_1 = __importDefault(require("shallo-equal-object"));
/*
 * ValueObjects are objects that we determine their equality
 * through their structual property
 */
var ValueObject = /** @class */ (function () {
    function ValueObject(props) {
        this.props = Object.freeze(props);
    }
    ValueObject.prototype.equals = function (vo) {
        if (vo === null || vo === undefined) {
            return false;
        }
        if (vo.props === undefined) {
            return false;
        }
        return shallo_equal_object_1.default(this.props, vo.props);
    };
    return ValueObject;
}());
exports.ValueObject = ValueObject;
//# sourceMappingURL=ValueObject.js.map