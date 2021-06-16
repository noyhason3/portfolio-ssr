import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#455a64',
      contrastText: '#fff',
    },
    secondary: {
      main: '#546e7a',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

export default theme;
