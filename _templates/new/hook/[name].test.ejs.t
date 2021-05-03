---
to: hooks/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.test.ts
---
import { renderHook } from '@testing-library/react-hooks'

import { <%= h.changeCase.camel(name) %> } from './<%= h.changeCase.camel(name) %>'

describe('<%= h.changeCase.camel(name) %> hook', () => {
  test('should render hook', () => {
    const result = renderHook(() => <%= h.changeCase.camel(name) %>())

    expect(result).toBeDefined()
  })
})
