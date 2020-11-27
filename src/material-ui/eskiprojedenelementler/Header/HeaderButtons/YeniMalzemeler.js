import React, { Fragment, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import PricingSection from '../../Components/PricingSection';

const HaberYolu = './Images/SifirMalzemeler/';
const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Kulubü / Mağaza',
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
  bosluk: {
    align:'center',
   
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(7),
    },
    //laptoplar için
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(15),
      marginRight: theme.spacing(15),
    },
    //büyük ekranlar için
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(30),
      marginRight: theme.spacing(30),
  },
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
export default function YeniMalzemeler() {
  const classes = useStyles();
  const [sifirmalzemeler, setSifirMalzemeler] = React.useState(null);

  async function getSifirMalzemeler()
  {
    try {    

      let [images] = await Promise.all([
        fetch("http://gaziokculukresmi.com/sifirmalzemelerigetir"),
      ]);
      const b = await images.json();
      setSifirMalzemeler(b);
    }
    catch (err) {
      console.log(err);
    };
  }
  
  useEffect(() => {
    getSifirMalzemeler();
  }, []);

  if (sifirmalzemeler === null) {
    return (
      <React.Fragment>
      <CssBaseline />
        <Container>
          <Grid className={classes.heaederGrid}>
            <Box className={classes.pageHeader}>
            <ThemeProvider theme={themeTypography}>
              <Typography variant="overline" color="textPrimary">Sıfır Malzemeler</Typography>
            </ThemeProvider>
            </Box>
            <hr className={classes.yatayCizgi} />

            MALZEMELER sunucudan alınırken bir hata meydana geldi.
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
      <Grid className={classes.heaederGrid}>
        <Box className={classes.pageHeader}>
          <ThemeProvider theme={themeTypography}>
         <h1>  <Typography variant="overline" color="textPrimary">Sıfır Malzemeler</Typography></h1> 
          </ThemeProvider>
        </Box>
        <hr className={classes.yatayCizgi} />
      </Grid>

<Grid className={classes.bosluk}>
      <PricingSection malzemelerObject = {sifirmalzemeler} haberYolu = {HaberYolu}/>
      </Grid>
    
    </React.Fragment>
  );
}
