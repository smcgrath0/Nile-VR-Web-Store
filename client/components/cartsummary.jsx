import React from 'react';
import CartSummaryItem from './cartsummaryitem.jsx';
import AppContext from '../context.js';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'none',
      currentID: 0,
      currentProductName: ''
    };
    this.testNoItems = this.testNoItems.bind(this);
    this.displayDelete = this.displayDelete.bind(this);
  }
  testNoItems() {
    if (!this.props.cart[0]) {
      return (
        <div>You have no items in your cart</div>
      );
    }
  }
  displayDelete(id, name) {
    this.setState({ modal: 'flex', currentID: id, currentProductName: name });
  }
  render() {
    if (this.props.cart.length === 0) {
      return (
        <>
          <div className="container bg-dark text-light mt-5 rounded p-3">
            <h1>My Cart</h1>
            {this.testNoItems()}
            <div className="cartItemsContainer">
              {
                this.props.cart.map(item => {
                  return (
                    <CartSummaryItem key={item.id} item={item} addtocart={this.props.addToCart} displayDelete={this.displayDelete}/>
                  );
                })}
            </div>
            <div className="d-flex justify-content-between">
              <div className="text-light mt-3">
                <h4>Cart Total: ${this.props.total}</h4>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="container bg-dark text-light mt-5 rounded p-3">
          <h1>My Cart</h1>
          {this.testNoItems()}
          <div className="cartItemsContainer">
            {
              this.props.cart.map(item => {
                return (
                  <CartSummaryItem key={item.id} item={item} addtocart={this.props.addToCart} displayDelete={this.displayDelete}/>
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
        <div className="startScreen" style={{ display: this.state.modal }}>
          <div className="startPopUp">
            <h2 className="startPopUpText">I want to delete {this.state.currentProductName} from my cart</h2>
            <button id="xCartButton" onClick={() => {
              this.context.deleteFromCart(this.state.currentID);
              this.setState({ modal: 'none' });
            }}>I AGREE</button>
          </div>
        </div>
      </>
    );
  }
}

CartSummary.contextType = AppContext;
