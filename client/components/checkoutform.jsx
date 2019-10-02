import React from 'react';
import AppContext from '../context.js';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: '',
      errorMessage: ''
    };
    this.nameCheck = null;
    this.creditCardCheck = null;
    this.addressCheck = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
  }
  handleChange(event) {
    if (event.target.placeholder === 'name') {
      if (event.target.value.length > 1) {
        this.nameCheck = true;
      } else {
        this.nameCheck = false;
      }
      this.setState({
        name: event.target.value
      });
    } else if (event.target.placeholder === 'credit card number') {
      if (event.target.value.length === 16) {
        this.creditCardCheck = true;
      } else {
        this.creditCardCheck = false;
      }
      this.setState({
        creditCard: event.target.value
      });
    } else if (event.target.placeholder === 'address') {
      if (event.target.value.length >= 5) {
        this.addressCheck = true;
      } else {
        this.addressCheck = false;
      }
      this.setState({
        address: event.target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.addressCheck && this.creditCardCheck && this.nameCheck) {
      this.cancelOrder();
    } else if (this.nameCheck === false) {
      this.setState({ errorMessage: 'Invalid name' });
    } else if (this.creditCardCheck === false) {
      this.setState({ errorMessage: 'Invalid Credit Card' });
    } else if (this.addressCheck === false) {
      this.setState({ errorMessage: 'Invalid Address' });
    } else if (this.nameCheck === null) {
      this.setState({ errorMessage: 'Please insert name' });
    } else if (this.creditCardCheck === null) {
      this.setState({ errorMessage: 'Please insert credit card info' });
    } else if (this.addressCheck === null) {
      this.setState({ errorMessage: 'Please insert address' });
    }
  }
  cancelOrder(event) {
    this.setState({
      name: '',
      creditCard: '',
      address: ''
    });
  }
  render() {
    if (this.addressCheck) {
      var address = 'green';
    } else if (this.addressCheck === false) {
      address = 'red';
    }
    if (this.nameCheck) {
      var name = 'green';
    } else if (this.nameCheck === false) {
      name = 'red';
    }
    if (this.creditCardCheck) {
      var creditCard = 'green';
    } else if (this.creditCardCheck === false) {
      creditCard = 'red';
    }
    return (
      <div className="container checkoutpagesize mt-3">

        <h1 className="mx-auto checkoutpagesize">Checkout</h1>
        <div className="d-flex justify-content-between">
          <h3 className="mx-auto" style={{ width: '430px' }}>Order Total: ${this.props.total}</h3>

          <button onClick={this.cancelOrder} className="btn bg-danger">Cancel</button>
        </div>
        <div className="mx-auto checkoutpagesize">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input className="form-control checkoutpagesize" style={{ color: name }} type="text" name="name" value={this.state.name} required autoFocus placeholder="name" onChange={this.handleChange}/>
            </label>
            <label>
              Credit Card:
              <input className="form-control checkoutpagesize" style={{ color: creditCard }} type="tel" creditcard="creditcard" value={this.state.creditCard} required autoFocus placeholder="credit card number" onChange={this.handleChange}/>
            </label>
            <label>
              Shipping Address:
              <textarea className="form-control checkoutpagesize" style={{ color: address }} value={this.state.address} placeholder="address" required autoFocus onChange={this.handleChange}/>
            </label>
          </form>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn bg-primary mb-2" onClick={ () => {
            this.props.setView('catalog', { });
          }}>Continue Shopping</button>
          <div>
            <p style={{ color: 'red', fontSize: '1rem', textAlign: 'center', marginLeft: '5%', width: '140px' }}>{this.state.errorMessage}</p>
          </div>
          <button className="btn placeorderbutton text-white bg-dark mb-2 ml-5" onClick={ event => {
            this.handleSubmit(event);
            if (this.addressCheck && this.creditCardCheck && this.nameCheck) {
              this.context.deleteFromCart();
              this.props.placeorder({ name: this.state.name, creditcard: this.state.creditCard, address: this.state.address });
            }
          }}>Place Order</button>
        </div>

      </div>
    );
  }
}

CheckoutForm.contextType = AppContext;
