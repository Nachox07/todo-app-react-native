import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import NavigationStack from './navigationStack';

const addListener = createReduxBoundAddListener('root');

class AppNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigationStack
        navigation={
          addNavigationHelpers({
              dispatch,
              state: navigationState,
              addListener,
            })
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  navigationState: state.navigationState,
});

export default connect(mapStateToProps)(AppNavigation);
