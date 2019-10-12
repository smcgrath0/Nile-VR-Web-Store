import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: '',
      menu: 'hidden',
      systems: 'transparent',
      accessories: 'transparent',
      games: 'transparent'
    };
    this.iconWidth = '50px';
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.checkTab = this.checkTab.bind(this);
  }
  componentDidMount() {
    this.checkTab(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.checkTab(nextProps);
  }
  openMenu() {
    if (this.state.hamburger === '') {
      this.setState({
        hamburger: 'open',
        menu: ''
      });
    } else {
      this.setState({
        hamburger: '',
        menu: 'hidden'
      });
    }
  }
  closeMenu() {
    this.setState({
      hamburger: '',
      menu: 'hidden'
    });
  }
  checkTab(props) {
    switch (props.view.params.type) {
      case 'systems':
        this.iconWidth = '50px';
        this.setState({
          systems: '#000067',
          accessories: 'transparent',
          games: 'transparent'
        });
        break;
      case 'accessories':
        this.iconWidth = '50px';
        this.setState({
          systems: 'transparent',
          accessories: '#000067',
          games: 'transparent'
        });
        break;
      case 'games':
        this.iconWidth = '50px';
        this.setState({
          systems: 'transparent',
          accessories: 'transparent',
          games: '#000067'
        });
        break;
      default:
        this.iconWidth = '50px';
        this.setState({
          systems: 'transparent',
          accessories: 'transparent',
          games: 'transparent'
        });
    }
  }
  render() {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#1A5D81' }}>
          <div className={'hamburgerMenuContainer'}>
            <div className={'hamburgerMenuButton ' + this.state.hamburger} onClick={this.openMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
          <div className="d-flex" style={{ alignItems: 'center' }}>
            <div className="d-inline-flex home" onClick={() => {
              this.props.setView('catalog', {});
            }}>
              <div className="homeIcon" style={{ backgroundImage: 'url(../img/logo.png)', height: '50px', width: this.iconWidth, backgroundSize: '50px 50px' }}></div>
              <h1 className="homeText" style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}>ile</h1>
            </div>
          </div>
          <div className="subjectContainer" >
            <div style={{ backgroundColor: this.state.systems }}>
              <h3 style={{ marginRight: '5px', marginLeft: '5px' }} className="titleani" onClick={() => {
                this.props.setView('systems', { type: 'systems' });
              }}>Systems</h3>
            </div>
            <div style={{ backgroundColor: this.state.accessories }}>
              <h3 style={{ marginRight: '5px', marginLeft: '5px' }} className="titleani" onClick={() => {
                this.props.setView('accessories', { type: 'accessories' });
              }}>Accessories</h3></div>
            <div style={{ backgroundColor: this.state.games }}>
              <h3 style={{ marginRight: '5px', marginLeft: '5px' }} className="titleani" onClick={() => {
                this.props.setView('games', { type: 'games' });
              }}>Games</h3>
            </div>
          </div>
          <div className="col-1 d-flex justify-content-center align-contents-center position-static cartani" onClick={() => {
            this.props.setView('cart', {});
          }}>
            <div className="fa fa-5x fa-shopping-cart mt-2" style={{ height: '100px' }}></div>
            <div className="text-light position-absolute mt-4 ml-2" style={{ fontSize: '20px' }}>{this.props.totalitems}</div>
          </div>
        </div>
        <div className={'menu ' + this.state.menu}>
          <div className={'systems menuItems ' + this.state.menu} onClick={() => {
            this.closeMenu();
            this.props.setView('systems', { type: 'systems' });
          }}> SYSTEMS</div>
          <div className={'accessories menuItems ' + this.state.menu} onClick={ () => {
            this.closeMenu();
            this.props.setView('accessories', { type: 'accessories' });
          }}>ACCESSORIES</div>
          <div className={'games menuItems ' + this.state.menu} onClick={ () => {
            this.closeMenu();
            this.props.setView('games', { type: 'games' });
          }}>GAMES</div>
        </div>
      </>
    );
  }
}
