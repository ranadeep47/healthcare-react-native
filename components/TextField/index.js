import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

const TextField = (props) => {
  let label = null;
  if(props.label) label = (<Text style={styles.label}>{props.label}</Text>);
  return (
    <View style={[styles['container'], props.style]}>
      {label}
      <TextInput
        underlineColorAndroid={'transparent'}
        style={[styles['input'], props.inputStyle]}
        placeholder={props.placeholder || ''}
        placeholderTextColor={props.placeholderTextColor || colors.lightText}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.dark.background,
    padding: 8,
    height: 50
  },
  label: {
    fontSize: 13,
    color: colors.text,
    marginVertical: 4
  }
})

export default TextField
