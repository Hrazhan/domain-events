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
var Entity_1 = require("./Entity");
var DomainEvents_1 = require("./event/DomainEvents");
var AggregateRoot = /** @class */ (function (_super) {
    __extends(AggregateRoot, _super);
    function AggregateRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._domainEvents = [];
        return _this;
    }
    Object.defineProperty(AggregateRoot.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AggregateRoot.prototype, "domainEvents", {
        get: function () {
            return this._domainEvents;
        },
        enumerable: true,
        configurable: true
    });
    AggregateRoot.prototype.addDomainEvent = function (domainEvent) {
        // Add the domain event to this aggregate's list of domain events
        this._domainEvents.push(domainEvent);
        // Add this aggregate instance to the DomainEventHandler's list of aggregates who's events it eventually needs to dispatch
        DomainEvents_1.DomainEvents.markAggregateForDispatch(this);
        this.logDomainEventAdded(domainEvent);
    };
    AggregateRoot.prototype.clearEvents = function () {
        this._domainEvents.splice(0, this._domainEvents.length);
    };
    AggregateRoot.prototype.logDomainEventAdded = function (domainEvent) {
        var thisClass = Reflect.getPrototypeOf(this);
        var domainEventClass = Reflect.getPrototypeOf(domainEvent);
        console.info("[Domain Event Created]:", thisClass.constructor.name, '==>', domainEventClass.constructor.name);
    };
    return AggregateRoot;
}(Entity_1.Entity));
exports.AggregateRoot = AggregateRoot;
//# sourceMappingURL=AggregateRoot.js.map