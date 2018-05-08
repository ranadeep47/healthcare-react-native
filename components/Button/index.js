import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import * as Progress from 'react-native-progress';
import { colors, fontSizes } from '../../constants/styles'

const Button = (props) => {
  let background = props.background || colors.blue;
  let size = props.size || 'md';
  let textStyles = {
    color: background === 'transparent' ? props.border || colors.blue : colors.white,
    fontSize: fontSizes[size] - 2,
    textAlign: 'center'
  }

  let loading = props.isLoading ? (
    <View style={styles.spinner}>
      <Progress.CircleSnail size={28} indeterminate={true} color={textStyles.color} />
    </View>
  ) : null;

  console.log(textStyles);
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: background},
        styles[size],
        props.background === 'transparent' ? {borderColor: props.border || colors.blue} : {borderColor: props.background || colors.blue},
        // {pointerEvents: props.isLoading ? 'none' : 'auto'},
        props.style]}
      onPress={props.onPress}>
      {loading}
      <Text style={textStyles}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
  spinner: {
    height: 28,
    height: 28,
    marginRight: 32
  },
})

export default Button
