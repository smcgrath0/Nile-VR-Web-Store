import React from 'react';
import CartSummaryItem from './cartsummaryitem.jsx';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.testNoItems = this.testNoItems.bind(this);
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
        <div className="container bg-dark text-light mt-5 rounded p-3">
          <h1>My Cart</h1>
          {this.testNoItems()}
          <div className="cartItemsContainer">
            {
              this.props.cart.map(item => {
                return (
                  <CartSummaryItem key={item.id} item={item} addtocart={this.props.addToCart} />
                );
              })}
          </div>
          <div className="d-flex justify-content-between">
            <div className="text-light mt-3">
              <h4>Cart Total: ${this.props.total}</h4>
            </div>
            <button className="mt-2 btn btn-lg checkoutButton mb-2" onClick={ () => {
              if (this.props.cart.length !== 0) {
                this.props.setView('checkoutform', {});
              }
            }}>Checkout</button>
          </div>

        </div>
      </>
    );
  }
}
