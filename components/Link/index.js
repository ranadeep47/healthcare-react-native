import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

const Link = (props) => {
  return (
    <TouchableOpacity
      style={[props.style]}
      onPress={props.onPress}>
      <Text style={{color: colors.blue, padding: 8}}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})

export default Link
