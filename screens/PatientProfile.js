import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';


import { colors, fontSizes, gradients } from '../constants/styles'

export default class PatientProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>Hello World</Text>
    );
  }
}

/*

*/

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
