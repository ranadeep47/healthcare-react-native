
import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';

const Avatar = (props) => {
  return (<Image style={[styles['container'], props.style]} source={{uri: props.source}}/>)
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 60/2
  }
})

export default Avatar
