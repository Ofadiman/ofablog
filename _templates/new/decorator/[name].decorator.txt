---
to: decorators/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.decorator.ts
---
import { Validate, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

export const <%= h.changeCase.pascal(name) %> = (): PropertyDecorator => Validate(<%= h.changeCase.pascal(name) %>ValidatorConstraint)

@ValidatorConstraint({ async: true, name: <%= h.changeCase.pascal(name) %>.name })
class <%= h.changeCase.pascal(name) %>ValidatorConstraint implements ValidatorConstraintInterface {
  public async validate(value: string, args: ValidationArguments): Promise<boolean> {
    return false
  }

  public defaultMessage(args: ValidationArguments): string {
    return 'message'
  }
}
