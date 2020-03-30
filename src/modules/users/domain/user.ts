import { AggregateRoot } from '../../../core/domain/AggregateRoot';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard } from '../../../core/logic/Guard';
import { UserCreated } from './events/UserCreated';

console.log('User Domain');

interface UserProps {
  username: string;
  password: string;
}

export class User extends AggregateRoot<UserProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get userId(): any {
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

  public static create(props: UserProps, id?: UniqueEntityID) {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.username, argumentName: 'username' },
      { argument: props.password, argumentName: 'password' },
    ]);

    if (!guardResult.succeeded) {
      return guardResult.message;
    }

    const isNewUser = !!id === false;
    const user = new User(
      {
        ...props,
      },
      id,
    );
    // console.log(user);
    if (isNewUser) {
      user.addDomainEvent(new UserCreated(user));
    }

    return user;
  }
}
