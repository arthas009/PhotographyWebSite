import React from 'react';
import {useEffect} from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Typography, Box, ThemeProvider } from '@material-ui/core';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TableKurs from '../../Components/TableKurs';
import Container from '@material-ui/core/Container';


const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Kulubü / İletişim',
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
    width: '50%',
  },
  dikeyCizgi: {
    width: '1%',
    height: '100%'
  },
  iletisim_item: {
    borderTop: `5px solid ${theme.palette.divider}`,
    borderBottom: `5px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(0),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: 'rgba(200,200,200,.9)',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  bosluk: {
    marginLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),

  },
  phoneIcon: {
    marginLeft: theme.spacing(0),

  },
  emailIcon: {
    marginLeft: theme.spacing(1),
    // marginRight:theme.spacing(50)
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


export default function Iletisim() {
  const classes = useStyles();
  const [kurslar, setKurslar] = React.useState(null);

  async function getKurslar()
  {
    try {    

      let [images] = await Promise.all([
        fetch("http://gaziokculukresmi.com/kurslarigetir"),
      ]);
      const b = await images.json();
      setKurslar(b);
    }
    catch (err) {
      console.log(err);
    };
  }
  
  useEffect(() => {
    getKurslar();
  }, []);

  if (kurslar === null) {
    return (
      <React.Fragment>
      <CssBaseline />
        <Container>
          <Grid className={classes.heaederGrid}>
            <Box className={classes.pageHeader}>
            <ThemeProvider theme={themeTypography}>
            <h1> <Typography variant="overline" color="textPrimary">KURSLARIMIZ</Typography></h1> 
            </ThemeProvider>
            </Box>
            <hr className={classes.yatayCizgi} />

            Kurslar sunucudan alınırken bir hata meydana geldi.
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
            <Typography variant="overline" color="textPrimary">KURSLARIMIZ</Typography>
          </ThemeProvider>
        </Box>
        <hr className={classes.yatayCizgi} />
      </Grid>   
    <Grid className={classes.bosluk} >  
         
     <TableKurs  objectKurslar={kurslar}></TableKurs>

      </Grid>
      
    </React.Fragment>
  );
}
