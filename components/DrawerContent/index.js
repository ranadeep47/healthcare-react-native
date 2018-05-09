import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import { LinearGradient } from 'expo'
import { colors, fontSizes, gradients } from '../../constants/styles'

import Avatar from '../Avatar'
import Link from '../Link'

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <LinearGradient start={{x: 0.2, y: 0}} end={{x: 0.3, y: 3.2}} colors={gradients.greenBlue} style={styles.profile}>
        <Avatar style={styles.avatar} source="https://randomuser.me/api/portraits/men/18.jpg" />
        <View style={{marginLeft: 8}}>
          <Text style={{marginVertical: 4,color: colors.white, fontSize: fontSizes['lg']}}>Raj Abishek</Text>
          <Text style={{color: colors.lightWhite, fontSize: fontSizes['sm']}}>rajabishek@hotmail.com</Text>
        </View>
      </LinearGradient>
      <View style={styles.navigation}>
        <Link style={styles.link} onPress={() => {}} textStyle={{color: colors.dark.text}}>Home</Link>
        <Link style={styles.link} onPress={() => {}} textStyle={{color: colors.dark.text}}>Bookings</Link>
        <Link style={styles.link} onPress={() => {}} textStyle={{color: colors.dark.text}}>Chats</Link>
        <Link style={styles.link} onPress={() => {}} textStyle={{color: colors.dark.text}}>Profile</Link>
        <Link style={styles.link} onPress={() => {}} textStyle={{color: colors.dark.text}}>Favorite Doctors</Link>
        <Link style={styles.link} onPress={() => {}} textStyle={{color: colors.dark.text}}>Notifications</Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  profile: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50/2
  },
  navigation: {
    flex: 2.5,
    paddingHorizontal: 32,
    paddingVertical: 16
  },
  link: {
    marginVertical: 8
  }
})

export default DrawerContent
