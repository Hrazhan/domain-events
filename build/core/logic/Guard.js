"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guard = /** @class */ (function () {
    function Guard() {
    }
    Guard.againstNullOrUndefined = function (argument, argumentName) {
        if (argument === null || argument === undefined) {
            return {
                succeeded: false,
                message: argumentName + " is null or undefined",
            };
        }
        else {
            return { succeeded: true };
        }
    };
    Guard.againstNullOrUndefinedBulk = function (args) {
        for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
            var arg = args_1[_i];
            var result = this.againstNullOrUndefined(arg.argument, arg.argumentName);
            if (!result.succeeded)
                return result;
        }
        return { succeeded: true };
    };
    return Guard;
}());
exports.Guard = Guard;
//# sourceMappingURL=Guard.js.map