---
to: decorators/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.decorator.test.ts
---
import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>.decorator'

describe('<%= h.changeCase.pascal(name) %> decorator', () => {
  test('should be defined', () => {
    expect(<%= h.changeCase.pascal(name) %>).toBeDefined()
  })
})
