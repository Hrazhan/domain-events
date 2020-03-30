"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DomainEvents = /** @class */ (function () {
    function DomainEvents() {
    }
    /*
     * Called by aggregate root object that have created domain
     * events to eventually be dispatched when the infrastructure commits
     * the units of work
     */
    DomainEvents.markAggregateForDispatch = function (aggregate) {
        var aggregateFound = !!this.findMarkedAggregateById(aggregate.id);
        if (!aggregateFound) {
            this.markedAggregates.push(aggregate);
        }
        console.info('Handlers Map:', this.handlersMap);
        console.info('Handlers Map:', Object.values(this.handlersMap));
    };
    /**
     * Find an aggregate withing the list of marked aggregates.
     */
    DomainEvents.findMarkedAggregateById = function (id) {
        // let found: AggregateRoot<any> = null;
        var found;
        for (var _i = 0, _a = this.markedAggregates; _i < _a.length; _i++) {
            var aggregate = _a[_i];
            if (aggregate.id.equals(id)) {
                found = aggregate;
            }
        }
        return found;
    };
    // Invoke all the subscribers to a particular domain event
    DomainEvents.dispatch = function (event) {
        var eventClassName = event.constructor.name;
        if (this.handlersMap.hasOwnProperty(eventClassName)) {
            var handlers = this.handlersMap[eventClassName];
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                var handler = handlers_1[_i];
                handler(event);
            }
        }
    };
    // Call all the handlers for any domain events on this aggregate
    DomainEvents.dispatchAggregateEvents = function (aggregate) {
        var _this = this;
        aggregate.domainEvents.forEach(function (event) {
            _this.dispatch(event);
        });
    };
    // call the aggregate by id in order to dispatch any handlers subscribed to  events on the aggregate
    DomainEvents.dispatchEventsForAggregate = function (id) {
        var aggregate = this.findMarkedAggregateById(id);
        if (aggregate) {
            this.dispatchAggregateEvents(aggregate);
            aggregate.clearEvents();
            this.removeAggeragetFromMarkedDispatchList(aggregate);
        }
    };
    DomainEvents.removeAggeragetFromMarkedDispatchList = function (aggregate) {
        var index = this.markedAggregates.findIndex(function (a) { return a.equals(aggregate); });
        this.markedAggregates.splice(index, 1);
    };
    // Register a handler to a domain event
    DomainEvents.register = function (callback, eventClassName) {
        if (!this.handlersMap.hasOwnProperty(eventClassName)) {
            this.handlersMap[eventClassName] = [];
        }
        this.handlersMap[eventClassName].push(callback);
    };
    DomainEvents.clearMarkedAggregates = function () {
        this.markedAggregates = [];
    };
    DomainEvents.clearHandlers = function () {
        this.handlersMap = {};
    };
    DomainEvents.handlersMap = {};
    DomainEvents.markedAggregates = [];
    return DomainEvents;
}());
exports.DomainEvents = DomainEvents;
//# sourceMappingURL=DomainEvents.js.map