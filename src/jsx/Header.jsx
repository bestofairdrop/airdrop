import React, {Component} from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import '../css/Header.css';

class Header extends Component {
  constructor (props) {
    super (props);

    this.toggle = this.toggle.bind (this);
    this.state = {
      isOpen: false,
    };
  }
  toggle () {
    this.setState ({
      isOpen: !this.state.isOpen,
    });
  }
  render () {
    return (
      <div className="header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="https://t.me/thebestofairdrops">
            The Best of Airdrops!
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {' '}
                <NavLink href="tg://proxy?server=jam42.tk&port=443&secret=f4a6ddb7da1515810aba0a093618fc42">
                  MTProto Прокси для Telegram
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Боты для покупки / продажи криптовалюты
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="http://telegram.me/BTC_CHANGE_BOT?start=485988490ssAffiliate">
                    Bitcoin
                  </DropdownItem>
                  <DropdownItem href="http://telegram.me/ETH_CHANGE_BOT?start=485988490ssAffiliate">
                    Ethereum
                  </DropdownItem>
                  <DropdownItem href="http://telegram.me/LTC_CHANGE_BOT?start=485988490ssAffiliate">
                    Litecoin
                  </DropdownItem>
                  <DropdownItem href="http://telegram.me/BCC_CHANGE_BOT?start=485988490ssAffiliate">
                    Bitcoin Cash
                  </DropdownItem>
                  <DropdownItem href="http://telegram.me/DASH_CHANGE_BOT?start=485988490ssAffiliate">
                    DASH
                  </DropdownItem>
                  <DropdownItem href="http://telegram.me/DOGE_CHANGE_BOT?start=485988490ssAffiliate">
                    DOGE
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
