import React from 'react';
import {useEffect} from 'react';
import { makeStyles, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Typography, Box, ThemeProvider, Container, Paper } from '@material-ui/core';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button';
import RoomIcon from '@material-ui/icons/Room';
import GoogleMap from '../../Components/GoogleMap';

import { Fragment } from 'react';


const WhiteTextButton = withStyles({
  root: {
    color: "black"
  }
})(Button);

const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Kulubü / İletişim',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  btnName: '',
  btnUrl: '',
}
];


const iletisim_itemleri2 = [
  {
    title: ['Harita'],
    icon: [<RoomIcon fontSize="small" />],
    description: [<GoogleMap ></GoogleMap>],
  },
]

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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
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
  yatayyCizgi: {
    width: '20%',
    align: 'left',
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
    marginLeft: theme.spacing(2),

  },
 
  ustBosluk:
  {
    paddingTop: theme.spacing(5),
  },
  phoneIcon: {
    marginLeft: theme.spacing(0),

  },
  emailIcon: {
    marginLeft: theme.spacing(1),
    // marginRight:theme.spacing(50)
  },
  root: {
    flexGrow: 1,
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
// <hr align="left" className={classes.yatayyCizgi} />

export default function Iletisim(props) {
  const classes = useStyles();
  const {iletisim} = props;
  let iletisim_itemleri;
  if(iletisim === null || iletisim === undefined)
  {
     iletisim_itemleri = [
      {
        title: ['Adres'],
        icon: [<LocationOnIcon fontSize="small" />],
        description: ["adres","adres2"],
      },
      {
        title: ['Telefon & Fax'],
        icon: [<PhoneIcon fontSize="small" />],
        description: ["telefon1", "telefon2"],
      },
      {
        title: ['Mail'],
        icon: [<EmailIcon fontSize="small" />],
        description: ["mail"],
      },
      {
        title: ['Sosyal Medya Hesaplarımız'],
        icon: [<ThumbsUpDownIcon fontSize="small" />],
        description: [<WhiteTextButton href={"www.instagram.com"}><InstagramIcon fontSize="small" /> Instagram</WhiteTextButton>,
        <WhiteTextButton href={"www.facebook.com"}><FacebookIcon fontSize="small" />Facebook</WhiteTextButton>,
        <WhiteTextButton href={"www.youtube.com"}><YouTubeIcon fontSize="small" />YouTube</WhiteTextButton>],
      },
    ]
  }
  else
  {
   iletisim_itemleri = [
    {
      title: ['Adres'],
      icon: [<LocationOnIcon fontSize="small" />],
      description: [iletisim[0].adres,iletisim[0].adres2],
    },
    {
      title: ['Telefon & Fax'],
      icon: [<PhoneIcon fontSize="small" />],
      description: [iletisim[0].telefon1, iletisim[0].telefon2, iletisim[0].telefon3]
    },

    {
      title: ['Mail'],
      icon: [<EmailIcon fontSize="small" />],
      description: [iletisim[0].mail],
    },
    {
      title: ['Sosyal Medya Hesaplarımız'],
      icon: [<ThumbsUpDownIcon fontSize="small" />],
      description: [<WhiteTextButton href={iletisim[0].instagram}><InstagramIcon fontSize="small" /> Instagram</WhiteTextButton>,
      <WhiteTextButton href={iletisim[0].facebook}><FacebookIcon fontSize="small" />Facebook</WhiteTextButton>,
      <WhiteTextButton href={iletisim[0].youtube}><YouTubeIcon fontSize="small" />YouTube</WhiteTextButton>],
    },
  ]
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
           <h1><Typography variant="overline" color="textPrimary">İLETİŞİM</Typography></h1> 
          </ThemeProvider>
        </Box>
        <hr className={classes.yatayCizgi} />
      </Grid>
      <div className={classes.root}>
        <Container>
          <Grid container direction="column" justify="space-between">

              {iletisim_itemleri.map((iletisim_item) => (
                <Grid item 
                  alignItems="left" key={iletisim_item.title}>
                  <Grid container direction="column"
                    justify="center"
                    alignItems="left" key={iletisim_item.title}>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                      {iletisim_item.icon}{iletisim_item.title}
                    </Typography>
                    <Box borderLeft={1}>
                      <ul >
                        {iletisim_item.description.map((item) => (
                          <Grid align="center">
                            <li key={item} align="left" type="none"  >
                              <Typography variant="subtitle1" color="textSecondary"> {item}</Typography>
                            </li>
                          </Grid>
                        ))}
                      </ul>
                    </Box>
                  </Grid>
                </Grid>

                
              ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
