import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Svg } from 'expo';

import { colors, fontSizes } from '../../../constants/styles'

const Close = (props) => {
  return (
    <View style={[props.style]}>
      <Svg
        height="18"
        width="18">
          <Svg.Path
            scale="0.07"
            d="M 131.804 106.491 l 75.936 -75.936 c 6.99 -6.99 6.99 -18.323 0 -25.312 c -6.99 -6.99 -18.322 -6.99 -25.312 0 l -75.937 75.937 L 30.554 5.242 c -6.99 -6.99 -18.322 -6.99 -25.312 0 c -6.989 6.99 -6.989 18.323 0 25.312 l 75.937 75.936 L 5.242 182.427 c -6.989 6.99 -6.989 18.323 0 25.312 c 6.99 6.99 18.322 6.99 25.312 0 l 75.937 -75.937 l 75.937 75.937 c 6.989 6.99 18.322 6.99 25.312 0 c 6.99 -6.99 6.99 -18.322 0 -25.312 L 131.804 106.491 Z"
            fill={props.fill || colors.blue}/>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Close
