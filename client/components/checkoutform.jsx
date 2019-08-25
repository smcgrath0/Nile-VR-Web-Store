import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
  }
  handleChange(event) {
    if (event.target.placeholder === 'name') {
      this.setState({
        name: event.target.value
      });
    } else if (event.target.placeholder === 'credit card number') {
      this.setState({
        creditCard: event.target.value
      });
    } else if (event.target.placeholder === 'address') {
      this.setState({
        address: event.target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.cancelStudent();
  }
  cancelOrder(event) {
    this.setState({
      name: '',
      creditCard: '',
      address: ''
    });
  }
  render() {
    return (
      <div className="container bg-warning" style={{ height: '500px' }}>

        <h1>Checkout</h1>
        <h3>Order Total: ${this.props.total}</h3>
        <div className="mx-auto" style={{ width: '300px' }}>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input className="form-control" type="text" name="name" value={this.state.name} required autoFocus placeholder="name" onChange={this.handleChange}/>
            </label>
            <label>
              Credit Card:
              <input className="form-control" type="tel" creditcard="creditcard" value={this.state.creditCard} required autoFocus placeholder="credit card number" onChange={this.handleChange}/>
            </label>
            <label>
              Home Address:
              <textarea className="form-control" value={this.state.address} placeholder="address" required autoFocus onChange={this.handleChange}/>
            </label>
          </form>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn bg-primary mb-2 ml-5" onClick={ () => {
            this.props.setView('catalog', { });
          }}>Go back to Catalog</button>
          <button className="btn bg-info mb-2 ml-5" onClick={ () => {
            this.props.setView('catalog', { });
          }}>Comfirm Checkout</button>
          <div className="">
            <button onClick={this.cancelOrder} className="btn bg-danger">Cancel</button>
          </div>
        </div>

      </div>
    );
  }
}
