import React from 'react';

export default class PostCheckout extends React.Component {
  render() {
    return (
      <>
        <div className="container text-light mt-5 rounded postCheckoutContainer" >
          <h1 className="text-center">Thank You For Ordering, <span style={{ fontWeight: 'bold' }}>{this.props.view.params.item.name}</span></h1>
          <div className="text-center">
            <h2 style={{ color: '#9C9C9C' }}>Your order number:</h2>
            <h2 style={{ color: '#ACACAC', fontWeight: 'bold' }}>{Math.floor(Math.random() * 100000000)}</h2>
          </div>
          <div className="d-flex justify-content-between">
            <button className="mt-2 btn btn-lg btcB mb-2" onClick={() => {
              this.props.setView('catalog', {});
            }}><i className="fas fa-arrow-left"> </i> Back to Catalog</button>
          </div>

        </div>
      </>
    );
  }
}
