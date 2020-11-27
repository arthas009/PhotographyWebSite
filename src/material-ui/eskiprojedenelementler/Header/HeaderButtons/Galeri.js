import React from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, Typography, Box } from '@material-ui/core';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PhotoGalleryComponent from '../../Components/PhotoGalleryComponent';
import VideoGalleryComponent from '../../Components/VideoGalleryComponent';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
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
  kategoriButonları: {
    margin: theme.spacing(.2),
  },
}));

const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Klübü / Galeri',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  btnName: '',
  btnUrl: '',
}
];
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
const KlübümüzImageList = [
  {
    id: 1,
    src: "./Images/Klubumuz1.jpg",
    title: "Yarışma afişi",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 2,
    src: "https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 3,
    src: "https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 4,
    src: "https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 5,
    src: "https://n11scdn.akamaized.net/a1/450/ev-yasam/hediyelik-esya/toplu-madalya-toren-madalyalari-basari-madalyasi-odul-madalya__1257335020123086.jpg",
    title: "2. yarışma madalyası",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 6,
    src: "https://www.denizpostasi.com/images/stories/2019/Eyl%C3%BCl/AW795159_01.jpg",
    title: "3. Yarışma madalya sahipleri",
    description: "bar",
    author: "Gazi Okçuluk"
  },

];



export default function Galeri(props) {
  const classes = useStyles();
  // Category to show, images or videos
  const [category, setCategory] = React.useState("Fotoğraflar");
  const [images, setImages] = React.useState(null);
  const [videos, setVideos] = React.useState(null);


  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  }
  const { section } = props;

  let name = "";
  let objectToView = {};
  let videosToView = {};

  let b = {};
  let c = {};
  async function getImageNames() {
    try {
      if (section === "Klubumuz") {
        let [images] = await Promise.all([
          fetch("http://gaziokculukresmi.com/kulupfotolarinigetir/"),
        ]);

        name = "Klübümüz";
        b = await images.json();

        let [videos] = await Promise.all([
          fetch("http://gaziokculukresmi.com/kulupvideolarinigetir/")
        ]);

        c = await videos.json();
      }
      else if (section === "Madalyalar") {
        let [images] = await Promise.all([
          fetch("http://gaziokculukresmi.com/madalyalarfotolarinigetir/"),

        ]);
        name = "Madalyalar";
        b = await images.json();

        let [videos] = await Promise.all([
          fetch("http://gaziokculukresmi.com/madalyalarvideolarinigetir/")
        ]);

        c = await videos.json();

      }
      else if (section === "Sporcularimiz") {
        let [images] = await Promise.all([
          fetch("http://gaziokculukresmi.com/sporcufotolarinigetir/"),
        ]);
        name = "Sporcularimiz";
        b = await images.json();
        let [videos] = await Promise.all([
          fetch("http://gaziokculukresmi.com/sporcuvideolarinigetir/")
        ]);
        c = await videos.json();

      }
      setVideos(c);
      setImages(b);
    }
    catch (err) {
      console.log(err);
    };
  }

  useEffect(() => {
    getImageNames();
  }, [section]);

  objectToView = images;
  videosToView = videos;
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
                <Typography variant="overline" color="textPrimary">{name}</Typography>
              </ThemeProvider>
            </Box>

            <hr className={classes.yatayCizgi} />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Button onClick={() => changeCategory('Fotoğraflar')} className={classes.kategoriButonları} variant="contained" color="primary">
              Fotoğraflar
            </Button>
            <Button onClick={() => changeCategory('Videolar')} className={classes.kategoriButonları} variant="contained" color="primary">
              Videolar
            </Button>
          </Grid>

          <Grid className={classes.mainGrid}>
            {category === "Fotoğraflar" ?
               objectToView === null ? "Fotoğraflar Yüklenirken Bir Hata Meydana Geldi":
              <PhotoGalleryComponent ImageList={objectToView} /> :
               videosToView === null ? "Videolar Yüklenirken Bir Hata Meydana Geldi":
              <VideoGalleryComponent VideoList={videosToView} />}
          </Grid>
        </Container>
      </React.Fragment>
    );
  
}
