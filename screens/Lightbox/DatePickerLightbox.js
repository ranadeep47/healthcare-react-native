import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from 'react-native';
import * as Progress from 'react-native-progress';

import { colors, fontSizes } from '../../constants/styles'
import Lightbox from './BaseLightbox'

import DatePicker from '../../components/DatePicker'
import Link from '../../components/Link'

export default class DatePickerLightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  closeModal = ()=> {
    this.setState({visible: false})
  }

  render() {
    return (
      <Lightbox horizontal={0.75} vertical={0.76} align="center" visible={this.state.visible} style={styles.container}>
        <DatePicker style={styles.datePicker} />
        <View style={styles.buttons}>
          <Link onPress={this.closeModal} style={styles.button} textStyle={styles.buttonText}>CANCEL</Link>
          <Link onPress={() => {}} style={styles.button} textStyle={styles.buttonText}>OK</Link>
        </View>
      </Lightbox>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  datePicker: {
    flex: 7
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8
  },
  button: {
    marginHorizontal: 8
  },
  buttonText: {
    letterSpacing: 1,
    fontFamily: 'circularstd-medium',
    fontSize: fontSizes.sm,
  }
})
