console.log('Hello world!');
import './modules/users/domain/user';
import './modules/notification/subscribers';
import { User } from './modules/users/domain/user';

const user = User.create({
  username: 'rajan',
  password: '123456',
});
console.log(user);
