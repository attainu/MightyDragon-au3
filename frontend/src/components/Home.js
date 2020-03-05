import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Generation from './Generation';
import Dragon from './Dragon';
import Header from './header';
import AccountInfo from './AccountInfo';
import { logout } from '../actions/account';

class Home extends Component {
  render() {
    return (
      <div>
      <Header />
        <Button onClick={this.props.logout} className='logout-button'>
          Log Out
        </Button>
        <h2>Mighty Dragon</h2>
        <Generation />
        <Dragon />
        <hr />
        <AccountInfo />
        <hr />
      </div>
    );
  }
}

export default connect(null, { logout })(Home);