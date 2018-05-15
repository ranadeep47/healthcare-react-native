import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on : props.on,
    }

    this.state.moveKnob = new Animated.Value(this.state.on ? 1 : 0)
  }

  _onSwitch() {    
    this.setState({on : !this.state.on}, () => {
      Animated.timing(this.state.moveKnob, {
        toValue: this.state.on ? 1 : 0,
        duration: 400
      }).start(() => {
        this.props.onSwitch(this.state.on);
      });
    });
  }

  render() {
    let moveKnob = this.state.moveKnob.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 34]
    })

    return (
      <View style={[styles['container'], this.props.style]}>
        <View style={[styles['bar'], this.state.on ? {backgroundColor: colors.blue} : null]}>
          <TouchableOpacity onPress={this._onSwitch.bind(this)}>
            <Animated.View style={[styles['knob'], {transform: [{translateX: moveKnob}]}]}></Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  bar: {
    backgroundColor: colors.lightText,
    borderColor: colors.lightText,
    height: 24,
    width: 60,
    borderRadius: 12
  },
  knob: {
    backgroundColor: colors.white,
    width: 24,
    height: 24,
    borderRadius: 24/2,
    marginHorizontal: 1
  }
})
