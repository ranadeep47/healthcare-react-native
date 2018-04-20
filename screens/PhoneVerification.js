import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { LinearGradient } from 'expo';

import { colors, fontSizes } from '../constants/styles'

import Button from '../components/Button'
import MobileInput from '../components/MobileInput'
import TextField from '../components/TextField'


const {width, height} = Dimensions.get('window');

export default class PhoneVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      mobileSubmitted: true,
      mobileError: false
    };

    this._onMobileNumberChange = this._onMobileNumberChange.bind(this);
    this._onMobileNumberSubmit = this._onMobileNumberSubmit.bind(this);
    this._onOTPSubmit = this._onOTPSubmit.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  _validateMobile(mobileNumber) {
    //TODO scope for improvement and add more checks
    if(mobileNumber.length === 10 && /^\d{10}$/.test(mobileNumber)) return true
    return false;
  }

  _onMobileNumberChange(mobileNumber) {
    //Validate mobile, if valid, enter setstate
    if(this._validateMobile(mobileNumber)) {
      this.setState({mobileNumber, mobileError: false});
    }
  }

  _onMobileNumberSubmit() {
    this.setState({
      mobileError: this.state.mobileNumber ? false : true,
      mobileSubmitted: this.state.mobileNumber ? true: false
    });
  }

  _onOTPSubmit() {

  }

  _renderMobileForm() {
    return (
      <View>
        <Text style={styles['formTitle']}>Let{"'"}s get started</Text>
        <Text style={{color: colors.text, textAlign: 'center', paddingVertical: 10,paddingHorizontal: 20}}>
          To keep your account secure, please enter your phone number
        </Text>
        <View style={{marginTop: 60}}>
          <Text style={{color: colors.text}}>MOBILE NUMBER</Text>
          <MobileInput error={this.state.mobileError} onChange={this._onMobileNumberChange} countryCode="+91"></MobileInput>
        </View>
        <Button onPress={this._onMobileNumberSubmit} style={{marginVertical: 20}} size='lg'>Enter your phone number</Button>
      </View>
    )
  }

  _renderOTPForm() {
    return (
      <View>
        <Text style={styles['formTitle']}>Wait for a moment</Text>
        <Text style={{color: colors.text, textAlign: 'center', paddingVertical: 10,paddingHorizontal: 20}}>
          Wait, while we automatically validate your OTP
        </Text>
        <View style={styles['otpFormContainer']}>
          <Text style={{color: colors.text}}>ENTER THE OTP</Text>
          <View style={styles['otpFieldsWrapper']}>
            <TextField style={styles['otpField']} />
            <TextField style={styles['otpField']} />
            <TextField style={styles['otpField']} />
            <TextField style={styles['otpField']} />
          </View>
        </View>
        <Button onPress={this._onOTPSubmit} style={{marginVertical: 20}} size='lg'>Verify OTP</Button>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gradientBackground}>
          <LinearGradient style={styles.gradient} colors={[colors.green, colors.blue]}>
            <Image source={require('../assets/images/MobileRegistration.png')} />
          </LinearGradient>
        </View>
        <View style={styles['formWrapper']}>
          {this.state.mobileSubmitted ? this._renderOTPForm() : this._renderMobileForm() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  gradientBackground: {

  },
  gradient: {
    paddingTop: 100,
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    width: width
  },
  formWrapper: {
    ...StyleSheet.absoluteFillObject,
    top: 240,
    backgroundColor: colors.white,
    marginHorizontal: 30
  },
  formTitle: {
    fontSize: fontSizes['x-lg'],
    textAlign: 'center',
    color: colors.dark.text,
    paddingVertical: 10
  },
  otpFormContainer: {
    marginTop: 80,
  },
  otpFieldsWrapper: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  otpField: {
    paddingHorizontal: 10
  }
});
