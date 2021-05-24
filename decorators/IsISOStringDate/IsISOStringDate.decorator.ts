import { Validate, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

import { ISO_STRING_DATE_REGEX } from '../../constants/RegularExpressions.constants'

export const IsISOStringDate = (): PropertyDecorator => Validate(IsISOStringDateValidatorConstraint)

@ValidatorConstraint({ async: true, name: IsISOStringDate.name })
class IsISOStringDateValidatorConstraint implements ValidatorConstraintInterface {
  public async validate(value: string, _args: ValidationArguments): Promise<boolean> {
    return ISO_STRING_DATE_REGEX.test(value)
  }

  public defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be a valid ISO string date!`
  }
}
