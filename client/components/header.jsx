import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-between" style={{ backgroundColor: '#1A5D81' }}>
        <div className="d-flex" style={{ alignItems: 'center', width: '70%' }}>
          <div className="d-inline-flex home" style={{ width: '200px' }} onClick={() => {
            this.props.setView('catalog', {});
          }}>
            <div className="homeIcon" style={{ backgroundImage: 'url(../img/logo.png)', width: '55px', height: '50px', backgroundSize: '50px 50px' }}></div>
            <h1 className="homeText" style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}>ile</h1>
          </div>
          <div className="d-flex justify-content-between mt-5" >
            <h3 style={{ marginRight: '10px' }} className="titleani" onClick={() => {
              this.props.setView('systems', { type: 'systems' });
            }}>Systems</h3>
            <h3 style={{ marginRight: '10px' }} className="titleani" onClick={() => {
              this.props.setView('accessories', { type: 'accessories' });
            }}>Accessories</h3>
            <h3 className="titleani" onClick={() => {
              this.props.setView('games', { type: 'games' });
            }}>Games</h3>
          </div>
        </div>
        <div className="col-1 mr-4 d-flex justify-content-center align-contents-center position-static cartani" onClick={() => {
          this.props.setView('cart', {});
        }}>
          <div className="fa fa-5x fa-shopping-cart mt-2" style={{ height: '100px' }}></div>
          <div className="text-light position-absolute mt-4 ml-2" style={{ fontSize: '20px' }}>{this.props.totalitems}</div>
        </div>
      </div>
    );
  }
}
