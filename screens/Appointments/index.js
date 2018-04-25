import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Scene,
  Tabs
} from 'react-native-router-flux';

import { colors, fontSizes, gradients } from '../../constants/styles'
import UpcomingAppointments from './UpcomingAppointments'
import PastAppointments from './PastAppointments'
import AppointmentRequests from './AppointmentRequests'

//TODO
export default class Appointments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Text>Hello World</Text>)
  }
}

const styles = StyleSheet.create({

})
