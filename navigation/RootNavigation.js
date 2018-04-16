import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import PhoneVerification from '../screens/PhoneVerification';
import Countries from '../screens/Countries';
import SignUp from '../screens/SignUp';

const RootStackNavigator = StackNavigator(
  {
    PhoneVerification: {
      screen: PhoneVerification,
    },
    Countries: {
      screen: Countries
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    //TODO: can set initialRouteName and other options
    initialRouteName: 'SignUp',
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
