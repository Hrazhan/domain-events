"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UniqueEntityID_1 = require("./UniqueEntityID");
var isEntity = function (v) {
    return v instanceof Entity;
};
var Entity = /** @class */ (function () {
    function Entity(props, id) {
        this._id = id ? id : new UniqueEntityID_1.UniqueEntityID();
        this.props = props;
    }
    Entity.prototype.equals = function (object) {
        if (object === null || object === undefined) {
            return false;
        }
        if (this === object) {
            return false;
        }
        if (!isEntity(object)) {
            return false;
        }
        return this._id.equals(object._id);
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map