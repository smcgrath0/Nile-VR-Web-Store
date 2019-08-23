import React from 'react';
import CartSummaryItem from './cartsummaryitem.jsx';

export default class CartSummary extends React.Component {
  render() {
    // console.log(this.props.cart);
    return (
      <>
        <div className="container bg-dark text-light" style={{ height: '100vh', width: '100vh' }}>
          My Cart
          {this.props.cart.map(item => {
            return (
              <CartSummaryItem key={item.id} item={item} />
            );
          })}
        </div>
      </>
    );
  }
}

// id={item.id} count={item.count} name={item.name} price={item.price} shortDes={item.shortDesription}
