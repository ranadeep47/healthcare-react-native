import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Svg } from 'expo';

import { colors, fontSizes } from '../../../constants/styles'

const Favorite = (props) => {
  return (
    <View style={[props.style]}>
      <Svg width="24" height="24">
        <Svg.Polygon
          scale="0.0468"
          points="255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472     139.103,318.011 97.41,497.25   "
          fill={props.fill || colors.blue}/>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Favorite

/*
scale="0.06"
*/
