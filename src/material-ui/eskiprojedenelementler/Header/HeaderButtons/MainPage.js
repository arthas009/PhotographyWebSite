import React from 'react';
//import { useState } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Box, Typography, ThemeProvider, Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
import FeaturedPost from '../../Components/FeaturedPost';
import SwipeableContent from '../../Components/SwipeableContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import MetaTags from 'react-meta-tags';
//import Helmet from "react-helmet";
//import { Link } from 'react-router-dom';
//import { Helmet } from 'react-helmet-async'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(10),
    justifyContent: "space-between",
  },
  heaederGrid:
  {
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  media: {
    height: 100,
    width: '100%',
  },
  root1: {
    maxWidth: '100%',
    backgroundColor: '#fafafa',
    marginBottom: theme.spacing(2),
    align: 'left',
  },
  teaserPost: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    //telefonlar için
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      height: '9vh',
      align: 'left',
    },
    //laptoplar için
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
      height: '15vh',
    },
    //büyük ekranlar için
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6),
      height: '22vh',
    },
    bosluk: {

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
  }
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
const featuredPosts = [
  {
    title: 'Okçuluğun Kökeni',
    date: '10.03.2020',
    description: "Okçuluk. Kökeni insanoğlunun avcılık günlerine dayanan, oku bir yay aracılığıyla hedefe göndermeyi amaçlayan spor dalı Okçuluk ilk kez 1904 Yaz Olimpiyatlarında olimpik programa alınmış, 1972 den beri aralıksız olarak programlardayer almaktadır. Bu branşta ilk dönemlerde Fransa, Belçika ve Büyük Britanya söz sahibiyken, daha sonraki dönemlerde ABD,Rusya, İskandinav ülkeleri, İtalya ve Kore bu ülkeleri izlemiştir. 1931'de kurulan ve hâlen 140 ülkenin üye olduğu UluslararasıOkçuluk Federasyonu (FITA - Fédération Internationale de Tir a l'Arc) okçuluk dalında en büyük otoritedir.Ekipman ve kurallarYaylar (yaygın kullanılan türleri: Olimpik yay,Makaralı yay), fiber, ahşap, karbon veya çelikten imal edilir.Yayın esnek maddesi solar kauçuktan yapılır. Buna mirsin adı verilir. Bilinen ilk kompozit (çok parçalı) katı yay Hunlartarafından yapılmıştır. Oklar ise fiber, karbon, alüminyum tahta veya çelikten olabilir. Oklar kompozit olarak birkaç malzemeninbirlikte kullanılması ile de yapılabilir. Okun arkasında oku yönlendiren 3 tane tüy bulunur. Oklar 60 ila 71 cm uzunluğunda,ağırlıkları ise 20 ila 28 gram arasında olmalıdır. Hedef, çember çizgilerle beş renge boyanır. Bu renkler merkezden dışa doğrusırasıyla sarı, kırmızı, mavi, siyah ve beyazdır. Her renk şerit de ikiye ayrılır. Böylece hedef içten dışa doğru 10'dan 1'einen sayılarla numaralanır. 122 cm çapındaki hedef 70, 60,20 metre atışlarında, 80 cm çapındaki hedef ise 50 ve 30 metreatışlarında kullanılır. Salon yarışlarında; 25 metre uzaklıktaki hedefin çapı 60 cm, 18 metre uzaklıktaki hedefin çapı ise40 cm olmalıdır.Her ok hedefte vurduğu yere göre puan alır. Bir ok halkaları ayıran çizginin tam üzerine saplanmışsa daha yüksek olan puanı alır.Uluslararası yarışmalarda erkekler iki turda yüz kırk dörder ok atarlar. Her turda okçu 70, 50 ve 30 metreden hedefe üçer düzine okatar. Kadınlarda 4 ayrı mesafeden üçer metredir. Okçular her seferinde sayılarını okumadan önce 6 atış yaparlar. 50 ve 30 metredendaha küçük hedefe yaptıkları atışlarda ise 3 atışta bir sayı okunur. Bir yarışmada her sporcu toplam 288 atış yapar.Hedefin çapı okatış uzaklığına göre belirlenmiştir. Yarışmanın birincisi toplam puana göre belirlenir. Kol ve sırt kaslarını , göz koordinasyonunugeliştiren bir spordur",

    image: './Images/OkculukKoken.jpg',
    imageText: 'gazi okçuluk',
    name: "OkculukHakkinda",
    buttonText: "Devamını Okumak için ..."
  },
  {
    title: 'Fotoğraf İçerikleri',
    date: '10.03.2020',
    description:
      'Galerimizi Ziyaret etmek ister misiniz ?',
    image: 'https://source.unsplash.com/random',
    imageText: 'gazi okçuluk',
    name: "Galeri/Sporcularimiz",
    buttonText: "Galeriyi Ziyaret Et"
  },
  {
    title: 'Güncel Eğitimlerimiz',
    date: '10.03.2020',
    description:
      'Yay Eğitimi, Okçuluk ve Teknik Beceri için farklı günlerde/farklı saatlerde mevcut olan kurslarımıza göz atmak için:',
    image: "./Images/AnasayfaKursFotosu.jpg",
    imageText: 'gazi okçuluk',
    name: "Hakkinda/Kurslarimiz",
    buttonText: "Kusları Ziyaret Et"
  },
];
export default function MainPage(props) {
  const classes = useStyles();
  const { anasayfafotolar } = props;
  console.log(anasayfafotolar);
  return (
    <React.Fragment >
     
      <Grid className={classes.bosluk}>

        <Grid className={classes.root1}
        >
          <Card className={classes.root1}>
            <CardActionArea >
              <CardMedia
                className={classes.teaserPost} align='center'
                image="./Images/GaziTeaser.jpg"

              />

            </CardActionArea>
          </Card>
        </Grid>



        <SwipeableContent anasayfafotolar={anasayfafotolar}></SwipeableContent>

        <Container>
          <Grid className={classes.heaederGrid}>
            <Box className={classes.pageHeader}>
              <ThemeProvider theme={themeTypography}>
                <h1> <title variant="overline" color="textPrimary"> GAZİ OKÇULUK</title></h1>
              </ThemeProvider>
             
            </Box>
            <hr />
          </Grid>

          <Grid container className={classes.mainGrid}>

            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} fromWhere={"mainPage"} />
            ))}
          </Grid>

          <div className={classes.root}></div>


        </Container>
      </Grid>
    </React.Fragment>
  );



}
