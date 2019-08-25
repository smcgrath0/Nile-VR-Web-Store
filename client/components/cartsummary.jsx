import React from 'react';
import CartSummaryItem from './cartsummaryitem.jsx';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.calculatetotal = this.calculatetotal.bind(this);
    this.testNoItems = this.testNoItems.bind(this);
  }
  calculatetotal() {
    var total = 0;
    for (var i = 0; i < this.props.cart.length; i++) {
      for (var j = 0; j < this.props.cart[i].count; j++) {
        total += parseFloat((this.props.cart[i].price / 100).toFixed(2));
      }
    }
    return total.toFixed(2);
  }
  testNoItems() {
    if (!this.props.cart[0]) {
      return (
        <div>You have no items in your cart</div>
      );
    }
  }
  render() {
    return (
      <>
        <button className="btn bg-primary mb-2 ml-5" onClick={ () => {
          this.props.setView('catalog', { });
        }}>Go back to Catalog</button>
        <div className="container bg-dark text-light" style={{ height: '100vh', width: '100vh' }}>
          <h1>My Cart</h1>
          {this.testNoItems()}
          {
            this.props.cart.map(item => {
              return (
                <CartSummaryItem key={item.id} item={item} />
              );
            })}
          <div className="bg-light text-dark mt-3">
            <h4>Cart Total: ${this.calculatetotal()}</h4>
          </div>
        </div>
      </>
    );
  }
}
