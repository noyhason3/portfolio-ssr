import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: '#b0bec5',
      main: '#455a64',
      // dark: '#263238',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#607d8b',
      main: '#546e7a',
      // dark: '#455a64',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  // icon: {
  //   marginRight: theme.spacing(2),
  // },
  // heroContent: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(8, 0, 6),
  // },
  // heroButtons: {
  //   marginTop: theme.spacing(4),
  // },
  // cardGrid: {
  //   paddingTop: theme.spacing(8),
  //   paddingBottom: theme.spacing(8),
  // },
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
  // footer: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(6),
  // },
});

export default theme;
