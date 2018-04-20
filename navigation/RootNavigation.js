import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import PhoneVerification from '../screens/PhoneVerification';
import Countries from '../screens/Countries';
import SignUp from '../screens/SignUp';
import UploadCertificates from '../screens/UploadCertificates';

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
    },
    UploadCertificates: {
      screen: UploadCertificates
    }
  },
  {
    //TODO: can set initialRouteName and other options
    initialRouteName: 'UploadCertificates',
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
