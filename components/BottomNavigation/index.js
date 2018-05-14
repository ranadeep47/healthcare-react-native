import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';

import Home from '../../assets/images/home.png'
import Bookings from '../../assets/images/bookings.png'
import Chats from '../../assets/images/chats.png'
import Profile from '../../assets/images/profile.png'

import { colors, fontSizes, gradients } from '../../constants/styles'

export default class BottomNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: getNavigationByType(props.type || 'patient'),
      active: props.active || 0
    }
  }

  _navigate = (link) => {
    console.log(link);
  }

  _renderLink = (link, i) => {
    return (
      <TouchableOpacity key={i} style={[styles.link ,{opacity: this.state.active == i ? 1 : 0.4}]} onPress={this._navigate.bind(this, link)}>
        <Image style={styles.icon} source={link.icon} />
        <Text style={styles.title}>{link.title}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <LinearGradient
        start={{x: 0.2, y: 0}} end={{x: 0.3, y: 3.2}}
        colors={gradients.greenBlue}
        style={styles.container}>
        { this.state.links.map(this._renderLink, this) }
      </LinearGradient>
    )
  }
}

function getNavigationByType(type) {
  let navigations = {
    doctor: [
      {routeKey: "appointments", title: "Appointments", icon: Bookings},
      {routeKey: "chats", title: "Chats", icon: Chats},
      {routeKey: "doctor_profile", title: "Profile", icon: Profile},
    ],
    patient: [
      {routeKey: "sample_screen", title: "Home", icon: Home},
      {routeKey: "patient_bookings", title: "Bookings", icon: Bookings},
      {routeKey: "chats", title: "Chats", icon: Chats},
      {routeKey: "patient_profile", title: "Home", icon: Profile},
    ]
  }

  return navigations[type]
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  link: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginBottom: 4
  },
  title: {
    color: colors.white,
    marginTop: 4,
    fontSize: 13
  }
})
