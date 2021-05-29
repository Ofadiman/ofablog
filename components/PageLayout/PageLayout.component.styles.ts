import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  main: {
    alignSelf: 'center',
    flex: 1,
    maxWidth: 1080,
    padding: theme.spacing(10),
    width: '100%'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }
}))
