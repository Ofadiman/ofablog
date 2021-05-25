---
to: functions/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.ts
---
import { <%= h.changeCase.pascal(name) %>Args, <%= h.changeCase.pascal(name) %>Result } from './<%= h.changeCase.camel(name) %>.types'

export const <%= h.changeCase.camel(name) %> = (args: <%= h.changeCase.pascal(name) %>Args): <%= h.changeCase.pascal(name) %>Result => {}
