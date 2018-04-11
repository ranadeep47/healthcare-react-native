import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import PhoneVerification from '../screens/PhoneVerification';

const RootStackNavigator = StackNavigator(
  {
    PhoneVerification: {
      screen: PhoneVerification,
    },
  },
  {
    navigationOptions: () => ({

    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return <RootStackNavigator />;
  }

}
