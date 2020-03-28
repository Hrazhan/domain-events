import { ValueObject } from '../../../core/domain/ValueObject';

interface UserNameProps {
  name: string;
}
export class UserName extends ValueObject<UserNameProps> {
  public static maxLength: number = 15;
  public static minLength: number = 2;

  get value(): string {
    return this.props.name;
  }

  private constructor(props: UserNameProps) {
    super(props);
  }

  public static create(props: UserNameProps): any<UserName> {
    return new UserName(props);
  }
}
