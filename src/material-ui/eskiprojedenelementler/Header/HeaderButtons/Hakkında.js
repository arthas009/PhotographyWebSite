import React from 'react';
import {useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MainFeaturedPost from '../../Components/MainFeaturedPost';

const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Kulubü / Hakkında',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  btnName: '',
  btnUrl: '',
}
];


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  heaederGrid:
  {
    marginTop: theme.spacing(3),
  },
  bodyClass:
  {
    marginTop: theme.spacing(2),
  },
  marginTopDiv:
  {
    marginTop: theme.spacing(5),
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
  },
  yatayCizgi: {
    width: '50%',
  },
}));


const themeTypography = createMuiTheme({
  typography: {
    overline: {
      fontSize: 25,
      //textDecorationLine: 'underline'
    },
    body1: {
      fontWeight: 500,
    },
  },
});

export default function Hakkında() {
  const classes = useStyles();
  const [Hakkinda, setHakkinda] = React.useState(null);

  async function getHakkinda() {
    try {

      let [images] = await Promise.all([
        fetch("http://gaziokculukresmi.com/hakkindagetir"),
      ]);
      const b = await images.json();
      setHakkinda(b);
    }
    catch (err) {
      console.log(err);
    };
  }

  useEffect(() => {
    getHakkinda();
  }, []);
  if(Hakkinda === null)
  return (<React.Fragment></React.Fragment>);
  return (
    <React.Fragment>
      <CssBaseline />
      {
        mainFeaturedPost.map((item, i) =>
          <MainFeaturedPost key={i} post={item} />
        )
      }
      <Container>
        <Grid className={classes.heaederGrid}>
          <Box className={classes.pageHeader}>
            <ThemeProvider theme={themeTypography}>
            <h1>  <Typography variant="overline" color="textPrimary">Hakkında</Typography></h1>
            </ThemeProvider>

          </Box>
          <hr className={classes.yatayCizgi} />
        </Grid>

        <ThemeProvider theme={themeTypography}>

          <Grid container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.mainGrid}>
            <Grid>

              <Typography
                variant="overline" color="textPrimary">
                BİZ KİMİZ ?
       </Typography>

              <Typography
              >
                {Hakkinda[0].biz_kimiz}
              </Typography>
            </Grid>

            <Grid>

              <Typography
                variant="overline" color="textPrimary" className={classes.bodyClass}
              >
                MİSYONUMUZ
       </Typography>

              <Typography
              >
                {Hakkinda[0].misyonumuz}
              </Typography>
            </Grid>
            <Grid>
              <Typography
                variant="overline" color="textPrimary" className={classes.bodyClass}
              >
                VİZYONUMUZ
       </Typography>
              <Typography
                className={classes.bodyClass}
              >
                {Hakkinda[0].vizyonumuz}

              </Typography>
            </Grid>
            <Grid>
              <Typography
                variant="overline" color="textPrimary" className={classes.bodyClass}
              >
                TARİHÇE
       </Typography>
              <Typography
                className={classes.bodyClass}
              >
                {Hakkinda[0].tarihce}

              </Typography>
            </Grid>
          </Grid>
        </ThemeProvider>

      </Container>
    </React.Fragment>
  );
}
