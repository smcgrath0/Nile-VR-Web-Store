import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }
  setView(name, params) {
    var currentView = {};
    currentView = { name, params };
    this.setState({ view: currentView });
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <>
          <Header />
          <ProductList setView={this.setView}/>
        </>
      );
    } else if (this.state.view.name === 'details') {
      return < ProductDetails view={this.state.view}/>;
    }

  }
}
