import withRoot from './modules/withRoot';
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store/index';

import AppBarMain from './modules/views/AppBarMain';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductCategories from './modules/views/ProductCategories';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppBarMain />
          <ProductHero />
          <ProductValues />
          <ProductCategories />
          <AppFooter />
        </div>
      </Provider>
    );
  }
}

export default withRoot(App);
