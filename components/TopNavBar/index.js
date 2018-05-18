import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'
import { LinearGradient, Constants } from 'expo';

import { colors, fontSizes, gradients } from '../../constants/styles'
import Avatar from '../Avatar'
import Back from '../../assets/images/back.png'

export default class TopNavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderHamburger = () => {
    return (
      <TouchableOpacity style={styles.leftIcon} onPress={Actions.drawerOpen}>
        <Image style={{}} source={this.props.drawerImage} />
      </TouchableOpacity>
    )
  }

  _renderBack = () => {
    return (
      <TouchableOpacity style={styles.leftIcon} onPress={this.props.onBack}>
        <Image style={{}} source={Back} />
      </TouchableOpacity>
    )
  }

  _renderLeft = () => {
    //props.drawerImage -> Drawer
    let button = null;
    if(this.props.back) button = this._renderBack();
    if(this.props.drawerImage) button = this._renderHamburger();
    return button;
  }

  _renderMiddle = () => {
    let middle = null;
    if(this.props.chat) {
      const {chat} = this.props;
      middle = (
        <View style={{flexDirection: 'row', marginLeft: 8}}>
          <Avatar style={styles.avatar} source={chat.avatar} />
          <View>
            <Text style={{color: colors.white}}>{chat.name}</Text>
            <Text style={{color: colors.lightWhite, fontSize: 13, marginVertical: 2}}>{chat.status}</Text>
          </View>
        </View>
      )
    }

    if(this.props.title) middle = (
      <View style={styles.center}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )

    //TODO: Chat
    return middle;
  }

  _renderRight = () => {
    return (
      <View></View>
    )
  }

  render() {
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
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 10 : Constants.statusBarHeight,
    paddingHorizontal: 16
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    color: colors.white,
    fontSize: 17
  },
  leftIcon: {
    position: 'absolute',
    left: 16,
    bottom: 22 //TODO: Test for iOS and fix
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36/2,
    marginHorizontal: 8
  },
})
