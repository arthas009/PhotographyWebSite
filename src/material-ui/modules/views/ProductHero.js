import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Carousel from 'react-material-ui-carousel'

import ProductHeroLayout from './ProductHeroLayout';

const mainFeaturedPost = [{
  title: 'Hedefi olmayan sporcu, rehberi olmayan gezgin gibidir',
  description:
    "Kendine bir hedef belirlemek istiyorsan",
  image: 'https://miro.medium.com/max/3000/1*bHf1bqIQEJmtRDnuxVPdfg.jpeg',
  btnName: "İletişim",
  btnUrl: "Iletisim"
},
{
  title: 'Atılan her ok, hedefe değmelidir!',
  description:
    "",
  image: 'https://miro.medium.com/max/3000/1*bHf1bqIQEJmtRDnuxVPdfg.jpeg',
  btnName: "Okçuluk Hakkında",
  btnUrl: "OkculukHakkinda"
},
{
  title: 'En son haberleri kaçırmayın!',
  description:
    "",
  image: 'https://miro.medium.com/max/3000/1*bHf1bqIQEJmtRDnuxVPdfg.jpeg',
  btnName: "Haberler",
  btnUrl: "Haberler"
},
];
const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <Carousel autoPlay={true} navButtonsAlwaysInvisible={true}>

      {
        mainFeaturedPost.map((item, i) =>



          <ProductHeroLayout backgroundClassName = {item}>
           

            <Typography color="inherit" align="center" variant="h2" marked="center">
              EBA FOTOĞRAFÇILIĞA HOŞGELDİNİZ
      </Typography>
            <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
              Her pazar günü yapılan %30 indirimden yararlanmak için iletişime geçin
      </Typography>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              className={classes.button}
              component="a"
              href="/premium-themes/onepirate/sign-up/"
            >
              İletişim
      </Button>
            <Typography variant="body2" color="inherit" className={classes.more}>
              Deneyimi Keşfet
      </Typography>

          </ProductHeroLayout>
      
        )}
    </Carousel>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
