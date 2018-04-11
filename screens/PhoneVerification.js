import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '../components/Button'

export default class PhoneVerification extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button size='lg'>Enter your phone number</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80
  }
});
