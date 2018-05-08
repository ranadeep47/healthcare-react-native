import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { LinearGradient, DangerZone } from 'expo';
const { Localization } = DangerZone;

import { colors, fontSizes } from '../constants/styles'
import Countries from '../constants/countries'
import Flags from '../assets/images/flags'
import RightArrow from '../assets/images/right_arrow.png'

import Button from '../components/Button'
import MobileInput from '../components/MobileInput'
import TextField from '../components/TextField'

const {width, height} = Dimensions.get('window');

export default class PhoneVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      mobileSubmitted: false,
      mobileError: false,
      country: {}
    };
  }

  async componentWillMount() {
    const countryCode = await Localization.getCurrentDeviceCountryAsync();
    const country = this.getCountryInfo(this.props.countryCode || countryCode);
    this.setState({country});
  }

  componentWillReceiveProps(newProps, oldProps) {
    if(newProps.countryCode !== oldProps.countryCode) {
      this.setState({country: this.getCountryInfo(newProps.countryCode)});
    }
  }

  _validateMobile = (mobileNumber) => {
    //TODO scope for improvement and add more checks
    if(mobileNumber.length === 10 && /^\d{10}$/.test(mobileNumber)) return true
    return false;
  }

  _onMobileNumberChange = (mobileNumber) => {
    //Validate mobile, if valid, enter setstate
    if(this._validateMobile(mobileNumber)) {
      this.setState({mobileNumber, mobileError: false});
    }
  }

  _onMobileNumberSubmit = () => {
    this.setState({
      mobileError: this.state.mobileNumber ? false : true,
      mobileSubmitted: this.state.mobileNumber ? true: false
    });
  }

  _onOTPSubmit= () => {

  }

  _showCountries = () => {
    Actions.push("countries");
  }

  _renderMobileForm() {
    return (
      <View>
        <Text style={styles['formTitle']}>Let{"'"}s get started</Text>
        <Text style={{color: colors.text, textAlign: 'center', paddingHorizontal: 16}}>
          To keep your account secure, please enter your phone number
        </Text>
        <TouchableOpacity onPress={this._showCountries} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 24}}>
          <Image style={styles.flag} source={this.state.country.flag} />
          <Text style={{textAlign: 'center'}}>{this.state.country.name}</Text>
          <Image style={{marginLeft: 48}} source={RightArrow} />
        </TouchableOpacity>
        <View>
          <Text style={{color: colors.text, marginVertical: 8}}>MOBILE NUMBER</Text>
          <MobileInput error={this.state.mobileError} onChange={this._onMobileNumberChange} countryCode={this.state.country.code}></MobileInput>
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

  getCountryInfo(countryCode) {
    const country = Countries[countryCode[0]].filter((country) => {
      return country.flag.split('/').pop().search(countryCode.toLowerCase()) >= 0;
    }).pop();

    if(!country) {
      //TODO: think about the list of allowed countries
    }
    return {code: country.code, name: country.name, flag: Flags[countryCode.toLowerCase()]}
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient style={styles.gradient} colors={[colors.green, colors.blue]}>
          <Image source={require('../assets/images/MobileRegistration.png')} />
        </LinearGradient>
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
  gradient: {
    paddingTop: 60,
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    width: width
  },
  formWrapper: {
    ...StyleSheet.absoluteFillObject,
    top: 220,
    backgroundColor: colors.white,
    marginHorizontal: 30
  },
  formTitle: {
    fontSize: fontSizes['x-lg'],
    textAlign: 'center',
    color: colors.dark.text,
    marginVertical: 24
  },
  flag: {
    width: 32,
    height: 24,
    marginRight: 16,
    borderRadius: 2
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
