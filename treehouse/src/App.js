import withRoot from './modules/withRoot';
// --- Post bootstrap -----//
import React, { Component } from 'react';
import AppBarMain from './modules/views/AppBarMain';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductCategories from './modules/views/ProductCategories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBarMain />
        <ProductHero />
        <ProductValues />
        <ProductCategories />
        <AppFooter />
      </div>
    );
  }
}

export default withRoot(App);
