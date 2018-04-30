
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

import LiveIcon from '../../assets/images/Live.png'

const Avatar = (props) => {
  const isOnline = props.isOnline || false;
  const liveIcon = isOnline ? <Image source={LiveIcon} style={styles.liveIcon} /> : null
  return (
    <View>
      <Image style={[styles['container'], props.style]} source={{uri: props.source}}/>
      {liveIcon}
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 60/2
  },
  liveIcon: {
    ...StyleSheet.absoluteFillObject,
    top: -16,
    left: 24
  }
})

export default Avatar
