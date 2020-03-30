import './modules/notification/subscribers';
import { User } from './modules/users/domain/user';
import { DomainEvents } from './core/domain/event/DomainEvents';
import { UniqueEntityID } from './core/domain/UniqueEntityID';
import { UserName } from './modules/users/domain/userName';

// const usernameOrError = UserName.create({ name: 'rajan' });
// const username: UserName = usernameOrError.value;

const user = User.create({
  username: 'rajan',
  password: '123456',
});
DomainEvents.dispatchEventsForAggregate(user.id);

// const user1 = User.create({
//   username: 'rajesh',
//   password: '123456',
// });

// const user2 = User.create({
//   username: 'leonard',
//   password: '123456',
// });

// const user3 = User.create({
//   username: 'Sheldon',
//   password: '123456',
// });

// DomainEvents.dispatchEventsForAggregate(user2.id);
// DomainEvents.dispatchEventsForAggregate(user3.id);
// DomainEvents.dispatchEventsForAggregate(user1.id);
