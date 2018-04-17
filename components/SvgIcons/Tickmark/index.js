

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Svg } from 'expo';

import { colors, fontSizes } from '../../../constants/styles'

const Tickmark = (props) => {
  return (
    <View style={[props.style]}>
      <Svg
        height="18"
        width="18">
          <Svg.Path
            scale="0.325"
            d="M 20.687 38.332 c -2.072 2.072 -5.434 2.072 -7.505 0 L 1.554 26.704 c -2.072 -2.071 -2.072 -5.433 0 -7.504 c 2.071 -2.072 5.433 -2.072 7.505 0 l 6.928 6.927 c 0.523 0.522 1.372 0.522 1.896 0 L 36.642 7.368 c 2.071 -2.072 5.433 -2.072 7.505 0 c 0.995 0.995 1.554 2.345 1.554 3.752 c 0 1.407 -0.559 2.757 -1.554 3.752 L 20.687 38.332 Z"
            fill={props.fill || colors.blue}/>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Tickmark
