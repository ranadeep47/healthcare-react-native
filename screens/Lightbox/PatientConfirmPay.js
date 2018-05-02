import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
  } from 'react-native';

import { colors, fontSizes } from '../../constants/styles'
import Lightbox from './BaseLightbox'

import Button from '../../components/Button'
import CreditCard from '../../components/CreditCard'
import Avatar from '../../components/Avatar'

export default class PatientConfirmPay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  closeModal = () => {
    this.setState({visible: false})
  }

  render() {
    const doctor = {
      name: "Dr. Adeline Woods",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      appointmentType: "Video",
      time: "7:00PM, Wed, 3rd January, 18"
    }

    const card = {
      balance: "$954.55",
      number: "0068",
      expiry: "09/17"
    }

    return (
      <Lightbox vertical={0.8} align="bottom" visible={this.state.visible}>
        <View style={styles.container}>
          <View style={[styles.row]}>
            <Avatar source={doctor.avatar} />
            <View style={{marginLeft: 16}}>
              <Text style={styles.title}>{doctor.name}</Text>
              <Text style={{fontSize: fontSizes['sm'], color: colors.dark.text, marginVertical: 4}}>{doctor.appointmentType} appointment</Text>
              <Text style={{fontSize: fontSizes['sm'], color: colors.text}}>{doctor.time}</Text>
            </View>
          </View>
          <CreditCard style={{marginTop: 24}} card={card}/>
          <View style={styles.buttons}>
            <View style={[styles.row]}>
              <Button size="lg" style={styles.largeButton} onPress={() => {}}>
                Confirm and pay 30$
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
    color: colors.dark.text
  },
  buttons: {
    marginVertical: 24
  },
  largeButton: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8
  },
})
