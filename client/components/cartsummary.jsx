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
        <button className="btn bg-primary mb-2 ml-5" onClick={ () => {
          this.props.setView('catalog', { });
        }}>Go back to Catalog</button>
        <div className="container bg-dark text-light" style={{ width: '100vh' }}>
          <h1>My Cart</h1>
          {this.testNoItems()}
          {
            this.props.cart.map(item => {
              return (
                <CartSummaryItem key={item.id} item={item} />
              );
            })}
          <div className="d-flex justify-content-between">
            <div className="text-light mt-3">
              <h4>Cart Total: ${this.props.total}</h4>
            </div>
            <button className="mt-2 btn btn-lg bg-primary mb-2" onClick={ () => {
              this.props.setView('checkoutform', { });
            }}>Checkout</button>
          </div>

        </div>
      </>
    );
  }
}
