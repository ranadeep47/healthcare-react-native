import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
  } from 'react-native';
import moment from 'moment'

import { colors, fontSizes } from '../../constants/styles'
import Lightbox from './BaseLightbox'

import Button from '../../components/Button'
import Avatar from '../../components/Avatar'
import UserCallSchedule from '../../components/UserCallSchedule'

export default class PatientCancelAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      doctor: {
        name: "Adeline Woods",
        specialisation: "Cardio sciences & cardio vascular surgey",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
        time: new Date(),
        callType: "Video Call"
      },
    }
  }

  _cancelAppointment = () => {

  }

  closeModal = () => {
    this.setState({visible: false})
  }

  render() {
    return (
      <Lightbox vertical={0.7} align="bottom" visible={this.state.visible}>
        <View style={styles.container}>
          <Text style={styles.title}>Are you sure you want to cancel the appointment?</Text>
          <UserCallSchedule style={styles.doctor} data={this.state.doctor} />
          <View style={styles.buttons}>
            <View style={[styles.row]}>
              <Button size="lg" background={colors.red} style={styles.largeButton} onPress={this._cancelAppointment}>
                Yes, cancel appointment
              </Button>
            </View>
            <View style={[styles.row]}>
              <Button size="lg" background="transparent" style={styles.largeButton} onPress={this.closeModal}>
                Close
              </Button>
            </View>
          </View>
        </View>
      </Lightbox>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 32
  },
  title: {
    fontSize: fontSizes['md'],
    color: colors.dark.text,
    marginVertical: 16
  },
  doctor: {
    marginVertical: 16
  },
  buttons: {
    marginVertical: 16
  },
  largeButton: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8
  },
})
