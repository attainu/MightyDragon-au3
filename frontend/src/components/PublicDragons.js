import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPublicDragons } from '../actions/publicDragons';
import { fetchAccountDragons } from '../actions/accountDragons';
import PublicDragonRow from './PublicDragonRow';
import Header from '../components/header';

class PublicDragons extends Component {
  componentDidMount() {
    this.props.fetchPublicDragons();
    this.props.fetchAccountDragons();
  }

  render() {
    return (
      <>
      <Header />
      <div>
        <h3>Public Dragons</h3>
        {
          this.props.publicDragons.dragons.map(dragon => {
            return (
              <div key={dragon.dragonId}>
                <PublicDragonRow dragon={dragon} />
                <hr />
              </div>
            )
          })
        }
      </div>
      </>
    )
  }
}

export default connect(
  ({ publicDragons }) => ({ publicDragons }),
  { fetchPublicDragons, fetchAccountDragons }
)(PublicDragons);