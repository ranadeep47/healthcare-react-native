import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

import RatingFull from '../../assets/images/rating_full.png'
import RatingHalf from '../../assets/images/rating_half.png'
import RatingEmpty from '../../assets/images/rating_empty.png'

const Ratings = (props) => {
  const { rating } = props;
  const icons = [
              ...(new Array(Math.floor(rating))).fill(RatingFull),
              ...(new Array(rating - Math.floor(rating) > 0 ? 1 : 0)).fill(RatingHalf),
              ...(new Array(5 - rating < 1 ? 0 : 5 - Math.floor(rating))).fill(RatingEmpty)
              ]
  
  return (
    <View style={styles.container}>
      {icons.map((img, i) => <Image key={i} source={img} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})

export default Ratings
