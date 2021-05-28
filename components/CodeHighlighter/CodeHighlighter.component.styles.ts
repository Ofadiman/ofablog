import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  line: {
    background: 'hsl(220, 13%, 23%)',
    display: 'block'
  },
  root: {
    borderRadius: 8,
    ...theme.typography.body1
  }
}))
