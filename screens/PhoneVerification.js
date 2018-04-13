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


const {width, height} = Dimensions.get('window');

export default class PhoneVerification extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gradientBackground}>
          <LinearGradient style={styles.gradient} colors={[colors.green, colors.blue]}>
            <Image source={require('../assets/images/MobileRegistration.png')} />
          </LinearGradient>
        </View>
        <View style={styles['formWrapper']}>
          <Text style={styles['formTitle']}>Let{"'"}s get started</Text>
          <Text style={{color: colors.text, textAlign: 'center', paddingVertical: 10,paddingHorizontal: 20}}>
            To keep your account secure, please enter your phone number
          </Text>
          <MobileInput style={{marginVertical: 20}} countryCode="+91"></MobileInput>
          <Button style={{marginVertical: 20}} size='lg'>Enter your phone number</Button>
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
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    width: width
  },
  formWrapper: {
    ...StyleSheet.absoluteFillObject,
    top: 300,
    backgroundColor: colors.white,
    marginHorizontal: 40
  },
  formTitle: {
    fontSize: fontSizes['xx-lg'],
    textAlign: 'center',
    color: colors.dark.text,
    paddingVertical: 20
  },

});
