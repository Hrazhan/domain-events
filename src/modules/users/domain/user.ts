import { AggregateRoot } from '../../../core/domain/AggregateRoot';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard } from '../../../core/logic/Guard';
import { UserCreated } from './events/UserCreated';
import { UserName } from './userName';

console.log('User Domain');

interface UserProps {
  // username: UserName;
  username: string;
  password: string;
}

export class User extends AggregateRoot<UserProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get userName(): string {
    return this.props.username;
  }

  get password(): string {
    return this.props.password;
  }

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: UserProps, id?: UniqueEntityID): User {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.username, argumentName: 'username' },
      { argument: props.password, argumentName: 'password' },
    ]);

    if (!guardResult.succeeded) {
      console.log(guardResult.message);
      // return;
    }

    const isNewUser = !!id === false;
    const user = new User(
      {
        ...props,
      },
      id,
    );
    if (isNewUser) {
      user.addDomainEvent(new UserCreated(user));
    }

    return user;
  }
}
