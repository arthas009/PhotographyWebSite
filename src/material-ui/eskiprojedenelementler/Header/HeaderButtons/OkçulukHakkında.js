import React from 'react';
import {useEffect} from 'react';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box, ThemeProvider } from '@material-ui/core';
import FeaturedPost from '../../Components/FeaturedPost';
import MainFeaturedPost from '../../Components/MainFeaturedPost';

const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Klübü / Okçuluk Hakkında',
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
    title: 'Featured post',
    date: 'Nov 12',
    description: "Okçuluk. Kökeni insanoğlunun avcılık günlerine dayanan, oku bir yay aracılığıyla hedefe göndermeyi amaçlayan spor dalı Okçuluk ilk kez 1904 Yaz Olimpiyatlarında olimpik programa alınmış, 1972 den beri aralıksız olarak programlardayer almaktadır. Bu branşta ilk dönemlerde Fransa, Belçika ve Büyük Britanya söz sahibiyken, daha sonraki dönemlerde ABD,Rusya, İskandinav ülkeleri, İtalya ve Kore bu ülkeleri izlemiştir. 1931'de kurulan ve hâlen 140 ülkenin üye olduğu UluslararasıOkçuluk Federasyonu (FITA - Fédération Internationale de Tir a l'Arc) okçuluk dalında en büyük otoritedir.Ekipman ve kurallarYaylar (yaygın kullanılan türleri: Olimpik yay,Makaralı yay), fiber, ahşap, karbon veya çelikten imal edilir.Yayın esnek maddesi solar kauçuktan yapılır. Buna mirsin adı verilir. Bilinen ilk kompozit (çok parçalı) katı yay Hunlartarafından yapılmıştır. Oklar ise fiber, karbon, alüminyum tahta veya çelikten olabilir. Oklar kompozit olarak birkaç malzemeninbirlikte kullanılması ile de yapılabilir. Okun arkasında oku yönlendiren 3 tane tüy bulunur. Oklar 60 ila 71 cm uzunluğunda,ağırlıkları ise 20 ila 28 gram arasında olmalıdır. Hedef, çember çizgilerle beş renge boyanır. Bu renkler merkezden dışa doğrusırasıyla sarı, kırmızı, mavi, siyah ve beyazdır. Her renk şerit de ikiye ayrılır. Böylece hedef içten dışa doğru 10'dan 1'einen sayılarla numaralanır. 122 cm çapındaki hedef 70, 60,20 metre atışlarında, 80 cm çapındaki hedef ise 50 ve 30 metreatışlarında kullanılır. Salon yarışlarında; 25 metre uzaklıktaki hedefin çapı 60 cm, 18 metre uzaklıktaki hedefin çapı ise40 cm olmalıdır.Her ok hedefte vurduğu yere göre puan alır. Bir ok halkaları ayıran çizginin tam üzerine saplanmışsa daha yüksek olan puanı alır.Uluslararası yarışmalarda erkekler iki turda yüz kırk dörder ok atarlar. Her turda okçu 70, 50 ve 30 metreden hedefe üçer düzine okatar. Kadınlarda 4 ayrı mesafeden üçer metredir. Okçular her seferinde sayılarını okumadan önce 6 atış yaparlar. 50 ve 30 metredendaha küçük hedefe yaptıkları atışlarda ise 3 atışta bir sayı okunur. Bir yarışmada her sporcu toplam 288 atış yapar.Hedefin çapı okatış uzaklığına göre belirlenmiştir. Yarışmanın birincisi toplam puana göre belirlenir. Kol ve sırt kaslarını , göz koordinasyonunugeliştiren bir spordur",
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];
export default function OkçulukHakkında() {
  const classes = useStyles();
  const [okculukHakkinda, setOkculukHakkinda] = React.useState(null);

  async function getOkculukHakkinda() {
    try {
      let [images] = await Promise.all([
        fetch("http://gaziokculukresmi.com/okculukhakkindagetir"),
      ]);
      const b = await images.json();
      setOkculukHakkinda(b);
    }
    catch (err) {
      console.log(err);
    };
  }

  useEffect(() => {
    getOkculukHakkinda();
  }, []);

  if(okculukHakkinda !== null)
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
             
              <h1> <Typography variant="overline" color="textPrimary">Okçuluk Hakkında</Typography></h1>
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

            {okculukHakkinda.map((post) => (
              <FeaturedPost key={post.title} post={post} fromWhere="OkculukHakkinda" />
            ))}


          </Grid>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
  else
  return (<React.Fragment></React.Fragment>);
}
