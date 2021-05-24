import { validate } from 'class-validator'

import * as t from './IsISOStringDate.decorator.test.utils'

describe('IsISOStringDate decorator', () => {
  test('should throw an error when the passed value is not a valid ISO string date', async () => {
    const errors = await validate(t._invalidCreatedAtPost)

    expect(errors).toHaveLength(1)
  })

  test('should not throw an error when the passed value is valid ISO string date', async () => {
    const errors = await validate(t._validCreatedAtPost)

    expect(errors).toHaveLength(0)
  })
})
