import React from 'react';
import {useEffect} from 'react';
//import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CollapseableCard from '../../Components/CollapseableCard';

const HaberYolu = './Images/Haberler/';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  heaederGrid:
  {
    marginTop: theme.spacing(3),
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
      fontStyle: 'underline',
      //textDecorationLine: 'underline'
    },
    body1: {
      fontWeight: 500,
    },
  },
});
const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Kulubü / Haberler',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  btnName: '',
  btnUrl: '',
}
];

export default function Haberler(props) {
  const [haberler, setHaberler] = React.useState(null);

  async function getNews()
  {
    try {    

      let [images] = await Promise.all([
        fetch("http://gaziokculukresmi.com/haberlerigetir"),
      ]);
      const b = await images.json();
      setHaberler(b);
    }
    catch (err) {
      console.log(err);
    };
  }
  
  useEffect(() => {
    getNews();
  }, []);

  const classes = useStyles();
  if (haberler === null) {
    return (
      <React.Fragment>
      <CssBaseline />
        <Container>
          <Grid className={classes.heaederGrid}>
            <Box className={classes.pageHeader}>
            <ThemeProvider theme={themeTypography}>
            <h1> <Typography variant="overline" color="textPrimary">Haberler</Typography></h1> 
            </ThemeProvider>
            </Box>
            <hr className={classes.yatayCizgi} />

            Haberler sunucudan alınırken bir hata meydana geldi.
          </Grid>
        </Container>
        </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {
        mainFeaturedPost.map((item, i) =>
          <MainFeaturedPost key={i} post={item} />
        )
      }  
        <Container>
          <Grid><Box className={classes.pageHeader}>
          <ThemeProvider theme={themeTypography}>
              <Typography variant="overline" color="textPrimary">Haberler</Typography>
            </ThemeProvider>
          </Box>
          <hr className={classes.yatayCizgi} />

          </Grid>
          <Grid className={classes.mainGrid} container spacing={4}>
            {
               haberler.map((post) => 
              <CollapseableCard key={post.haberBasligi} post={post} haberYolu = {HaberYolu} />
               )}
          </Grid>

        </Container>
    </React.Fragment>
  );



}
