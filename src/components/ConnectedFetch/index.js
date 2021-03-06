import React, { Component } from 'react';
import { StoreConnector } from '../../hadron-react-components';
import Fetch from '../Fetch';
import store from '../../stores';
import actions from '../../actions';

class ConnectedFetch extends Component {
  static displayName = 'ConnectedFetch';
  render() {
    return (
      <StoreConnector store={store}>
        <Fetch actions={actions} {...this.props} />
      </StoreConnector>
    );
  }
}

export default ConnectedFetch;
export { ConnectedFetch };
