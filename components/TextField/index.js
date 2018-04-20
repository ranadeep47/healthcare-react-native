import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

const TextField = (props) => {
  return (
    <View style={[styles['container'], props.style]}>
      <TextInput
        underlineColorAndroid={'transparent'}
        style={styles['input']}
        placeholder={props.placeholder || ''}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.dark.background,
  },
  input: {
    padding: 8,
    height: 50
  }
})

export default TextField
