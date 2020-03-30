import { IHandle } from '../../../core/domain/event/IHandle';
import { DomainEvents } from '../../../core/domain/event/DomainEvents';
import { UserCreated } from '../../users/domain/events/UserCreated';

export class TestAfterUserCreated implements IHandle<UserCreated> {
  constructor() {
    this.setupSubscription();
    console.info('TestAfterUserCreated: Constructor');
  }

  setupSubscription(): void {
    DomainEvents.register(this.onUserCreatedEvent.bind(this), UserCreated.name);
  }

  private async onUserCreatedEvent(event: UserCreated): Promise<void> {
    const { user } = event;

    console.log('TestAfterUserCreated: onUserCreatedEvent');
  }
}
