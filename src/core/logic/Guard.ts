export interface IGuardResult {
  succeeded: boolean;
  message?: string;
}

export interface IGuardArguement {
  argument: any;
  argumentName: string;
}

export type GuardArgumentCollection = IGuardArguement[];

export class Guard {
  public static againstNullOrUndefined(
    argument: any,
    argumentName: string,
  ): IGuardResult {
    if (argument === null || argument === undefined) {
      return {
        succeeded: false,
        message: `${argumentName} is null or undefined`,
      };
    } else {
      return { succeeded: true };
    }
  }

  public static againstNullOrUndefinedBulk(
    args: GuardArgumentCollection,
  ): IGuardResult {
    for (const arg of args) {
      const result = this.againstNullOrUndefined(
        arg.argument,
        arg.argumentName,
      );
      if (!result.succeeded) return result;
    }
    return { succeeded: true };
  }
}
