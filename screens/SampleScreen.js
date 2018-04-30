import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { colors, fontSizes } from '../constants/styles'
import Link from '../components/Link'


export default class SampleScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles['container']}>
        <Text style={{marginVertical: 16, fontSize: fontSizes['x-lg']}}>List of screens: </Text>
        <ScrollView>
          <Link onPress={Actions.phone_verification}>Sign Up (Mobile & OTP)</Link>
          <Link onPress={Actions.countries}>Countries </Link>
          <Link onPress={Actions.sign_up}>Sign Up</Link>
          <Link onPress={Actions.upload_certificates}>Upload Certificates</Link>
          <Link onPress={Actions.specialities}>Specialities</Link>
          <Link onPress={Actions.preferences}>Preferences</Link>
          <Link onPress={Actions.call_availability}>Call Availability</Link>
          <Link onPress={Actions.appointments}>Appointments</Link>
          <Link onPress={Actions.chats}>Chats</Link>
          <Link onPress={Actions.doctor_detail}>Doctor Detail</Link>
          <Link onPress={Actions.favorite_doctors}>Favorite Doctors</Link>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
