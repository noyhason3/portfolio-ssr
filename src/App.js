import React from 'react';
import './App.css';

import mainImage from './assets/imgs/main-image.jpg';
import prelloImg from './assets/imgs/prello.jpeg';
import bitcoinImg from './assets/imgs/bitcoin-2.jpeg';
import memeGeneratorImg from './assets/imgs/meme-generator.jpeg';
import minesweeperImg from './assets/imgs/minesweeper.jpeg';
import bookStoreImg from './assets/imgs/book-store.jpeg';
import misterToyImg from './assets/imgs/mister-toy.jpeg';
import touchNumsImg from './assets/imgs/touch-nums.jpeg';
import inPictureImg from './assets/imgs/in-picture.jpeg';
import './assets/scss/basics/_helpers.scss';
import '../src/pages/Homepage/Homepage.scss';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://www.linkedin.com/in/noy-hason-a3a97a202/'
        target='__blank'
      >
        Noy Hason
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    name: 'Prello',
    description: `A web-based Kanban-style project management solution, similar to “Trello” with
advanced capabilities.`,
    img: prelloImg,
    link: 'https://prello-app.herokuapp.com/#/',
  },
  {
    name: 'Bitcoin-App',
    description: `A web application for bitcoin transactions that manages users and contacts`,
    img: bitcoinImg,
    link: 'https://bitcoin-app-react.herokuapp.com/',
  },
  {
    name: 'Meme-Generator',
    description: `A web application for creating customized Memes.`,
    img: memeGeneratorImg,
    link: 'https://noyhason3.github.io/MemeGenerator/',
  },
  {
    name: 'Minesweeper',
    description: `An improved version of minesweeper we all know.`,
    img: minesweeperImg,
    link: 'https://noyhason3.github.io/Minesweeper/',
  },
  {
    name: 'Books-Shop',
    description: `A web application for managing a book store.`,
    img: bookStoreImg,
    link: 'https://noyhason3.github.io/books-shop/',
  },
  {
    name: 'Mister-Toy',
    description: `A web application for managing a toy store with signup option.`,
    img: misterToyImg,
    link: 'https://noyhason3.github.io/books-shop/',
  },
  {
    name: 'Touch-Nums',
    description: `Could you count till 100?`,
    img: touchNumsImg,
    link: 'https://noyhason3.github.io/touch-nums/',
  },
  {
    name: 'In-Picture',
    description: `A game for children to learn fruits names.`,
    img: inPictureImg,
    link: 'https://noyhason3.github.io/in-picture/',
  },
];

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant='h6' color='inherit' noWrap>
            Noy's portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Welcome to my portfolio
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Junior Full-Stack Web Developer. Ambitious, quick-learner and like
              to be challenged. Have experience writing in the latest
              technologies as Vue.js, React.js, ES6, Scss and more.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='outlined' color='primary' onClick=''>
                    <Link
                      href='https://www.linkedin.com/in/noy-hason-a3a97a202/'
                      target='_blank'
                    >
                      LinkedIn
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  {/* <Button variant='contained' color='primary'> */}
                  <Button variant='outlined' color='primary'>
                    <Link href='https://github.com/noyhason3' target='_blank'>
                      GitHub
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    // className={classes.cardMedia}
                    component='img'
                    // height="140"
                    // width="140"
                    image={card.img}
                    title='Image title'
                  />
                  {/* <img src='./assets/imgs/1.png' /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {card.name}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      <Link
                        size='small'
                        color='primary'
                        href={card.link}
                        target='_blank'
                      >
                        Show demo
                      </Link>
                    </Button>
                    {/* <Button size='small' color='primary'>
                      More info
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          {/* Footer */}
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          {/* Something here to give the footer a purpose! */}
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );

//   const [count, setCount] = React.useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <section>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </section>
//   );
}

export default App;
