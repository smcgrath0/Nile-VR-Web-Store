import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="container bg-secondary" style={{ width: '250px' }}>
        <img src="./img/StockPhoto.png" style={{ height: '200px', width: '225px' }}></img>
        <div className= "bg-danger">
          <h3 >Product Name</h3>
          <h5>$0.00</h5>
          <p>Short description sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    );
  }
}
