import React, { Fragment, useEffect } from "react";
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Typography, Box, ThemeProvider,Container } from '@material-ui/core';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PricingSection from '../../Components/PricingSection';


const HaberYolu = './Images/Malzemeler/';


const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Kulubü / 2. El Malzemeler',
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
    marginTop: theme.spacing(15),
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
    width: '75%',
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
      //textDecorationLine: 'underline'
    },
    body1: {
      fontWeight: 500,
    },
  },
});


export default function IkinciElMalzemeler() {
  const classes = useStyles();
  const [malzemeler, setMalzemeler] = React.useState(null);

  async function getMalzemeler()
  {
    try {    
      let [images] = await Promise.all([
        fetch("http://gaziokculukresmi.com/malzemelerigetir"),
      ]);
      const b = await images.json();
      setMalzemeler(b);
    }
    catch (err) {
      console.log(err);
    };
  }
  
  useEffect(() => {
    getMalzemeler();
  }, []);

  if (malzemeler === null) {
    return (
      <React.Fragment>
      <CssBaseline />
        <Container>
          <Grid className={classes.heaederGrid}>
            <Box className={classes.pageHeader}>
            <ThemeProvider theme={themeTypography}>
             <h1> <Typography variant="overline" color="textPrimary">İkinci El Malzemeler</Typography></h1>
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
            <Typography variant="overline" color="textPrimary">İkinci El Malzemeler</Typography>
          </ThemeProvider>
        </Box>
        <hr className={classes.yatayCizgi} />
      </Grid>

<Grid className={classes.bosluk}>
      <PricingSection malzemelerObject = {malzemeler} haberYolu = {HaberYolu}/>
      </Grid>
    
    </React.Fragment>
  );
}
