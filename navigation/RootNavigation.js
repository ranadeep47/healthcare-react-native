import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import PhoneVerification from '../screens/PhoneVerification';
import Countries from '../screens/Countries';

const RootStackNavigator = StackNavigator(
  {
    PhoneVerification: {
      screen: PhoneVerification,
    },
    Countries: {
      screen: Countries
    }
  },
  {
    //TODO: can set initialRouteName and other options
    initialRouteName: 'Countries',
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
