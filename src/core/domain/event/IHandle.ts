import { IDomainEvent } from './IDomainEvents';
export interface IHandle<IDomainEvent> {
  setupSubscription(): void;
}
