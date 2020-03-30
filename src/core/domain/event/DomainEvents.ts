import { AggregateRoot } from '../AggregateRoot';
import { UniqueEntityID } from '../UniqueEntityID';
import { IDomainEvent } from './IDomainEvents';

export class DomainEvents {
  private static handlersMap: { [key: string]: any[] } = {};
  private static markedAggregates: AggregateRoot<any>[] = [];

  /*
   * Called by aggregate root object that have created domain
   * events to eventually be dispatched when the infrastructure commits
   * the units of work
   */
  public static markAggregateForDispatch(aggregate: AggregateRoot<any>): void {
    const aggregateFound = !!this.findMarkedAggregateById(aggregate.id);

    if (!aggregateFound) {
      this.markedAggregates.push(aggregate);
    }
  }

  /**
   * Find an aggregate withing the list of marked aggregates.
   */

  private static findMarkedAggregateById(id: UniqueEntityID) {
    // let found: AggregateRoot<any> = null;
    let found;
    for (const aggregate of this.markedAggregates) {
      if (aggregate.id.equals(id)) {
        found = aggregate;
      }
    }
    return found;
  }

  // Invoke all the subscribers to a particular domain event
  public static dispatch(event: IDomainEvent): void {
    const eventClassName: string = event.constructor.name;

    if (this.handlersMap.hasOwnProperty(eventClassName)) {
      const handlers: any[] = this.handlersMap[eventClassName];
      for (const handler of handlers) {
        handler(event);
      }
    }
  }

  // Call all the handlers for any domain events on this aggregate
  public static dispatchAggregateEvents(aggregate: AggregateRoot<any>): void {
    aggregate.domainEvents.forEach((event: IDomainEvent) => {
      this.dispatch(event);
    });
  }

  // call the aggregate by id in order to dispatch any handlers subscribed to  events on the aggregate
  public static dispatchEventsForAggregate(id: UniqueEntityID): void {
    const aggregate = this.findMarkedAggregateById(id);

    if (aggregate) {
      this.dispatchAggregateEvents(aggregate);
      aggregate.clearEvents();
      this.removeAggeragetFromMarkedDispatchList(aggregate);
    }
  }

  private static removeAggeragetFromMarkedDispatchList(
    aggregate: AggregateRoot<any>,
  ): void {
    const index = this.markedAggregates.findIndex((a) => a.equals(aggregate));
    this.markedAggregates.splice(index, 1);
  }

  // Register a handler to a domain event
  public static register(
    callback: (event: IDomainEvent) => void,
    eventClassName: string,
  ): void {
    if (!this.handlersMap.hasOwnProperty(eventClassName)) {
      this.handlersMap[eventClassName] = [];
    }
    this.handlersMap[eventClassName].push(callback);
    console.info('Handlers Map:', this.handlersMap);
  }

  public static clearMarkedAggregates(): void {
    this.markedAggregates = [];
  }

  public static clearHandlers(): void {
    this.handlersMap = {};
  }
}
