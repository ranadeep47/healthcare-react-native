import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';


import { colors, fontSizes, gradients } from '../../constants/styles'

export default class UpcomingAppointments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles['container']}>
        <Text>Hello 1</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  }
})
