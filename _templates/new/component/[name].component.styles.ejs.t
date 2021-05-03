---
to: components/<%= h.inflection.pluralize(h.changeCase.lower(type)) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.component.styles.ts
---
import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {}
}))
