import withRoot from '../modules/withRoot';
import PropTypes from 'prop-types';

// --- Post bootstrap -----
import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './Home';
import İletisim from './İletisim';

 function Initiator() {
  return (
    <React.Fragment>
      <Switch>
          <Route
            exact
            path='/'
            render={() => (<Home></Home>)}  />
          <Route
          exact
          path='/galeri'
          render={() => (<İletisim></İletisim>)} />
           <Route
          exact
          path='/iletisim'
          render={() => (<İletisim></İletisim>)} />

        </Switch>

    </React.Fragment>
  );
}

export default withRoot(Initiator);