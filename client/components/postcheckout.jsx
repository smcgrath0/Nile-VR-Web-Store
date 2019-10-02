import React from 'react';

export default class PostCheckout extends React.Component {
  render() {
    return (
      <>
        <div className="container bg-dark text-light mt-5 rounded" style={{ width: '100vh' }}>
          <h1>Thank You From Ordering, {this.props.view.params.item.name}</h1>
          <div className="text-center">
            <h2 style={{ color: 'orange' }}>Your order number:</h2>
            <h2 style={{ color: 'orange' }}>{Math.floor(Math.random() * 100000000)}</h2>
          </div>
          <div className="d-flex justify-content-between">
            <button className="mt-2 btn btn-lg bg-primary mb-2" onClick={() => {
              this.props.setView('catalog', {});
            }}>Back to Catalog</button>
          </div>

        </div>
      </>
    );
  }
}