import React from 'react';
import {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';
//import TwitterIcon from '@material-ui/icons/Twitter';
//import FacebookIcon from '@material-ui/icons/Facebook';
//import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import GoogleMap from './GoogleMap';


const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const WhiteTextLink = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Link);

const WhiteTextButton = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Button);

function Copyright() {
  const classes = useStyles();
 

  return (

    <Typography className ={classes.typhoDown} variant="body2" color="textSecondary" align="center">
          <hr className={classes.yatayCizgi} />

      {'Copyright © '}
      <Link color="inherit" to="https://material-ui.com/">
        Gazi Okçuluk Kulübü. Tüm Hakları Saklıdır.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
 

    [theme.breakpoints.down('md')]: {
      marginLeft:theme.spacing(2),

    },    
    typhoDown:
    {
      marginTop: theme.spacing(2),
      color: "#000000",
    },
  
    [theme.breakpoints.down('md')]: {
      width: '10rem',
     // height: '10vh'
      overflow:'auto',
    },   
       
    footer: {
      //borderTop: `5px solid ${theme.palette.divider}`,
      borderBottom: `5px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      marginLeft:theme.spacing(0),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
     backgroundColor: 'rgba(0,0,0,.8)', 
     // backgroundColor:'#3d5afe',
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    }, 
    bosluk: {
      marginLeft:theme.spacing(2),
    },
     yatayCizgi:
     {
       width: '50%',
     },
     yukarıBosluk:
     {
      marginTop:theme.spacing(25),
     },
     footerGrid:
     {
     // backgroundColor: 'rgba(0,0,0,.90)',
      backgroundColor:'#1a237e',//footer arka fon rengi
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
     }
}));

export default function Footer(props) {
  const classes = useStyles();
  //const { description, title } = props;
  const [IletisimBilgileri, setIletisimBilgileri] = React.useState(null);

  async function getIletisim()
  {
    try {    
      let [images] = await Promise.all([
        fetch("http://gaziokculukresmi.com/iletisimgetir"),
      ]);
      const b = await images.json();
      setIletisimBilgileri(b);
    }
    catch (err) {
      console.log(err);
    };
  }
  
  useEffect(() => {
    getIletisim();
  }, []);
  let footers ;
  if(IletisimBilgileri != null){
  footers = [
    {
      title: 'İletişim',
      //description: ['PİYADE MAHALLESİ ATİLLA EŞER CADDESİ', 'No:47/A ETİMESGUT/ANKARA','+90 530 233 5075'],
       description: [IletisimBilgileri[0].adres,IletisimBilgileri[0].adres2,IletisimBilgileri[0].telefon1],
  
    },
    {
      title: 'Hakkında',
      description: ['Biz Kimiz ?', 'Misyonumuz & Vizyonumuz', 'Tarihçe'],
    },
   
    {
      title: 'Sosyal Medya',
      //description: [<WhiteTextButton href="https://www.instagram.com/gaziokculukvespor"><InstagramIcon fontSize="small"/> Instagram</WhiteTextButton>,
       //<WhiteTextButton href="https://www.facebook.com/Gazi-okçuluk-Spor-kulübü-661656140943241"><FacebookIcon fontSize="small" />Facebook</WhiteTextButton>,
       //<WhiteTextButton href="https://youtube.com"><YouTubeIcon fontSize="small" />YouTube</WhiteTextButton>],
       description:[<WhiteTextButton href={IletisimBilgileri[0].instagram}><InstagramIcon fontSize="small"/> Instagram</WhiteTextButton>,
       <WhiteTextButton href={IletisimBilgileri[0].facebook}><FacebookIcon fontSize="small" />Facebook</WhiteTextButton>,
       <WhiteTextButton href={IletisimBilgileri[0].youtube}><YouTubeIcon fontSize="small" />YouTube</WhiteTextButton>
    ]
    },
  ];
}

else{
    footers = [
    {
      title: 'İletişim',
      description: ['PİYADE MAHALLESİ ATİLLA EŞER CADDESİ', 'No:47/A ETİMESGUT/ANKARA','+90 530 233 5075'],
  
    },
    {
      title: 'Hakkında',
      description: ['Biz Kimiz ?', 'Misyonumuz & Vizyonumuz', 'Tarihçe'],
    },
   
    {
      title: 'Sosyal Medya',
      description: [<WhiteTextButton href="https://www.instagram.com/gaziokculukvespor"><InstagramIcon fontSize="small"/> Instagram</WhiteTextButton>,
       <WhiteTextButton href="https://www.facebook.com/Gazi-okçuluk-Spor-kulübü-661656140943241"><FacebookIcon fontSize="small" />Facebook</WhiteTextButton>,
       <WhiteTextButton href="https://youtube.com"><YouTubeIcon fontSize="small" />YouTube</WhiteTextButton>],
    },
  ];
}
  return (
    <React.Fragment>
       <hr className={classes.yukarıBosluk}></hr>
        <Grid className={classes.footerGrid} container spacing={4} justify='center' align='center' >
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title+"footerGrid"}>
              <WhiteTextTypography variant="h6" gutterBottom>
                {footer.title}
              </WhiteTextTypography>
              <hr className={classes.yatayCizgi}></hr>


                {footer.description.map((item) => (
                  <Grid key = {item+"item"} align="left" variant="subtitle1" type="none"  >
                    {footer.title === "İletişim" ?
                    <WhiteTextButton href="/Iletisim">
                      {item}
                    </WhiteTextButton>:
                    footer.title ==="Hakkında" ? 
                    <WhiteTextButton href="/Hakkinda/Hakkimizda" >
                      {item}
                    </WhiteTextButton>:
                    <WhiteTextLink>
                    {item}
                  </WhiteTextLink>
                     }
                  </Grid>
                ))}
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
        </React.Fragment>
  );
}
Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
