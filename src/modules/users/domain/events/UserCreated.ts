import { IDomainEvent } from '../../../../core/domain/event/IDomainEvents';
import { User } from '../user';
import { UniqueEntityID } from '../../../../core/domain/UniqueEntityID';

export class UserCreated implements IDomainEvent {
  public dateTimeOccurred: Date;
  public user: User;

  constructor(user: User) {
    this.dateTimeOccurred = new Date();
    this.user = user;
  }

  getAggregateId(): UniqueEntityID {
    return this.user.id;
  }
}
