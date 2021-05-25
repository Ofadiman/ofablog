---
to: functions/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.test.ts
---
import { <%= h.changeCase.camel(name) %> } from './<%= h.changeCase.camel(name) %>'

describe('<%= h.changeCase.camel(name) %> function', () => {
  test('should be defined', () => {
    expect(<%= h.changeCase.camel(name) %>).toBeDefined()
  })
})
