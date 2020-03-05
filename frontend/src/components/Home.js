import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Generation from './Generation';
import Dragon from './Dragon';
import AccountInfo from './AccountInfo';
import { logout } from '../actions/account';
import Header from '../components/header';

class Home extends Component {
  render() {
    return (
      <div>
        < Header />
        <Button onClick={this.props.logout} className='logout-button'>
          Log Out
        </Button>
        <h2>Dragon Stack</h2>
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