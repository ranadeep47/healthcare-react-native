import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'
import Tickmark from '../SvgIcons/Tickmark'

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout : props.timeout || 4000,
      opacity: new Animated.Value(1)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        delay: this.state.timeout,
        duration: 1000,
      }
     ).start();
  }

  render() {
    return (
      <Animated.View style={[{opacity: this.state.opacity}, styles.container, this.props.style]}>
        <View style={styles.tick}>
          <Tickmark fill={colors.dark.text} style={{padding: 6}} />
        </View>
        <Text style={styles.text}>{this.props.text}</Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    elevation: 1,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.dark.text,
    padding: 16,
    borderRadius: 2,
    shadowColor: colors.blue,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: {x: 0, y: 1},
    marginHorizontal: 16,
    bottom: 80,
    right: 0,
    left: 0
  },
  tick: {
    width: 28,
    height: 28,
    borderRadius: 28/2,
    backgroundColor: colors.background,
    marginRight: 16
  },
  text: {
    lineHeight: 20,
    fontSize: fontSizes['sm'],
    color: colors.background,
    flexWrap: 'wrap',
    flex: 1
  }
})
