import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: 1080,
    padding: `${theme.spacing(2)} ${theme.spacing(6)}`
  },
  list: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  listItem: {
    listStyle: 'none',
    padding: theme.spacing(3)
  },
  root: {}
}))
