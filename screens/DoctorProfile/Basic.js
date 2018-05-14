import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import moment from 'moment'
import { colors, fontSizes, gradients } from '../../constants/styles'

import Button from '../../components/Button'

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Basic</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  card: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.separator,
    padding: 16
  }
})
