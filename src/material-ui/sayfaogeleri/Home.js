import withRoot from '../modules/withRoot';
import PropTypes from 'prop-types';

// --- Post bootstrap -----
import React from 'react';
import { Route,Switch } from 'react-router-dom';
import ProductCategories from '../modules/views/ProductCategories';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import AppFooter from '../modules/views/AppFooter';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import AppAppBar from '../modules/views/AppAppBar';

 function Home() {
  return (
    <React.Fragment>
      <AppAppBar></AppAppBar>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);