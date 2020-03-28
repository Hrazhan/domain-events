import { AggregateRoot } from '../../../core/domain/AggregateRoot';

console.log('User Domain');

interface UserProps {
  username: string;
  password: string;
}

export class User extends AggregateRoot<UserProps> {}
