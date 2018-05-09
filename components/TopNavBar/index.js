import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'
import { LinearGradient, Constants } from 'expo';

import { colors, fontSizes, gradients } from '../../constants/styles'

export default class TopNavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderHamburger = () => {
    return (
      <TouchableOpacity style={styles.hamburger} onPress={Actions.drawerOpen}>
        <Image style={{}} source={this.props.drawerImage} />
      </TouchableOpacity>
    )
  }

  _renderLeft = () => {
    //props.drawerImage -> Drawer
    let button = null;
    if(this.props.drawerImage) button = this._renderHamburger();
    return button;
  }

  _renderMiddle = () => {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }

  _renderRight = () => {
    return (
      <View></View>
    )
  }

  render() {
    // console.log(this.props.title,'-----' ,this.props.drawerImage)
    return (
        <LinearGradient
          start={{x: 0.2, y: 0}} end={{x: 0.3, y: 3.2}}
          colors={gradients.greenBlue}
          style={styles.container} >
          { this._renderLeft() }
          { this._renderMiddle() }
          { this._renderRight() }
        </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 64 : 54 + Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    paddingHorizontal: 16
  },
  center: {

  },
  title: {
    color: colors.white,
    fontSize: 17
  },
  hamburger: {
    position: 'absolute',
    left: 16,
    bottom: 22 //TODO: Test for iOS and fix
  }
})
