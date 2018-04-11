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
    color: background === 'transparent' ? colors.blue : colors.white,
    fontSize: fontSizes[size]
  }

  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: background}, styles[size]]} onPress={props.onPress}>
      <Text style={textStyles}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 4
  },

  sm: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  md: {
    paddingHorizontal: 30,
    paddingVertical: 24,    
  },

  lg: {
    paddingHorizontal: 40,
    paddingVertical: 28,
    marginHorizontal: 40
  },

})

export default Button
