---
to: components/<%= h.inflection.pluralize(h.changeCase.lower(type)) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.component.types.ts
---
export type Props = {
  className?: string
}
