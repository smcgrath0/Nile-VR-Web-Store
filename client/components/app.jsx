import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { merge, slideInDown, slideInLeft, slideOutUp, slideOutRight } from 'react-animations';
import AppContext from '../context';
import Header from './header';
import ProductList from './product-list';
import Footer from './footer';
import ProductDetails from './product-details';
import CartSummary from './cartsummary.jsx';
import CheckoutForm from './checkoutform.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.calculateItemCount = this.calculateItemCount.bind(this);
  }
  setView(name, params) {
    var currentView = {};
    currentView = { name, params };
    this.setState({ view: currentView });
  }
  getCartItems() {
    fetch('/api/cart.php', {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(cart => {
        this.setState({ cart });
      });
  }
  addToCart(id) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify({ 'productID': parseInt(id) })
    })
      .then(response => {
        return response.json();
      })
      .then(newitem => {
        var cart = this.state.cart.map(item => {
          if (item.productID === newitem.productID) {
            item.count = parseInt(item.count) + 1;
            return item;
          } else {
            return item;
          }
        });
        this.setState({ cart });
      });
  }
  placeOrder(personal) {
    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(personal)
    })
      .then(response => {
        return response.json();
      })
      .then(item => {
        var cart = [];
        this.setState({ cart });
        this.setView('catalog', {});
      });
  }
  calculateTotal() {
    var total = 0;
    for (var i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart === []) {
        return total.toFixed(2);
      }
      for (var j = 0; j < this.state.cart[i].count; j++) {
        total += parseFloat((this.state.cart[i].price / 100).toFixed(2));
      }
    }
    return total.toFixed(2);
  }
  componentDidMount() {
    this.getCartItems();
  }
  calculateItemCount() {
    var totalitems = 0;
    for (var i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart === []) {
        return totalitems;
      }
      totalitems += parseInt(this.state.cart[i].count);
    }
    return totalitems;
  }
  render() {
    const appContext = {
      addToCart: this.addToCart
    };

    if (this.state.view.name === 'catalog') {
      return (
        <div style={{ width: '98.9%' }}>
          <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()}/>
          <div className="pl-5"style={{ width: '90vw' }}>
            <ProductList setView={this.setView} />
          </div>
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div style={{ width: '98.9%' }}>
          <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()}/>
          <ProductDetails view={this.state.view} setView={this.setView} addtocart={this.addToCart} />
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      // const slideInAnimation = merge(slideInDown, slideInLeft);
      // const slideInAnimation = styled.div`animation: 1s ${keyframes`${slideInDown}`}`;
      return (
        <AppContext.Provider value={appContext} >
          <div style = {{ width: '98.9%' }}>
            <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()}/>
            <CartSummary view={this.state.view} setView={this.setView} cart={this.state.cart} total={this.calculateTotal()}/>
            <Footer />
          </div>
        </AppContext.Provider>
      );
    } else if (this.state.view.name === 'checkoutform') {
      return (
        <div style={{ width: '98.9%' }}>
          <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()}/>
          <CheckoutForm view={this.state.view} setView={this.setView} placeorder={this.placeOrder} cart={this.state.cart} total={this.calculateTotal()}/>
          <Footer />
        </div>
      );
    }
  }
}
