import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

const Button = (props) => {
  let background = props.background || colors.blue;
  let size = props.size || 'md';
  let textStyles = {
    color: background === 'transparent' ? props.border || colors.blue : colors.white,
    fontSize: fontSizes[size] - 2,
    textAlign: 'center'
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: background},
        styles[size],
        props.background === 'transparent' ? {borderColor: props.border || colors.blue} : {borderColor: props.background || colors.blue},
        props.style]}
      onPress={props.onPress}>
      <Text style={textStyles}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 4
  },

  sm: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  md: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },

  lg: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },

})

export default Button
