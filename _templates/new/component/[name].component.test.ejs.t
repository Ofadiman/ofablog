---
to: components/<%= h.inflection.pluralize(h.changeCase.lower(type)) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.component.test.tsx
---
import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>.component'

describe('<%= h.changeCase.pascal(name) %> component', () => {
  test('should be defined', () => {
    expect(<%= h.changeCase.pascal(name) %>).toBeDefined()
  })
})
