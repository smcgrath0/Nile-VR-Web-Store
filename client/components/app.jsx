import React from 'react';
import AppContext from '../context';
import Header from './header';
import ProductList from './product-list';
import Footer from './footer';
import ProductDetails from './product-details';
import CartSummary from './cartsummary.jsx';
import CheckoutForm from './checkoutform.jsx';
import PostCheckout from './postcheckout';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      cartID: 0,
      type: ''
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
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
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(cart => {
        if (cart[0]) {
          var cartID = cart[0].cartID;
        }
        this.setState({ cart, cartID });
      });
  }
  addToCart(id) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify({ 'productID': parseInt(id), cartID: this.state.cartID }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(newitem => {
        var counter = 0;
        var cart = this.state.cart.map(item => {
          if (item.productID === newitem.productID) {
            counter++;
            item.count = parseInt(item.count) + 1;
            return item;
          } else {
            return item;
          }
        });
        if (!counter) {
          cart.push(newitem);
        }
        this.setState({ cart, cartID: newitem.cartID });
      });
  }
  deleteFromCart(id) {
    fetch('/api/cart.php', {
      method: 'DELETE',
      body: JSON.stringify({ 'productID': parseInt(id) })
    })
      .then(response => {
        return response.json();
      })
      .then(newitem => {
        var cart = this.state.cart.filter(item => {
          if (item.productID === newitem.productID && newitem.count > 0) {
            return newitem;
          } else if (item.productID !== newitem.productID) {
            return item;
          }
        });
        cart = cart.map(item => {
          if (item.productID === newitem.productID) {
            return newitem;
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
        this.setView('postcheckout', { item });
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
      addToCart: this.addToCart,
      deleteFromCart: this.deleteFromCart
    };

    if (this.state.view.name === 'catalog') {
      return (
        <div style={{ backgroundColor: '#CCCCCC' }}>
          <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()}/>
          <img style={{ width: '100%', marginBottom: '10px' }} src={'../img/landingpagebg1.png'}></img>
          <div style={{ width: '90vw', paddingLeft: '10vw' }}>
            <ProductList view={{ params: { type: 'catalog' } }} type={this.state.view.name} setView={this.setView} />
          </div>
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div style={{ width: '98.9%' }} >
          <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()}/>
          <ProductDetails view={this.state.view} setView={this.setView} addtocart={this.addToCart} />
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <AppContext.Provider value={appContext} >
          <div style = {{ width: '98.9%' }}>
            <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()}/>

            <CartSummary view={this.state.view} setView={this.setView} cart={this.state.cart} total={this.calculateTotal()} />
            <div style={{ marginTop: '100px' }}>
              <Footer />
            </div>
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
    } else if (this.state.view.name === 'systems') {
      return (
        <div>
          <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()} />
          <img style={{ width: '100%', marginBottom: '10px' }} src={'../img/systemsbg3.png'}></img>
          <div style={{ width: '90vw', paddingLeft: '10vw' }}>
            <ProductList view={this.state.view} type={this.state.view.name} setView={this.setView} />
          </div>
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'accessories') {
      return (
        <div>
          <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()} />
          <img style={{ width: '100%', marginBottom: '10px' }} src={'../img/accessoriesbg2.jpg'}></img>
          <div style={{ width: '90vw', paddingLeft: '10vw' }}>
            <ProductList view={this.state.view} type={this.state.view.name} setView={this.setView} />
          </div>
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'games') {
      return (
        <div>
          <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()} />
          <img style={{ width: '100%', marginBottom: '10px' }} src={'../img/gamesbg2.png'}></img>
          <div style={{ width: '90vw', paddingLeft: '10vw' }}>
            <ProductList view={this.state.view} type={this.state.view.name} setView={this.setView} />
          </div>
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'postcheckout') {
      return (
        <div>
          <Header cart={this.state.cart} setView={this.setView} totalitems={this.calculateItemCount()} />
          <div style={{ height: '80vh' }}>
            <PostCheckout view={this.state.view} setView={this.setView} />
          </div>
          <Footer />
        </div>
      );
    }
  }
}
