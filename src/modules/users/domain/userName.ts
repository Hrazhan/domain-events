import { ValueObject } from '../../../core/domain/ValueObject';
import { Guard } from '../../../core/logic/Guard';

interface UserNameProps {
  name: string;
}
export class UserName extends ValueObject<UserNameProps> {
  public static maxLength = 15;
  public static minLength = 2;

  get value(): string {
    return this.props.name;
  }

  private constructor(props: UserNameProps) {
    super(props);
  }

  public static create(props: UserNameProps): UserName {
    // const usernameResult = Guard.againstNullOrUndefined(props.name, 'username')
    // if (!usernameResult.succeeded) {
    //   throw new Error(usernameResult.message)
    // }

    // if (this.props.name.length >= this.minLength) {

    // }
    return new UserName(props);
  }
}
